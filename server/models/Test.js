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
    }
})

const Test = mongoose.model("Test", schema)

module.exports = Test