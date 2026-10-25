const userModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {generateToken} = require("../utils/generateToken")


module.exports.registerUser = (req , res) =>{
    try{
     let {fullname , email , password} = req.body; 

     bcrypt.genSalt(12 , (err , salt) =>{
        bcrypt.hash(password , salt , async (err , hash) =>{
            if(err) return res.send(err.message)
            else{
                const user = await userModel.create({
                fullname,
                email,
                password : hash
            })

            let token = generateToken(user);
            res.cookie("token" , token);
            res.send("User Created Successfully");

            }
        })
    })
        
    }
    catch(err) {
        res.send(err.message);
    }

}