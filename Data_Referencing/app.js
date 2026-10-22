const express =  require("express")
const userModel = require("./models/user")
const postModel = require("./models/post")

const app = express();

app.get("/" , (req , res) =>{
    res.send("huihui")
})

app.get("/create" ,async (req , res) =>{
   let user = await userModel.create({
        username : "priyanshu",
        email : "priyanshu@mail.com",
        age : 22
    })

    res.send(user)
})

app.get("/post/create" , async (req , res) =>{
    let post = await postModel.create({
        postdata : "bass karoo Ab Jall gaya Raavan",
        user : "6ad9d378368839e899bc5b5d"
    })

    let user = await userModel.findOne({_id : "6ad9d378368839e899bc5b5d"})
    user.posts.push(post._id);
    await user.save()

    res.send({user , post})
})

app.listen(3000)