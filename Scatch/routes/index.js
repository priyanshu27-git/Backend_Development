const express = require("express");
const isLoggedIn = require("../Middleware/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

const router = express.Router();

router.get("/" , (req , res) =>{
    let error = req.flash("error")
    res.render("index" , {error , LoggedIn : false});
})

router.get("/shop", isLoggedIn , async (req , res) =>{
    let products = await productModel.find();
    let success = req.flash("success")
    res.render("shop" , {products , success});
})

router.get("/cart", isLoggedIn , async (req , res) =>{
    let user = await userModel.findOne({email : req.user.email}).populate("cart")

    res.render("cart" , {user});
})

router.get("/addtocart/:productid", isLoggedIn , async (req , res) =>{
    let user = await userModel.findOne({email : req.user.email});
    user.cart.push(req.params.productid)
    await user.save()
    req.flash("success" , "Added to cart");
    res.redirect("/shop")
})

router.get("/logout" , isLoggedIn , (req , res) =>{
    res.cookie("token" , "");
    res.redirect("/");
})

module.exports = router;