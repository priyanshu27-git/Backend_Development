const express = require("express");
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

const router = express.Router();

router.post("/create", upload.single("image"), async (req, res) => {
  let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

  let product = await productModel.create({
    image: req.file.buffer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor,
  });
  
  req.flash("success" , "Product created successfully")
  res.redirect("/shop")

});

module.exports = router;
