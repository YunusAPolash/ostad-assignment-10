const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name:{
        type: String,
    },
    price:{
        type: Number,
    },
    description:{
        type: String,
    }
},
{timestamps:true,versionKey:false}
);


const ProductModel = new mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
