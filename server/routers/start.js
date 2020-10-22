const express = require('express')
const User = require('../models/User')

const router = new express.Router()

router.get('/register', (req, res) => {
    const user = req.body

})

module.exports = router