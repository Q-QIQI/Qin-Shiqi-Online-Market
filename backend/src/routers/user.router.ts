import {Router} from 'express';
import { sample_users } from '../data';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';


const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
     const usersCount = await UserModel.countDocuments();
     if(usersCount> 0){
       res.send("Seed is already done!");
       return;
     }

     await UserModel.create(sample_users);
     res.send("Seed Is Done!");
 }
 ))

 router.post("/login", asyncHandler(
  async (req: any, res: any) => {
    const { email, password, type } = req.body; // 从请求体中获取用户类型
    const user = await UserModel.findOne({ email });
  
    if (!user) {
      return res.status(HTTP_BAD_REQUEST).send("User does not exist.");
    }

    if (user.type === 'seller' && type === 'buyer') { // 使用从请求体中获取的用户类型
      return res.status(HTTP_BAD_REQUEST).send("You are not allowed to login as a buyer.");
    } else if (user.type === 'buyer' && type === 'seller') { // 使用从请求体中获取的用户类型
      return res.status(HTTP_BAD_REQUEST).send("You are not allowed to login as a seller.");
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      res.send(generateTokenReponse(user));
    } else {
      res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
    }
  }
))



router.post('/register', asyncHandler(
  async (req, res) => {
    const {name, email, password, address, type} = req.body;
    const user = await UserModel.findOne({email});
    if(user){
      res.status(HTTP_BAD_REQUEST)
      .send('User is already exist, please login!');
      return;
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser:User = {
      id:'',
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      address,
      isAdmin: false,
      type
    }

    const dbUser = await UserModel.create(newUser);
    res.send(generateTokenReponse(dbUser));
  }
))

  const generateTokenReponse = (user : User) => {
    const token = jwt.sign({
      id: user.id,email:user.email, isAdmin: user.isAdmin
    },process.env.JWT_SECRET!,{
      expiresIn:"30d"
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      isAdmin: user.isAdmin,
      token: token,
      type:user.type
    };
  }


  export default router;