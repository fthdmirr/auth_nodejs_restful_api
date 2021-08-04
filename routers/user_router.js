const userRouter=require('express').Router()

const token_middleware=require('../middleware/token_middleware')

const user_controller=require('../controllers/user_controller')

userRouter.delete('/delete',token_middleware,user_controller.deleteUser)


module.exports=userRouter