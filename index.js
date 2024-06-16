const express=require("express")
require("dotenv").config()

const server=express()

const PORT=3000 || process.env.PORT

server.listen(PORT,()=>{
    console.log("server is runnung in the port"+ PORT)
})


