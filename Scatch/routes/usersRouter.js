const express = require("express")

const router = express.Router()
const {registerUser} = require("../controllers/authController")


router.get("/" , (req, res) =>{
    res.send("heyy it's working")
})

router.post("/register", registerUser)

module.exports = router;