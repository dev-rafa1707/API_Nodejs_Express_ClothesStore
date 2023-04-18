const express = require("express")
const routes = require("./routes/routes")

const server = express()
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(routes)

const PORT = 3000

server.listen(PORT,()=>{
    console.log("Listening on PORT "+PORT)
})