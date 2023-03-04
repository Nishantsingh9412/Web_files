const express = require("express");
// const request = require("request");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
app.set('view engine', 'ejs');
// console.log(date());
// This is for Getting Input values.
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = [""];
const workItems = [""];
app.get("/",function(req,res){
    let day = date.getDate(); 
        // day = date();
        console.log(day);   
    res.render('list',{
        listTitle : day,
        list_items : items
    });
});

app.post("/",function(req,res){
    // console.log(req.body);
    let item_inp = req.body.inp1;
    if(req.body.list === 'WorkList'){
        workItems.push(item_inp);
        res.redirect("/work");
    }else{
        items.push(item_inp);
        res.redirect("/");
    }
    // console.log(input);
});

app.get("/work",function(req,res){
    res.render("list",{
        listTitle:"WorkList",
        list_items:workItems
    });
});

app.post("/work",function(req,res){
    let item_inp = req.body.inp1;
    workItems.push(item_inp);
    res.redirect("/work");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("App is running Successfully");
    // console.log("OK");
});
