require('dotenv').config()
require('./config/database')
const express = require('express')
const Router = require('./routes/cities')
const app = express()
const PORT = 4000

//middlewares
app.use(express.json())
app.use('/api', Router)
app.set('port',PORT)

app.listen(PORT, () => {
    console.log('Server is running on: '+app.get('port'))
})