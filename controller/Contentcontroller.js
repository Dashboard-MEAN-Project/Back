

const Content = require('../models/product');
const multer=require('multer')
const verifyJWT= require('../middleware/verifyJWT')
const jwt=require('jsonwebtoken');
const Category= require('../models/category')
const mongoose=require('mongoose')
// const multerStorage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'public')
//     },
//     filename:(req,file,cb)=>{
// const ext=file.mimetype.split('/')[1]

// cb(null,`user-${req.currentUser.id}-${Date.now()}.${ext}`)
//     }
// })

// const multerFilter=(req,file,cb)=>{
//     if(file.mimetype.startsWith('image'))
//     {
//         cb(null,true)
//     }else{
//         cb('not a image please upload only images ',false)
//     }


// }

// const upload=multer({
//     storage:multerStorage,
//     fileFilter:multerFilter
// });
 const createImage=async (req, res) => {
    const category1 = await Category.findById(req.body.category)
    if(!category1)
    {
        return res.status(404).json({msg:"invalid category"})
    }
    const { title, description ,price,category} = req.body;


    try {
        const newContent = await Content.create({ title, description,price,category,imageUrl:req.file.path });
        res.json(newContent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}



 const UpdateContent= async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).json({msg:"invalid product id"})
    }
    const category2 = await Category.findById(req.body.category)
    if(!category2)
    {
        return res.status(404).json({msg:"invalid category"})
    }
    const { contentId } = req.params;
    const { title, description, price,category} = req.body;

    try {
        const updatedContent = await Content.findByIdAndUpdate(contentId, { title, description, price,category}, { new: true });
        res.json(updatedContent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const DeleteContent =async (req, res) => {
    
    const { contentId } = req.params;

    try {
        await Content.findByIdAndDelete(contentId);
        res.json({ message: 'Content deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports={
    createImage,
    UpdateContent,
    DeleteContent,
}
