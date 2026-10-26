const express = require("express")

const router = express.Router()
const {registerUser , loginUser , logout} = require("../controllers/authController")


router.get("/" , (req, res) =>{
    res.send("heyy it's working")
})

router.post("/register", registerUser)

router.post("/login", loginUser)

router.post("/logout" , logout)


module.exports = router;