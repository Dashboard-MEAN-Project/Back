// const cloudinary = require('cloudinary')

// const dotenv = require('dotenv')
// cloudinary.config({
//     cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//     api_key:process.env.CLOUDINARY_API_KEY,
//     api_secret:process.env.CLOUDINARY_API_SECRET 
// })


// exports.uploads = (file) =>{
//     return new Promise(resolve => {
//     cloudinary.uploader.upload(file, (result) =>{
//     resolve({url: result.url, id: result.public_id})
//     }, {resource_type: "auto"})
//     })
// }


const cloudinaryModule = require('cloudinary');
const cloudinary = cloudinaryModule.v2;
require('dotenv').config()
cloudinary.config({ 
  //  cloud_name: "dpagwp2y8",
  //   api_key: "222669724394958",
  //   api_secret:"EZ0r6NZqZ49PICGHAv7uQuC-dmg"
  cloud_name:'dc6cv54k9',
  api_key:'596865293149792',
  api_secret:'uQK3UmEOaLb2wxvKZ1ITz9td1DM'
  });


// const uploadToCloudinary = async (file) => {
//       console.log("cloudinary",file.path)
//     let result= await cloudinary.uploader.upload(file.path,{
//         folder: 'samples',
//         use_filename: true,
//         resource_type: 'raw'
//         }
// };
// module.exports = {
//     uploadToCloudinary
// };
let uploadMedia = async(file) => {
    // if()
  console.log("file path ", file.path);
  console.log(process.env.CLOUDINARY_CLOUD_NAME+" jghghgh")
    if (file.path) {
      
      // if (isImageFile || isVideoFile) {              
      const uploadRes = await cloudinary.uploader.upload(file.path, {
        // use_filename: true,
        resource_type: 'auto'
      });

      if (uploadRes) {
        return uploadRes;
      }
  }
    return false;
}
module.exports=uploadMedia