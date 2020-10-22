const express = require('express')

const router = new express.Router()

router.get('/register', (req, res) => {
    res.send({ damn: true })
})

module.exports = router