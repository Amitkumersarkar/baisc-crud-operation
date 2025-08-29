const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/backend-server-side')
mongoose.connection.on('connected', () => {
    console.log('connected to mongodb')
})
mongoose.connection.on('error', (err) => {
    console.log('connection error : ', err)
})