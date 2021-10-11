const express = require('express');
const dotenv = require('dotenv')
const app = express();
const mongoose = require('mongoose')

dotenv.config({path:'./config.env'})

const User=require('./model/userSchema')
require('./db/conn')
const PORT = process.env.PORT;

//middleware 

const middleware = ((req , res,next )=>{ 
    console.log("hello my middle ware ")
    next();
})
// middleware();

app.get('/about', middleware,(req,res)=>
{
    console.log("hey i am a in about ")
    res.send("you are now in a about section of the page ")
});
app.get('/login' ,(req , res)=>{
    res.send("login required  : ")
});
app.get('/registration', (req,res)=>{
    res.send('register yourself please :: ')
})
console.log("subscrieb toe hte channel please ")
app.listen(PORT , (req, res)=>{
    console.log('port is running ');
})