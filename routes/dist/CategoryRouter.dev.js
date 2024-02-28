"use strict";

var express = require('express');

var router = express.Router();

var category = require('../controller/categoryController');

var verifyJWT = require('../middleware/verifyJWT');

var roles = require('../middleware/roles');

var upload = require('../middleware/multer');

var cloudinaryConfig = require('../middleware/cloudinaryConfig'); // router.route('/createCategory').post(verifyJWT,roles("admin"),category.createCategory)


router.route('/createCategory').post(verifyJWT, roles("admin"), upload.single("image"), category.createCategory);
router.route('/getAll').get(verifyJWT, category.getAllCategory);
router.route('/updateCategory/:id').put(verifyJWT, roles("admin"), category.UpdateCategory);
router.route('/delete/:id')["delete"](verifyJWT, roles("admin"), category.deletecategory); // router.route('/content/:contentId').delete(verifyJWT,roles("admin"),contentController.DeleteContent)

module.exports = router;
//# sourceMappingURL=CategoryRouter.dev.js.map
