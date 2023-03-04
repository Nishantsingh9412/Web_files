//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();              // creating new app instance named as express

app.set('view engine', 'ejs');      // setting view engine to use ejs

app.use(bodyParser.urlencoded({      // using bodyParser to parse our requests
  extended: true
}));  
app.use(express.static("public"));    // using public directory to store our static files

mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true});

const articleSchema =   {
  title : String,
  content:String
}

const Article = mongoose.model("article",articleSchema);

//TODO


app.get("/",function(req,res){
  console.log("HEELLO motto");
  res.send("HI");
});


app.route("/articles")
.get( async (req, res) => {
  try { 
     const articles = await Article.find({});
     console.log(articles); 
     res.send(articles);
  } 
  catch (err) 
  {
      console.log(err); 
  } 
})

.post(function(req,res){
  console.log(req.body.title);
  console.log(req.body.content);

  const newArticle = new Article ({
    title:req.query.title,
    content: req.query.content
  });

  newArticle.save();

})

.delete(async(req,res) => {
  try {
    const delArticles = await Article.deleteMany();
    res.send("Deletion Done Successfully ");
  }catch(err){
    console.log(err);
  }
});

//////////////////////////////////////   New Routes /////////////////////////
app.route("/articles/:articleTitle")

// req.params.ArticleTitle =  "Jquery"

.get(async (req,res) => {
  try{
    const art = await  Article.findOne({title:req.params.articleTitle});    // FROM URL (REST%20API)
                                                                            // %20 for space 
    console.log(art);
    res.send(art);   
  }catch(err){
    console.log(err);
  }
})
.put(async (req,res) => {

  try{
    const update_param = await Article.replaceOne(
      {title : req.params.articleTitle},
      {title : req.body.title, content: req.body.content },
      {overwrite:true})

    console.log(update_param);
    res.send(update_param);
  }catch(err){
    console.log(err);
  }
})


.patch(async(req,res)=>{
  try{
    const update_patch = await Article.updateOne(
      {title:req.params.articleTitle},
      {$set:req.body}                            //    {$set:{content:"",title:""}}
      )
      res.send(" Successfully Updated Articles ");
  }catch(err){
    res.send(err);
  }
})


.delete(async(req,res) =>{
  try{  
    const del_query = await Article.findOneAndRemove(
      {title:req.params.articleTitle}
    )
    res.send("Deletion done ")
  }catch(err){
    res.send(err);
  }

});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});