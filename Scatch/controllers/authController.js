const userModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {generateToken} = require("../utils/generateToken")
const isLoggedIn = require("../Middleware/isLoggedIn")
const productModel = require("../models/product-model")


module.exports.registerUser = async (req , res) =>{
    try{
     let {fullname , email , password} = req.body; 

     const user = await userModel.findOne({email : email});
     if(user) return res.status(401).send("You already have an account, Please Login")

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
            res.redirect("/shop")

            }
        })
    })
        
    }
    catch(err) {
        res.send(err.message);
    }

}

module.exports.loginUser =  async (req , res) =>{
    let products = await productModel.find();
    let {email , password} = req.body;

    let user = await userModel.findOne({email : email})
    if(!user) return res.send("Email or password is incorrect")

        bcrypt.compare(password , user.password , function(err , result){
            if(result){
                let token = generateToken(user);
                res.cookie("token" , token)
                res.redirect("/shop")
            }
            else{
                req.flash("error" , "Email or password is incorrect")
                return res.redirect("/");
            }
        })
}

module.exports.logout = (req , res) =>{
    res.render("index")
}