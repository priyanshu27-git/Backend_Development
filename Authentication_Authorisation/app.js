const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cookieParser());

// SETTING DATA IN COOKIE IN BROWSER

// app.get("/" , (req , res) =>{
//     res.cookie("name" , "Priyanshuuuu")
//     res.send("huihui");
// })

// app.get("/read" , (req , res) =>{
//     console.log(req.cookies);
//     res.send("read page");
// })


// USING BCRYPT FOR ENCRYPTION
// app.get("/", function(req , res){
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("marGayaRaavan", salt, function(err, hash) {
//         console.log(hash);
//         res.send("hiiii")
//     });
// });
// })


// USING BCRYPT FOR DECRYPTION(Actually comparing)
// app.get("/", function(req , res){
//     bcrypt.compare("marGayaRaavan", "$2b$10$bNPohlSCTHb.1G41eDQJN.tScfY.B0kDDiTvNZ63SjxnUB0AJ0Dqy", function(err, result) {
//         console.log(result)
//         res.send("check in console")
//     });
// });


// USING JWT FOR SECURING SENDING DATA FOR FUTURE REQUESTS
// app.get("/" , function(req , res) {
//     let token = jwt.sign({email : "priyanshu@gmail.com" }, "secretmsg")
//     res.cookie("token" , token)
//     res.send("Working...");
// })


// app.get("/read" , function(req , res) {
//     console.log(req.cookies.token);
//     res.send("read page...");
// })


app.listen(3000)