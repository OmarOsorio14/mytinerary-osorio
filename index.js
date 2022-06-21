require('dotenv').config()
require('./config/database')
var cors = require('cors')
const express = require('express')
const Router = require('./routes/routes')
const app = express()
const PORT = 4000

app.set('port',PORT)
//middlewares
app.use(cors())
app.use(express.json())
app.use('/api', Router)


app.listen(PORT, () => {
    console.log('Server is running on: '+app.get('port'))
})