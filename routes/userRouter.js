const express=require('express')
const router=express.Router()
const userController=require('../controller/Users')
const verifyJWT = require('../middleware/verifyJWT')
const roles = require('../middleware/roles')
const validationMiddleware=require('../middleware/validationSchema')

router.use(verifyJWT)
router.use(roles("admin"))
router.route('/').get(userController.getAllusers)

router.route('/users/:userId').patch(validationMiddleware,userController.Updateuser )


router.route('/users/:userId/deactivate').patch(userController.Deactivateuser) 

router.route('/users/:userId').delete(userController.Deleteuser)


module.exports=router