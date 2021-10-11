const mongoose = require('mongoose')

const express = require('express')
const app = express()

const DB =process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser:true,useUnifiedTopology: true 
}).then(()=>{
    console.log(`connection succesfull `);
}).catch((err)=>console.log(` no connection try again`))

app.get('/', (req, res)=>{
    res.send("hello world from the server")
    
});