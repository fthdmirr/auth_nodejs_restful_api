const bcrypt = require('bcrypt')
const User = require('../model/user_schema')
createError = require('http-errors')

const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById({ _id: req.userID })
        const result = await bcrypt.compare(req.body.password, user.password)
        if (!result) next(createError(404, 'Check your password again!'))

        await User.findByIdAndDelete(req.userID)
        res.json(user)
    } catch (error) {
        next(createError(404, error))
    }
}



module.exports = { deleteUser }