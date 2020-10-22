const express = require('express')

const PORT = 9000 || process.env.PORT
const app = express()

const startRouter = require('./routers/start')

app.use(express.json())
app.use(startRouter)

app.listen(PORT, () => {
    console.log(`App is listning on port ${PORT}`)
})