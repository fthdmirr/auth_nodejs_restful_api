const jwt = require('jsonwebtoken')

const token_middleware = (req, res, next) => {
    //take the token from request header
    const token = req.header('auth-token')
    //check exist
    if (!token) return res.status(401).json({ message: 'Access Denied' })
    //send userID to another middleware
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECURE)
        req.userID = verified._id
        next()
    } catch (_) {
        res.status(400).json({ message: 'Invalid Token' })
    }

}

module.exports = token_middleware