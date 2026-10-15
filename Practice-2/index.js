let express = require("express");

let app = express()
let path = require("path")
let fs = require("fs");

// setup ejs 
app.set("view engine" , "ejs");

//PARSERS for public
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname , "public")))


app.get("/" , function(req , res){
    fs.readdir("./files" , function(err , files){
        res.render("index" , {files : files})
    })
})

app.get("/file/:filename" , function(req , res){
    fs.readFile(`./files/${req.params.filename}` , "utf-8" , function(err , filedata){
        res.render("show" , {filename : req.params.filename , filedata : filedata})
    })
})

app.get("/edit/:filename" , function(req , res){
    res.render("edit" , {Previous : req.params.filename} );
})

app.post("/create" , function(req , res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt` , req.body.details , function(err){
        res.redirect("/");
    })
})


app.post("/edit" , function(req , res){
    fs.rename(`./files/${req.body.Previous}` , `./files/${req.body.New.split(' ').join('')}.txt` , function(err){
        res.redirect("/");
    })
})

app.listen(3000)