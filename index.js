const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 1200
app.get('/', (req, res) => {
    res.send("Hello World From Server")
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
