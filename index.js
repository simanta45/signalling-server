const express=require("express")
const cors=require("cors")
require("dotenv").config()

const server=express()

const PORT=3000 || process.env.PORT
//const HOST='0.0.0.0'

server.use(cors("*"))

server.get("/",(req,res)=>{
    res.send("<h1>you are in the home page</h1>") 
})

server.get("/about",(req,res)=>{
    res.send("<h1>you are in the about page</h1>") 
})

server.get("/contact",(req,res)=>{
    res.send("<h1>you are in the contact page</h1>") 
})

server.listen(PORT,()=>{
    console.log("server is runnung in the port"+ PORT)
})


