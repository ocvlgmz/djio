const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

const mongoose = require('mongoose')
const {User} = require('./models')
const { createToken, authenticateToken, errorHandler } = require('./utils')

const { renderHtml } = require('./mail/renderer')
const { sendMail } = require('./mail')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

// MongoDB connexion
mongoose.connect(process.env.MONGO_DB_URI)
    .then((result) => { console.log('Successfully connected to DJIO database') })
    .catch((err) => console.log('Database connection error:', err))

// Auth routes
app.post(process.env.NODE_ENV === 'production' ? '/api/register' : '/register', async (req, res) => {
  const { firstname, lastname, email, password } = req.body
  try {
      const user = await User.create({ firstname, lastname, email, password })
      if (user) return res.status(201).json({ user: user._id })
  } catch (err) {
      // console.log('Registration error')
      const errors = errorHandler(err)
      res.status(400).json({ errors })
  }
})

app.post(process.env.NODE_ENV === 'production' ? '/api/login' : '/login', async (req, res) => {
  const { email, password } = req.body
  try {
      const user = await User.findOne({ email })
      if (!user) {throw new Error("Invalid email")}
      
      const validPassword = await bcrypt.compare(password, user.password)
      if (!validPassword) {throw new Error("Invalid password")}
      
      const token = createToken(user._id)
      res.cookie('user', user, { httpOnly: true })
      res.status(200).json({ token })
  } catch (err) {
      // console.log('Login error')
      const errors = errorHandler(err)
      res.status(400).json({ errors })
  }
})

// User crud operations
app.get(process.env.NODE_ENV === 'production' ? '/api/user':'/user', authenticateToken, (req, res) => {
  // const {user} = req.cookies['user']
  const {user} = req.cookies
  res.status(200).json({ user })
})
app.patch(process.env.NODE_ENV === 'production' ? '/api/user:id':'/user:id', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(req.params.id, req.body);
    await user.save()
    res.status(200).json({ message: 'User updated successfully.' })
  } catch (err) {
    // console.log('Update error')
    const errors = errorHandler(err)
    res.status(502).json({ errors })
  }
})
app.delete(process.env.NODE_ENV === 'production' ? '/api/user:id':'/user:id', async (req, res) => {
  try {
    const user = await User.findOneAndRemove(req.params.id)
    if (!user) res.status(400).json({message: "No user found."})
    res.status(200).json({ message: 'User deleted successfully.' })
  } catch (err) {
    // console.log('Delete error')
    const errors = errorHandler(err)
    res.status(500).json({ errors })
  }
})

// In dev mode, axios baseURL ends with /api becase the api files are located under /api folder, 
// hence need to declare /mail route instead of /api/mail 
// In prod, vercel.json redirects everything to /api, 
// hence need to declare /api/mail as a route  
app.post(process.env.NODE_ENV === 'production' ? '/api/mail' : '/mail', renderHtml, sendMail)

module.exports = app