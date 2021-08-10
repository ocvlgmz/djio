//Packages
const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
//Internal Resources
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
// const projectRoutes = require('./routes/projectRoutes')
const mailerRoutes = require('./routes/mailerRoutes')

const app = express()
//MongoDB connexion
const dbURI = 'mongodb+srv://oliver:socrates@cluster0.ixjbh.mongodb.net/djio?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then((result) => { console.log('Successfully connected to DJIO database') })
    .catch((err) => console.log('db conn err:', err))

//Middleware resources
// app.use(cors())
// app.use((req, res, next) => {
//     // Website you wish to allow to connect
//     res.header('Access-Control-Allow-Origin', '*')
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization')
//     //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//     next()
// })
app.use(cookieParser())
app.use(express.json())
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
// app.use('/project', projectRoutes)
// app.use('/post', postRoutes)
app.use('/mailer', mailerRoutes)

module.exports = {
    path: '/api',
    handler: app
}