"use strict";

var express = require('express');

var router = express.Router();

var validationMiddleware = require('../middleware/validationSchema');

var authcontroller = require('../controller/authcontroller');

console.log("hi");
router.route('/register').post(validationMiddleware, authcontroller.register);
router.route('/login').post(authcontroller.login);
router.route('/refresh').get(authcontroller.refresh);
router.route('/logout').post(authcontroller.logout);
module.exports = router;
//# sourceMappingURL=authRoutes.dev.js.map
