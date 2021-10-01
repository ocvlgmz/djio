const app = require('express')();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { createToken } = require('./utils/jwtAuth')
const errorHandler = require('./utils/errorHandler')
const User = require('./models/User')


// MongoDB connexion
mongoose.connect(process.env.MONGO_DB_URI)
    .then((result) => { console.log('Successfully connected to DJIO database') })
    .catch((err) => console.log('db conn err:', err))

const number = 123456;

app.get('/api', (req, res) => {
  const path = `/api/item/${number}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
})

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
})

app.post('/api/auth/login', async (req, res) => {
  // console.log('triggering auth login function')
  const { email } = req.body
  try {
      const user = await User.findOne({ email })
      const token = createToken(user._id)
      res.cookie('user', user, { httpOnly: true })
      res.status(200).json({ token })
  } catch (err) {
      const errors = errorHandler(err)
      res.status(400).json({ errors })
  }
})

app.get('/api/user', (req, res) => {
  const user = req.cookies['user']
  // res.json({ user: user })
  res.status(200).json({ user: user })
})

module.exports = app;