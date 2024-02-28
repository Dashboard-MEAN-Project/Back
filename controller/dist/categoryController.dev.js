"use strict";

var CategoryModel = require('../models/category');

var uploadMedia = require('../middleware/cloudinaryConfig'); // router.post('/upload', upload.single('image'), function (req, res) {
//   });
// const createCategory =async(req,res)=>{
//     try{
//         const {title, imageUrl}= req.body
//         if(!title || ! imageUrl){
//             return res.status(500).json({message:"please provide category title or image"})
//         }
//         const newCategory = new CategoryModel({title,imageUrl})
//         await newCategory.save()
//         res.status(201).json({message:"category created"})
//     } catch (error){
// return res.status(500).json({message:"Error in create Category api"})
//     }
// }


var createCategory = function createCategory(req, res) {
  var title, cloudinaryResult, newCategory;
  return regeneratorRuntime.async(function createCategory$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          title = req.body.title;
          console.log("create Ctegory");

          if (title) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Title is required'
          }));

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(uploadMedia(req.file));

        case 7:
          cloudinaryResult = _context.sent;
          console.log(cloudinaryResult); // const newContent = await CategoryModel.create({ title,imageUrl:req.file.path });

          _context.next = 11;
          return regeneratorRuntime.awrap(CategoryModel.create({
            title: req.body.title,
            imageUrl: cloudinaryResult.secure_url
          }));

        case 11:
          newCategory = _context.sent;
          res.json(newCategory);
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](4);
          console.error(_context.t0);
          res.status(500).json({
            message: 'Server Error'
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 15]]);
};

var getAllCategory = function getAllCategory(req, res) {
  var categories;
  return regeneratorRuntime.async(function getAllCategory$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(CategoryModel.find({}));

        case 3:
          categories = _context2.sent;

          if (categories) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            msg: "No Categories Found"
          }));

        case 6:
          res.status(200).json({
            success: true,
            totaleCategory: categories.length,
            categories: categories
          });
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            msg: "Error in get All category Api",
            error: _context2.t0
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var UpdateCategory = function UpdateCategory(req, res) {
  var id, _req$body, title, imageUrl, update;

  return regeneratorRuntime.async(function UpdateCategory$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _req$body = req.body, title = _req$body.title, imageUrl = _req$body.imageUrl;
          _context3.next = 5;
          return regeneratorRuntime.awrap(CategoryModel.findByIdAndUpdate(id, {
            title: title,
            imageUrl: imageUrl
          }, {
            "new": true
          }));

        case 5:
          update = _context3.sent;

          if (update) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(500).json({
            msg: "no category Found"
          }));

        case 8:
          res.status(200).json({
            msg: "category updated successfully"
          });
          _context3.next = 14;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            msg: "Error in update category Api",
            error: _context3.t0
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

var deletecategory = function deletecategory(req, res) {
  var id, category;
  return regeneratorRuntime.async(function deletecategory$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;

          if (id) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt("return", res.status(500).json({
            msg: "please provide category ID"
          }));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(CategoryModel.findById(id));

        case 6:
          category = _context4.sent;

          if (!category) {
            res.status(500).json({
              msg: "No category found with this ID"
            });
          }

          _context4.next = 10;
          return regeneratorRuntime.awrap(CategoryModel.findByIdAndDelete(id));

        case 10:
          res.status(200).json({
            msg: "category Deleted successfully"
          });
          _context4.next = 16;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            msg: "Error in Delete category Api",
            error: _context4.t0
          });

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

module.exports = {
  createCategory: createCategory,
  getAllCategory: getAllCategory,
  UpdateCategory: UpdateCategory,
  deletecategory: deletecategory
};
//# sourceMappingURL=categoryController.dev.js.map
