
/* Server Start kar rahe hai */

// const express = require("express")

// const app = express();


// // , ke baad ki cheez ko requestHandler kehte hai aur requestHandler ko Middleware kehte hai.
// app.get("/" , function(req , res){
//     res.send("Ab hogaa comebackkkkk")
// })

// app.listen(3000);



/////////////////////////////////////////////////////////////////////////////////////////



// MIDDLEWARE USE KAR RAHE HAI YAHA 
// Agar route ke pehle kuch perform karte ho tohh uss element koo Middleware kehte hai.

// const express = require("express")

// const app = express();

// app.use(function(req , res , next) {
//     console.log("Middleware chal gaya");
//     next()
// })


// app.use(function(req , res , next) {
//     console.log("Middleware dubaaara chal gaya");
//     next()
// })

// app.get("/" , function(req , res){
//     res.send("Ab hogaa comebackkkkk")
// })

// app.listen(3000);



/////////////////////////////////////////////////////////////////////////////////////////



// ERROR HANDLING 
// const express = require("express")

// const app = express();



// app.get("/" , function(req , res){
//     res.send("Done");
// })


// app.get("/profile" , function(req , res , next){
//     return next(new Error("Something went wrong here"))
// })


// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// app.listen(3000);

