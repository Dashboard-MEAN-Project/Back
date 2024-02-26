// const mongoose = require('mongoose');
// const joi=require('joi')
// // const contentSchema = new mongoose.Schema({
// //     title: { type: String, required: true },
// //     body: { type: String, required: true },
    
// //      image:String,
   
     
    
// // });

// // const Content = mongoose.model('Content', contentSchema);

// // module.exports = Content;

// // // {
    
// // //     "email":"heba66@gmail.com",
// // //     "password":"4456767"
    
// // // }
// const mongoose = require('mongoose'); 


// var catergorySchema = new mongoose.Schema({
//    title:{
//     type:String,
//     required: [true,"category title is required"]
//    },
//    imageUrl:{
//     type:String
//    }
// });


// module.exports = mongoose.model('Category', catergorySchema);
// var productSchema = new mongoose.Schema({
//     title: {
//        type: String,
//        required: [true, "Product title is required"]
//     },
//     description: {
//        type: String,
//        required: [true, "Product description is required"]
//     },
//     price: {
//        type: Number,
//        required: [true, "Product price is required"]
//     },
//     category: {
//        type: mongoose.Schema.Types.ObjectId,
//        ref: 'Category',
//        required: [true, "Product category is required"]
//     },
//     imageUrl: {
//        type: String
//     }
//  });
 
//  const Product = mongoose.model('Product', productSchema);



 const mongoose = require('mongoose');

// Category Schema
// const categorySchema = new mongoose.Schema({
//    title: {
//       type: String,
//       required: [true, "Category title is required"]
//    },
//    imageUrl: {
//       type: String
//    }
// });

// const Category = mongoose.model('Category', categorySchema);

// Product Schema
const productSchema = new mongoose.Schema({
   title: {
      type: String,
      required: [true, "Product title is required"]
   },
   description: {
      type: String,
      required: [true, "Product description is required"]
   },
   price: {
      type: Number,
      required: [true, "Product price is required"]
   },
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, "Product category is required"]
   },
   imageUrl: {
      type: String
   }
});

const Product = mongoose.model('Product', productSchema);
module.exports=Product