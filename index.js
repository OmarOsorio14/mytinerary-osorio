const express = require('express')
const app = express()
const PORT = 4000

app.set('port',PORT)
app.get('/', (req, res) => {
    res.send('working!!!!!')
})

app.listen(PORT, () => {
    console.log('Server is running on: '+app.get('port'))
})