const express=require('express')
const colors=require('colors')
const dotenv=require('dotenv')
const morgan=require('morgan')
const cors=require('cors')
const bodyparser=require('body-parser')
const cloudinary=require('cloudinary')
const fileUpload = require("express-fileupload")
const connectDB = require('./config/db')
const auth=require('./routes/auth')


//configure env
dotenv.config()

//database cofig
connectDB()
//rest object
const app=express()
app.use(cors())
app.use(fileUpload({useTempFiles: true}))
//middleware
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/auth',auth)
//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome</h1>")
})

const PORT=process.env.PORT ||8000;

app.listen(PORT,()=>{
    console.log(`server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})