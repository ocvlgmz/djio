const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')

const sendMail = async (req, res) => {
  console.log('sendMail function...')

  const html = res.locals.string
  console.log('html: ',html)

  const { title, name, email, job, purpose, message, date, time, link } = req.body
  const lead = { name, email, job }
  const discoveryCall = { title, purpose, date, time, link } 
  const growWithUs = { title, purpose, message }
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
  // console.log('sanitizedAttributes: '+ sanitizedAttributes)
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
  // For Discovery Call
  const discoveryCallOptions = {
    from: `"DigitalJam Team" <${process.env.MAIL_FROM}>`,
    to: sanitizedAttributes[1],
    subject: `Your ${discoveryCall.title} [details and instructions]`,
    
    html: `${html}`,
    
    text: `
    Hello ${sanitizedAttributes[0]},
    
    Thanks for scheduling the ${discoveryCall.title}.
    We'll focus on the particular interest you selected during the registration:
    ${discoveryCall.purpose}

    Here are the details of the call:
    Date: ${discoveryCall.date}
    Time: ${discoveryCall.time}
    
    To join the call, follow this link:
    ${discoveryCall.link}

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
  // For Grow With Us requests 
  const growWithUsOptions = {
    from: `"DigitalJam Team" <${process.env.MAIL_FROM}>`,
    to: sanitizedAttributes[1],
    subject: `${growWithUs.purpose} information request`,
    
    html: `${html}`,
    
    text: `
    Hello ${sanitizedAttributes[0]},
    
    Thanks for your reaching us out. 
    Let me come back to you asap and discuss the topic you suggested: ${growWithUs.purpose}.

    Best regards, 
    Oliver
    DigitalJam.io
    `
  } 
  
  const mailOptions = discoveryCall.title == 'Discovery Call' ? discoveryCallOptions : growWithUsOptions;
  console.log('mailOptions: ',mailOptions)
  const transporter = nodemailer.createTransport(mailSettings)
  // for async, use try/catch part 
  try {
    console.log('trying sendMail...')
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