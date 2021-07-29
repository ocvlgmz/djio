const mongoose = require('mongoose')
// const { isEmail } = require('validator')
// const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    Title: {
        type: String,
        lowercase: true,
        required: [true, 'Please enter a title.'],
    },
    Description: {
        type: String,
        lowercase: true,
        required: [true, 'Please enter a short description'],
    },
    Duration: {
        type: Number,
        default: '1'
    },
    Cost: {
        type: Number,
        default: '0'
    },
    Status: {
        type: String,
        lowercase: true,
        default: 'Requested',
        minLength: [2, 'Status should be at least 2 character long']
    },
    Health: {
        type: String,
        lowercase: true,
        default:'NA'
    },
    Priority: {
        type: String,
        lowercase: true,
        default:'NA'
    }
})
// In model() function below, the 'user' (1st arg) is the singular of the collection name in the mongodb. Mongo db uses it as the single unit of the same name collection.
// thus, if the collection name is 'users' in Mongo db, the user arg here should be named 'user' 

//Encrypt password before creating a user in Mongo (Mongoose Hooks) 
// 1st arg = hook name (check Mongoose doc for hooks)
// 2nd arg = next (typical function to call when using hooks to let the program move on to the next thing to do)
// Note: since we are using a function that does sthg BEFORE we save sthg in the db, we don't have any other arg inside the 2nd function (which will only contain the next function arg) arg
// userSchema.pre('save', async function (next) {
//     const salt = await bcrypt.genSalt()
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
// })

const Project = mongoose.model('project', userSchema)

module.exports = Project