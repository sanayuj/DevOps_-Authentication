const express=require('express')
const app=express()
const dbConnection=require("./config/db.js")
const cors=require("cors")
const logger = require("morgan");
require('dotenv').config()
const userRouters=require("./routes/userRoutes.js");


//Backend and frontend connection
app.use(cors())

//Database Connection
dbConnection.dbConnection()

app.use(logger("dev"))
app.use(express.json())

//Router path
app.use("/",userRouters)

//server running port
app.listen(4000,()=>{
console.log(`Backend is running in port ${process.env.PORT}`);
})