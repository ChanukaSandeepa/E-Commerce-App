const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: String
        }
    ]
})

userSchema.methods.generateAuthToken = (id) => {
    const token = jwt.sign({ _id: id }, 'confirm')
    return token
}

const User = mongoose.model('User', userSchema)

module.exports = User