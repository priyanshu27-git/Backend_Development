let express = require("express");

let userModel = require('./userModel')

let app = express();

app.get("/" , function(req , res){
    res.send("Heyy")
})

app.get("/create" , async (req , res) =>{
    let createdUser =  await userModel.create({ // user Created
        name : "nayaPriyanshu",
        username : "nayaPriyanshu",
        email : "Priyanshu@gmail.com"
    })

    res.send(createdUser);
})

app.get("/read" , async (req , res) =>{
    let users = await userModel.find();

    res.send(users);
})

app.get("/update" , async (req , res) =>{
    let updatedUser = await userModel.findOneAndUpdate({name: "Priyanshu"}, {username : "nayaPriyanshu"}, {new : true})

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.send(updatedUser);
})

app.get("/delete" , async (req , res) =>{
    let deletedUser =  await userModel.findOneAndDelete({username : "iAmPriyanshu"});

    res.send(deletedUser)
})

app.listen(3000)

