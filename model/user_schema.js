const mongoose = require('mongoose')
const Schema = mongoose.Schema

//USER SCHEMA
const UserSchema = new Schema({
    email: { type: String, require: true, trim: true, unique: true, lowercase: true },
    password: { type: String, require: true, trim: true, min: 6 },
    userName: { type: String, require: true, trim: true, unique: true, minlength: 3, maxlength: 20 },
},)

UserSchema.methods.toJSON = function () {
    const user = this.toObject()
    delete user.__v
    delete user.password
    return user
}

//USER MODEL
const User = mongoose.model('User', UserSchema)

module.exports = User
