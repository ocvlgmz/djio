require('dotenv').config()
const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')

module.exports.sendForm = async (req, res) => {
  // Our three form fields, all required
  console.log('email subj:', req.body.inputs.title)
  const attributes = ['name', 'email', 'purpose']
  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  // const sanitizedAttributes = attributes.map(n => req.body[n])
  // Validate, sanitize and send
  const validateAndSanitize = (key, value) => {
    const rejectFunctions = {
      name: v => v.length < 4,
      email: v => !validator.isEmail(v),
      purpose: v => v.length < 25
    }

    // If map has key and function returns false, return sanitized input. Else, return false
    return rejectFunctions.hasOwnProperty(key) && !rejectFunctions.value && xssFilters.inHTMLData(value)
  }
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body.inputs[n]))
  // True if some of the attributes new values are false -> validation failed
  console.log('sanitizedAttributes:', sanitizedAttributes)

  const someInvalid = sanitizedAttributes.some(r => !r)
  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  } else { console.log('sanitizedAttributes:', sanitizedAttributes) }
  // sending

  const sendMail = (email, msg) => {
    const transporter = nodemailer.createTransport({
      host: 'mail.gandi.net',
      port: '587',
      secure: false,
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PWD }
    })
    // transporter.verify(function(error, success) {
    //   if (error) {
    //       console.log(error);
    //   } else {
    //       console.log('Server is ready to take our messages');
    //   }
    // })    
    transporter.sendMail({
      from: 'msg@digitaljam.io',
      to: sanitizedAttributes[1],
      subject: req.body.inputs.title,
      text: `call details for ${sanitizedAttributes[2]}`
    },
      (error) => {
        if (error) {
          console.log("Sending Error:", error);
        }
        console.log("Success!");
      }
    )
  }
  sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
}
