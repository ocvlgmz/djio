const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

const mongoose = require('mongoose')
// const jwt = require('jsonwebtoken')
const { createToken } = require('./utils/jwt')
const errorHandler = require('./utils/errorHandler')
const User = require('./models/User')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

// MongoDB connexion
mongoose.connect(process.env.MONGO_DB_URI)
    .then((result) => { console.log('Successfully connected to DJIO database') })
    .catch((err) => console.log('db conn err:', err))

// Auth routes
app.post('/api/register', async (req, res) => {
  const { firstname, lastname, email, password } = req.body
  try {
      const user = await User.create({ firstname, lastname, email, password })
      if (user) return res.status(201).json({ user: user._id })
  } catch (err) {
      const errors = errorHandler(err)
      res.status(400).json({ errors })
  }
})
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body
  try {
      const user = await User.findOne({ email })
      // if (!user) return res.status(400).json({message: "User doesn't exist"})
      
      const validPassword = bcrypt.compare(password, user.password)
      // if (!validPassword) return res.status(400).json({message: "Invalid email or password"})
      
      const token = createToken(user._id)
      res.cookie('user', user, { httpOnly: true })
      res.status(200).json({ token })
  } catch (err) {
      console.log('catching error!')
      const errors = errorHandler(err)
      res.status(400).json({ errors })
  }
})
// Nuxt Auth not using this route
// app.get('/api/logout', (req, res) => {
//   res.status(200).json({ message: 'User logged out.' })
// })
app.get('/api/user', (req, res) => {
  const user = req.cookies['user']
  res.status(200).json({ user: user })
})

// User crud operations

app.patch("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(req.params.id, req.body);
    await user.save()
    res.status(200).json({ message: 'User updated successfully.' })
  } catch (err) {
    console.log('Update error')
    const errors = errorHandler(err)
    res.status(502).json({ errors })
  }
})
app.delete("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findOneAndRemove(req.params.id)
    if (!user) res.status(400).json({message: "No user found."})
    res.status(200).json({ message: 'User deleted successfully.' })
  } catch (err) {
    console.log('Delete error')
    const errors = errorHandler(err)
    res.status(500).json({ errors })
  }
})

module.exports = app