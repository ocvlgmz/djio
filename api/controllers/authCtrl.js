require('dotenv').config()
const jwt = require('jsonwebtoken')
const { createToken } = require('../utils/jwtAuth')
const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')

// //Error handler
// const errorHandler = (err) => {
//     console.log(err.message, err.code)
//     let errors = { email: '', password: '' }
//     //validating unique user registration
//     //this check comes first, as if the email is already in use, there is no need to validate it at first place!
//     if (err.code === 11000) {
//         errors.email = 'Email already registered.'
//         return errors
//     }
//     //validating inputs errors 
//     if (err.message.includes('user validation failed')) {
//         Object.values(err.errors).forEach(({ properties }) => {
//             errors[properties.path] = properties.message
//         })
//     } else {
//         errors.null = `User doesn't exist`
//     }
//     return errors
// }

module.exports.register = async (req, res) => {
    console.log('firing register_post from authCtrl.js')
    const { email, password } = req.body
    try {
        const user = await User.create({ email, password })
        res.status(201).json({ user: user._id })
    } catch (err) {
        const errors = errorHandler(err)
        res.status(400).json({ errors })
    }
}
// login is finding one user from the collection and checking if credentials are ok.
// can stay here since we create a token when user is verified
module.exports.login = async (req, res) => {
    console.log('entering login post route')
    const { email } = req.body
    try {
        const user = await User.findOne({ email: email })
        console.log('uid:', user._id)
        const token = createToken(user._id)
        res.cookie('user', user, { httpOnly: true })
        res.status(200).json({ token: token })
    } catch (err) {
        const errors = errorHandler(err)
        res.status(400).json({ errors })
    }
}
// login get is basically a user fetch operation, thus shoulb  be relocated in userCtrl.js or event removed, since there is no use for this.
module.exports.login_get = async (req, res) => {
    res.status(200).json({ message: 'This is the login_get method from authCtrl.js' })
}
//logout is just where it should be!
module.exports.logout = (req, res) => {
    // should we remove user info from the cookie?
    res.status(200).json({ status: 'OK' })
}