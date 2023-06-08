const json = require('body-parser');
const Product = require('./../models/Product');

exports.products = async (req, res) => {
    try {
        // get all products
        const allProduct = await Product.find({},{name:1,price:1});
    res.status(200).json({status:"success",data:allProduct});
    } catch (error) {
        console.log(error);
    }
}

//  Create product (if need)
// exports.createProduct = async (req, res) => {
//     try {
//            // Destructuring the data from reqest body
//            const {name, price, description} = req.body;
        
//            // Validation of data
//            if (!name) {
//                return res.json({ error: "Product Must have a Name" });
//            }
   
//            if (!price || !Number.isFinite(price)) {
//                return res.json({ error: "Price is required and must be a number" });
//            }

//             // Adding Product data to database
//             const products = await new Product({
//                 name,
//                 price,
//                 description
//             }).save();
//             // Sending Response
//             res.status(200).json({message:"Product added successfully.",data:products});
//     } catch (error) {
//         console.log(error);
//     }
// }