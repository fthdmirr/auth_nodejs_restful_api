require('dotenv').config()
require('./db/mongod')
const express=require('express')
const app=express()

//CONSTANTS
const auth_constants=require('./consts/routes/auth_constants')

const error_middleware=require('./middleware/error_middleware')

//ROUTERS
const loginRouter=require('./routers/login_router')
const registerRouter=require('./routers/register_router')
const userRouter=require('./routers/user_router')

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(auth_constants.login,loginRouter)
app.use(auth_constants.register,registerRouter)
app.use(auth_constants.user,userRouter)
app.use(error_middleware)



app.listen(process.env.PORT,(_)=>console.log('connected to server'))