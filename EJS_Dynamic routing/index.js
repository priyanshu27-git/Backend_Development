const express =  require("express")
const path  = require("path")

const app = express();

// SETUP PARSERS 
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//SETUP EJS
app.set('view engine', 'ejs');


// SETUP PUBLIC STATIC FILES
// __dirname current folder ka path provide karta hai aur uske andar ka public apan ko chahiye hai
app.use(express.static(path.join(__dirname , 'public')))


app.get("/" , function(req , res){
    res.render("index");
})

// DYNAMIC ROUTES (:) COLON KE BAAD KII CHEEZ DYNAMIC HO JAAATI HAI 
app.get("/profile/:username/:age" , function(req , res){
    // req.params likhne se : ke baad ki value mil jaati hai frontend se backend mai yeh value aati hai fir req.params ki help se iskoo access karte hai 
    res.send(`Welcome ${req.params.username} Age ${req.params.age}`);
})


app.listen(3000 , function(req , res){
    console.log("Server chal raha hai");
})