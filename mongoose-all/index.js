const express = require('express')

const PORT = 9000 || process.env.PORT
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("ALl Done")
})

app.listen(PORT, () => {
    console.log(`App is listning on port ${PORT}`)
})