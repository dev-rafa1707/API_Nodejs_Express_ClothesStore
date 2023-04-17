const express = require('express')
const routes = require('./routes/router')

const server = express()
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(routes)

const PORT = 3000

server.listen(PORT,()=>{
    console.log('Listening on port ' + PORT)
})