const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')

const sendMail = async (req, res) => {
  const { theme, name, email, job, purpose, date, time, link } = req.body
  const lead = { name, email, job }
  const call = { theme, purpose, date, time, link }
  // Validate & sanitize
  // const attributes = ['title', 'name', 'email', 'job', 'purpose']
  const attributes = Object.keys(lead)
  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  // const sanitizedAttributes = attributes.map(n => req.body[n])

  const validateAndSanitize = (key, value) => {
    const rejectFunctions = {
      name: v => v.length < 4,
      email: v => !validator.isEmail(v),
      job: v => v.length < 3,
    }
    // If map has key and function returns false, return sanitized input. Else, return false
    return rejectFunctions.hasOwnProperty(key) && !rejectFunctions.value && xssFilters.inHTMLData(value)
  }
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
  console.log('sanitizedAttributes: '+ sanitizedAttributes)
  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some(r => !r)
  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Validation issue: User\'s input(s) look unprocessable!' })
  }

  // Sending email
  const mailSettings = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PWD }
  }
  const mailOptions = {
    from: `"DigitalJam Team" <${process.env.MAIL_FROM}>`,
    to: sanitizedAttributes[1],
    subject: `Your ${call.theme} [details and instructions]`,
    text: `
    Hello ${sanitizedAttributes[0]},
    
    Thanks for scheduling the ${call.theme}.
    We'll focus on the particular interest you selected during the registration:
    ${call.purpose}

    Here are the details of the call:
    Date: ${call.date}
    Time: ${call.time}
    
    To join the call, follow this link:
    ${call.link}

    In order to maximize the value of our call, here a list of things you could prepare:
    - The #1 priority for your business
    - 2 or 3 essential questions you have about digital trend
    - ROI timeline & expectation for your digital strategy efforts
    
    That's it for now ${sanitizedAttributes[0]}.
    Looking forward to hearing from you soon!

    Best regards, 
    Oliver
    DigitalJam.io
    `
  } 
  const transporter = nodemailer.createTransport(mailSettings)
  // for async, use try/catch part 
  try {
    await transporter.sendMail(mailOptions)
    res.status(201).json({ 'message': 'Email sent successfully!' })
  } catch (error) {
    if(error.message.includes('ECONNREFUSED')){
      console.log('Mail Settings Error:', error)
      res.status(500).json({ 'message': 'Email Service seems to be down. Please retry or send us an email if the issue is persistent.' })
    } else if(error.message.includes('recipients')){
      console.log('Mail Options Error:', error)
      res.status(500).json({ 'message': 'Email seems to be incorrect. Please try again.' })
    } else {
      console.log('Mail Error:', error)
      res.status(500).json({ 'message': 'Mail Server Issue. Please refresh browser and try again.' })
    }
  }
}

module.exports = { sendMail }