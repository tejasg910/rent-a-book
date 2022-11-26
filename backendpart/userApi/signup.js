
const express = require('express');
const User = require('../model/User')
const router = express.Router();
const dotenv = require('dotenv')
dotenv.config()
const CryptoJS = require("crypto-js");

router.post('/signup', express.json(), async(req, res)=>{
try {
    const {email,firstName, lastName, mobile, address, password} = req.body;
 
    console.log(process.env.CRYPTO_SECRET_KEY)
    const encPassword = CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET_KEY).toString();
   
        const data  = new User({firstName, lastName, email, address, mobile, password: encPassword})
        await data.save()
        
        res.status(200).json({success: true, message: "account created successfully"})
    } catch (error) {
        res.status(400).json({success: false, message: "Something went wrong", errror: error.message})
    }
  


})


module.exports = router;