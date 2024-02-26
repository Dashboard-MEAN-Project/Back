const mongoose = require('mongoose');
// const joi=require('joi')
const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    
     image:String,
   
     
    
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;

// {
    
//     "email":"heba66@gmail.com",
//     "password":"4456767"
    
// }