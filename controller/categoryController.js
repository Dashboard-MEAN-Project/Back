
const CategoryModel=require('../models/category')


const createCategory =async(req,res)=>{
    try{
        const {title, imageUrl}= req.body
        if(!title || ! imageUrl){
            return res.status(500).json({message:"please provide category title or image"})
        }
        const newCategory = new CategoryModel({title,imageUrl})
        await newCategory.save()
        res.status(201).json({message:"category created"})
    } catch (error){
return res.status(500).json({message:"Error in create Category api"})
    }

}


const getAllCategory =async(req,res)=>{
    try{
const categories = await CategoryModel.find({})
if(!categories)
{
    return res.status(404).json({msg:"No Categories Found"})
}
res.status(200).json({success:true, totaleCategory:categories.length ,categories})
    }catch(error){
res.status(500).json({msg:"Error in get All category Api",error})
    }
}

const UpdateCategory = async(req,res)=>{
    try{
const {id}= req.params;
const {title,imageUrl}=req.body
const update = await CategoryModel.findByIdAndUpdate(id,{title,imageUrl},{new: true})
if(!update)
{
    return res.status(500).json({msg:"no category Found"})
}
res.status(200).json({msg:"category updated successfully"})
    }catch(error){
res.status(500).json({msg:"Error in update category Api",error})
    }
}


const deletecategory = async(req,res)=>{
    try{
const {id}=req.params
if(! id){
    return res.status(500).json({msg:"please provide category ID"})
}
const category = await CategoryModel.findById(id)
if(! category)
{
    res.status(500).json({msg:"No category found with this ID"})
}
await CategoryModel.findByIdAndDelete(id)
res.status(200).json({msg:"category Deleted successfully"})
    }catch(error){
        res.status(500).json({msg:"Error in Delete category Api",error})

    }
}








module.exports={
    createCategory,
    getAllCategory,
    UpdateCategory,
    deletecategory
}