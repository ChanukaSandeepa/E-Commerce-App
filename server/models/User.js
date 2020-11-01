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
    password: {
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

userSchema.methods.checkForExistence = function () {
    try {
        // console.log(this)
        return mongoose.model('User').findOne({ email: this.email }).exec()


    } catch (error) {
        console.log(error)
        return error
    }

}

userSchema.path("password").validate(function (val) {
    return val.length > 8
}, "Password should have at least 8 characters")


const User = mongoose.model('User', userSchema)
module.exports = User