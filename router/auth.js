const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()


// router.get('/',(req,res)=>{
// res.send("hello youi are on : auth js ")

require('../db/conn')
const User = require('../model/userSchema')


// });
router.post('/register',(req,res)=>{
  
    const { name , email , phone, work , password , cpassword} = req.body;
    if (!name || !email || !phone ||  !work || !password || !cpassword) {
        return  res.status(422).json({error:"please filled the form : "});
    }
    // console.log(req.body.name)
    // 
    // res.json({message: req.body });
    User.findOne({email:email})
    .then((userExist)=>{
        if (userExist){
            return  res.status(422).json({error:"User allready exits: "});

        }
        
            const user = new User({name , email , phone, work , password , cpassword})
            
            user.save().then(()=>{
                res.status(201).json({message: "user register"});
            }).catch((err) => res.status(500).json({error :"failed to register"}));
    }).catch(err =>{ console.log(err);})
});

module.exports=router;