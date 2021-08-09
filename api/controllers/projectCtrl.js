require('dotenv').config()
const Project = require('../models/Project')

//Error handler
const errorHandler = (err) => {
    console.log(err.message, err.code)
    let errors = { email: '', password: '' }
    //validating unique user registration
    //this check comes first, as if the email is already in use, there is no need to validate it at first place!
    if (err.code === 11000) {
        errors.email = 'Project already registered.'
        return errors
    }
    //validating inputs errors 
    if (err.message.includes('Project input validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    } else {
        errors.null = `Project doesn't exist`
    }
    return errors
}

//module.exports.project_get = (req, res) => {
//    res.send('Project page')
//}
//module.exports.project_post = async (req, res) => {
//    const { title, description } = req.body
//    try {
//        const project = await Project.create({ title, description })
//        res.status(201).json({ project: project._id })
//    } catch (err) {
//        const errors = errorHandler(err)
//        res.status(400).json({ errors })
//    }
//}
//module.exports.project_put = async (req, res) => {
//    // const { title, description, cost, status, health, priority } = req.body
//    try {
//        const project = await Project.findOneAndUpdate(req.body._id, req.body, { new: true })
//        res.status(201).json({ project })
//    } catch (err) {
//        const errors = errorHandler(err)
//        res.status(400).json({ errors })
//    }
//}
//module.exports.project_del = async (req, res) => {
//    // const { title, description, cost, status, health, priority } = req.body
//    try {
//        const project = await Project.findOneAndDelete(req.body._id, { new: true })
//        res.status(201).json({ project })
//    } catch (err) {
//        const errors = errorHandler(err)
//        res.status(400).json({ errors })
//    }
//}
// module.exports.project_patch = (req, res) => {
//     try {
//         const project = await Project.findOneAndUpdate(req.body._id, req.body, { new: true })
//         res.status(201).json({ project })
//     } catch (err) {
//         const errors = errorHandler(err)
//         res.status(400).json({ errors })
//     }
// }
