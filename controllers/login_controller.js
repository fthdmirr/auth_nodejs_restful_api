const validation = require('../validation/user_validation')
const createError = require('http-errors')
const User = require('../model/user_schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth_error_const = require('../consts/error/auth_error_constants')

const loginController = async (req, res, next) => {

    const { error } = validation.loginValidation({ email: req.body.email, password: req.body.password })
    if (error) next(error)

    const user = await User.findOne({ email: req.body.email })

    if (!user) next(createError(400, auth_error_const.loginFailed))

    const passwordControl = await bcrypt.compare(req.body.password, user.password)

    if (!passwordControl) next(createError(400, auth_error_const.loginFailed))

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECURE)

    res.json({ user, token })
}

module.exports = loginController