const express=require("express")
require("dotenv").config()

const server=express()

const PORT=3000 || process.env.PORT
const HOST='0.0.0.0'

server.get("/",(req,res)=>{
    res.send("<h1>you are in the home page</h1>") 
})

server.listen(PORT,HOST,()=>{
    console.log("server is runnung in the port"+ PORT)
})


