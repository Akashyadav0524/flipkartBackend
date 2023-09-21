import { products } from "./constants/data.js"
 import Product from "./model/product-schema.js";



const DefaultData =async() =>{
    try {
        // await Product.deleteMany({});//pehel delete kardega duplicate products ko
        await Product.insertMany(products);
        console.log('Data imported Sucessfully');
    } catch (error) {
        console.log('Erro while inserting default data', error.message);
    }
}


export default DefaultData;