const express = require('express')
const {connectToDB, getDB} = require('./db')
// init app and middleware
const app = express()
// app.use(express.json())
// db connection 
let db ;
connectToDB((err) =>{
    if(!err){
        app.listen(3000, function(){
    console.log(`Example app listening on port 3000`)
  })
  db = getDB();
 }
})


app.get('/', function(req, res){
//   res.send('Hello World!');
let booka = [];
 db.collection('books')    // db.books
     .find()    // cursor toArray forEach
     .forEach(book => booka.push(book))
     .then(function(){
        res.status(200).json(booka)
     })
     .catch(function(){
        res.status(500).json({error:'Not able to fetch docs'})
     })

  res.json({message:"Welcome to API"})
})
