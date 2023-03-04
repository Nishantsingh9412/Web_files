const express= require("express");
 
const app = express()
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const ejs = require("ejs")
 
 
app.set('view engine','ejs')
 
app.use(bodyparser.urlencoded({
    extended:true
}))
 
app.use(express.static("public"))
 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/wikiDB");
}
 
const articleschema={
    title:String,
    content:String
}
 
 
// name of collection - Article (rhs)
// it willl change this to articles
 
const Article=mongoose.model("Article",articleschema,"articles");
 
app.get("/",function(req,res){
    res.send("<h1>ham</h1>")
})
 
app.get("/articles", async (req, res) => {
     try { 
        const articles = await Article.find({}); 
        res.send(articles);
     } 
     catch (err) 
     {
         console.log(err); 
    } 
});

 
 
 
app.listen(3000,function(){
    console.log("port on 3000")
})