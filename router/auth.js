const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()


// router.get('/',(req,res)=>{
// res.send("hello youi are on : auth js ")

require('../db/conn')
const User = require('../model/userSchema')


// });
router.post('/register',async (req,res)=>{
  
    const { name , email , phone, work , password , cpassword} = req.body;
    if (!name || !email || !phone ||  !work || !password || !cpassword) {
        return  res.status(422).json({error:"please filled the form : "});
    }
    // console.log(req.body.name)
    // 
    // res.json({message: req.body });

    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"email is allready Exist"});
        }
        const user = new User({name , email, phone, work , password , cpassword})
        await user.save();
        res.status(201).json ({message: "user registerd succesfully"});
    } catch(err){
            console.log(err)
        }
    });
    
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if (userExist){
//             return  res.status(422).json({error:"User allready exits: "});

//         }
        
//             const user = new User({name , email , phone, work , password , cpassword})
            
//             user.save().then(()=>{
//                 res.status(201).json({message: "user register"});
//             }).catch((err) => res.status(500).json({error :"failed to register"}));
//     }).catch(err =>{ console.log(err);})
// });


// router.post('/register',(req,res)=>{
  
//     const { name , email , phone, work , password , cpassword} = req.body;
//     if (!name || !email || !phone ||  !work || !password || !cpassword) {
//         return  res.status(422).json({error:"please filled the form : "});
//     }
//     // console.log(req.body.name)
//     // 
//     // res.json({message: req.body });
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if (userExist){
//             return  res.status(422).json({error:"User allready exits: "});

//         }
        
//             const user = new User({name , email , phone, work , password , cpassword})
            
//             user.save().then(()=>{
//                 res.status(201).json({message: "user register"});
//             }).catch((err) => res.status(500).json({error :"failed to register"}));
//     }).catch(err =>{ console.log(err);})
// });





// login  route 
router.post('/signin', async (req,res)=>{
    try{
        const {email , password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"plx fillled the data"})

        }
        const userLogin = await User.findOne({email:email});
        console.log(userLogin);
        if (!userLogin){
            res.status(400).json({error: "user error"})

        }else {
            res.json({message:"user sign in Sucenfully "})
        }
    }catch (err){
        console.log(err);
    }
});


module.exports=router;