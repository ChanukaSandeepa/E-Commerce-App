const express = require('express')
const User = require('../models/User')
const Test = require('../models/Test')

const router = new express.Router()

router.post('/register', async (req, res) => {
    const data = req.body
    const user = new User(data)
    const exists = await user.checkForExistence();
    if (!exists) {

        return res.send({ success: "Not Available" })
    } else {
        console.log(exists)
        return res.send({ error: "Dont know" })
    }
})

router.get('/test', (req, res) => {
    console.log(localStorage.getItem('user'))
    const test = new Test({
        bacon: 1,
        phone: '12345'
    })
    const error = test.validateSync();
    console.log(error)
    res.send("OK")
})

module.exports = router