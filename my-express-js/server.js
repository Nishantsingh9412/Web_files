const express = require("express")
const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello </h1>");
    // response.send("<h6>Wello </h6>")
});
app.get("/contact",function(req,res,pes){
    res.send("<h1> nishantsingh9412ns@gmail.com </h1>");
})
app.get("/hobbies",function(req,res){
    res.send("This is my Hobbies page");
});
// app.get("/wello",function(request,response){
//     response.send("<h1>Wello </h1>")
//     // response.send("<h6>Wello </h6>")
// });
app.listen(3000,function(){
    console.log("Server Started with port 3000");
});