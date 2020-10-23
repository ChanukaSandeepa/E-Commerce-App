const express = require('express')
const User = require('../models/User')
const Test = require('../models/Test')

const router = new express.Router()

router.get('/register', (req, res) => {
    const { name, email, contactNo, password } = req.body


})

router.get('/test', (req, res) => {
    const test = new Test({

    })
    const error = test.validateSync();
    console.log(error.errors['bacon'].message)
    res.send("OK")
})

module.exports = router