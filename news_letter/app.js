const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");


const app = express();
app.use(express.static(__dirname +'/public'));
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+"/signup.html");
    // res.write("Hello MOtto ");
    // console.log("Hello");
})
app.post("/",function(req,res){
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

    console.log(firstName,lastName,email);
    // console.log(firstName,lastName,email);
})



app.listen(3000,function(){
    console.log("Web App Successfully Running");
})


// List ID 
// eefaba84ac

// API Key
// 54da513a57b89a20a69d58c08b2de954-us21