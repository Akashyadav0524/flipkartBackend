import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    // id:String, duplicate product hatne k liye
    id: {
        type:String,
        required: true,
        unique: true
    },
    url:String,
    Url:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
    
});

const Product = mongoose.model('product',productSchema);

export default Product;