const jwt = require('jsonwebtoken')
const maxAge = 3 * 24 * 60 * 60

// Function: Create a token for each new user
const createToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_1, { expiresIn: maxAge })
}
// Middleware: Check token in header to authorize access to user 
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    // console.log('authHeader', authHeader)
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_1, (err, user) => {
        if (err) return res.sendStatus(403)
        // req.cookies['user'] = user
        req.user = user
        next()
    })
}

module.exports = { authenticateToken, createToken }