import { Router } from 'express';
import { sample_products, sample_tags } from '../data';
import asynceHandler from 'express-async-handler';
import { ProductModel } from '../models/product.model';
import { UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
const router = Router();

router.get("/seed", asynceHandler(
    async (req, res) => {
        const productsCount = await ProductModel.countDocuments({sold: false});
        if(productsCount>0){
            res.send("Seed is already done!");
            return;
        }

        await ProductModel.create(sample_products);
        res.send("Seed Is Done!");
    res.send(sample_products);
}))

// update all the sold to false
/*router.get("/reset-sold-status", async (req, res) => {
    try {
        const result = await ProductModel.updateMany({}, { $set: { sold: false } });
        console.log(result); // 打印更新的结果
        res.status(200).json({ message: 'Reset sold status successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});*/

router.get("/", asynceHandler(
    async (req,res) => {
        const products = await ProductModel.find();
            res.send(products);
    }
))

router.get("/search/:searchTerm", asynceHandler(
    async (req,res) =>{
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const products = await ProductModel.find({name: {$regex:searchRegex}})
    res.send(products);
    }
))

router.get("/tags", asynceHandler(
    async (req,res) =>{
        const tags = await ProductModel.aggregate([
            {
                $unwind:'$tags'
            },
            {
                $group:{
                    _id:'$tags',
                    count:{$sum:1}
                }
            },
            {
                $project:{
                    _id:0,
                    name:'$_id',
                    count: '$count'
                }
            }
        ]).sort({count:-1});

        const all ={
            name : 'All',
            count: await ProductModel.countDocuments()
        }

        tags.unshift(all);
        res.send(tags);
    }
))


router.get("/tag/:tagName", asynceHandler(
    async (req,res) => {
        const products = await ProductModel.find({tags: req.params.tagName})
        res.send(products);
    }
))

router.get("/:productId",asynceHandler(
    async (req,res) =>{
        const product = await ProductModel.findById(req.params.productId)
        res.send(product);
    }
))

// Route for seller to create a product
router.post("/create-product", asynceHandler(
    async (req:any, res:any) => {
      const { userId, name, imageUrl, price, tags } = req.body;
      const user = await UserModel.findById(userId);
      if (!user || user.type !== 'seller') {
        return res.status(HTTP_BAD_REQUEST).send("Invalid seller ID.");
      }
  
      const product = new ProductModel({
        name,
        imageUrl,
        price,
        tags,
        seller: userId
      });
    }
  ));

export default router;