const Joi=require('joi')

//USER SCHEMA
const registerSchema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(6).trim().required(),
    userName: Joi.string().alphanum().min(3).max(20).required(),
})

const loginSchema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(6).trim().required(),
})

//it's return error and value object
const registerValidation=(userObject)=>registerSchema.validate(userObject)
const loginValidation=(userObject)=>loginSchema.validate(userObject)


module.exports={registerValidation,loginValidation}
