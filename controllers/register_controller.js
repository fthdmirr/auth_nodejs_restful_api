const validator = require('../validation/user_validation')
const User = require('../model/user_schema')
const createError = require('http-errors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const registerController = async (req, res, next) => {
    //check joi validation and if not validate throw a error middleware
    const { error } = validator.registerValidation(req.body)
    if (error) next(error)

    const newUser = new User(req.body)

    //password hashed
    newUser.password = await bcrypt.hash(req.body.password, 10)

    //user saved in db
    newUser.save(req.body)
        .then(user => {
            //create token
            const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_SECURE)

            res.json({ user, token })
        })
        .catch(err => next(err))

}


module.exports = registerController