const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../Models/userSchema')
const bcrypt = require('bcrypt');

// Global error handler
// app.use((err,res,req,next)=>{
//     err.statusCode = err.statusCode || 500;
//     err.status = err.status || 'error';

//     res.status(err.statusCode).json({
//         status:err.status,
//         message:err.message|| message
//     });
// })






router.post('/signup' , async(req,res)=>{
    let user = req.body;
    console.log(user);
    let email = await User.findOne({email:user.Email});
    if(email!=null){
        res.send('User Already exist');
    }
    else{
        let hashedpassword = await bcrypt.hash(user.Password , 10 );
        let newuser = await User.create({
            Name:User.Name,
            Email:User.Email,
            Password:hashedpassword
        })
      console.log(newuser);
      res.send("User created successfully");
    }
 })

router.post('/login' , async(req,res)=>{
    let userinfo = req.body;
    let userdetail;
    try{
        await User.findOne( {Email : userinfo.Email} )
    }
    catch(err){
        console.log("Something went wrong in the DB")
    }
    if(!userdetail){
        res.send("User not Registered");
    }

    let validatedPaswword = await bcrypt.compare(userinfo.Password , userdetail.Password).catch(err => console.log(err));
    if(!validatedPaswword){
        res.send("incorrect Credentials");
    }
})



module.exports = router;