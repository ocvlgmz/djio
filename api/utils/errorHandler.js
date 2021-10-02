const errorHandler = (err) => {
    console.log(err.message, err.code)
    let errors = { email: '', password: '' }
    // Validating unique user registration
    // This check comes first, as if the email is already in use, there is no need to validate it at first place!
    if (err.code === 11000) {
        errors.email = 'Email already registered.'
        return errors
    }
    // Validating inputs errors 
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    } else {
        errors.null = `User doesn't exist`
    }
    return errors
}

module.exports = errorHandler