//Packages
const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
//Internal Resources
const authRoutes = require('./routes/authRoutes')
// const userRoutes = require('./routes/userRoutes')
// const projectRoutes = require('./routes/projectRoutes')
// const contentRoutes = require('./routes/contentRoutes')
// const mailerRoutes = require('./routes/mailerRoutes')

const app = express()
//MongoDB connexion
const dbURI = 'mongodb+srv://oliver:socrates@cluster0.ixjbh.mongodb.net/djio?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then((result) => { console.log('Successfully connected to DJIO database') })
    .catch((err) => console.log('db conn err:', err))

//Middleware resources
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
// app.use('/api/project', projectRoutes)
// app.use('/api/content', contentRoutes)
app.use('/mailer', mailerRoutes)

module.exports = {
    path: '/api',
    handler: app
}