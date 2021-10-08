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
        next()
    })
}

const errorHandler = (err) => {
    console.log('err.message:', err.message, 'err.code:', err.code)
    let errors = { email: '', password: '', else: ''}
    // Validating unique user registration
    // This check comes first, as if the email is already in use, there is no need to validate it at first place!
    if (err.code === 11000) {
        errors.email = 'Email already registered.'
        return errors
    }
    // Validating inputs errors 
    if (err.message.includes('User validation failed')) {
        // --- TODO ---
        // Not sure this function works as intended !! I suspect the fields are not properly rendered as errors properties.
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    } else {
        errors.else = err.message
    }
    return errors
}

module.exports = { authenticateToken, createToken, errorHandler }