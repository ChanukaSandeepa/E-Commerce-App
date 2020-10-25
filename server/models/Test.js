const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    bacon: {
        type: Number,
        required: [true, 'Why no bacon']
    },
    drink: {
        type: String,
        enum: ['Coffee', 'Tea'],
        required: function () {
            return this.bacon > 3
        }
    },
    phone: {
        type: String,
        validate: {
            validator: function (val) {
                return true
            },
            message: "Test failed beacause of you"
        }
    }
})

schema.path("bacon").validate(function (val) {

    // console.log(this.getUpdata().$set.bacon)

    if (val === 1) {
        return true;
    }
    return true
}, "bacon should be greater than 2")

const Test = mongoose.model("Test", schema)

module.exports = Test