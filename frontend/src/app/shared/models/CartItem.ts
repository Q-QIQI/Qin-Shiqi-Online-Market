import{ Product } from "./Product"

export class CartItem{
    /*public 可以被外部访问*/ 
    constructor(public product:Product){}
    quantity:number = 1;
    price: number = this.product.price;
}