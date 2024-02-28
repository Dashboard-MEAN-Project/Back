"use strict";

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
var cloudinaryModule = require('cloudinary');

var cloudinary = cloudinaryModule.v2;

require('dotenv').config();

cloudinary.config({
  cloud_name: "dpagwp2y8",
  api_key: "222669724394958",
  api_secret: "EZ0r6NZqZ49PICGHAv7uQuC-dmg"
}); // const uploadToCloudinary = async (file) => {
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

var uploadMedia = function uploadMedia(file) {
  var uploadRes;
  return regeneratorRuntime.async(function uploadMedia$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // if()
          console.log("file path ", file.path);
          console.log(process.env.CLOUDINARY_CLOUD_NAME + " jghghgh");

          if (!file.path) {
            _context.next = 8;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(cloudinary.uploader.upload(file.path, {
            // use_filename: true,
            resource_type: 'auto'
          }));

        case 5:
          uploadRes = _context.sent;

          if (!uploadRes) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", uploadRes);

        case 8:
          return _context.abrupt("return", false);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = uploadMedia;
//# sourceMappingURL=cloudinaryConfig.dev.js.map
