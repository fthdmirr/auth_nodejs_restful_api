const registerRouter=require('express').Router()
const registerController=require('../controllers/register_controller')


registerRouter.post('/',registerController)



module.exports=registerRouter


