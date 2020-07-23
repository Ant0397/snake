const express = require('express')
const http = require('http')
const path = require('path')
const app = express()

app.use(express.static('public'))

http.createServer(app).listen(3000, () => {
    console.log('Server Running')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', index.html))
})