const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    console.log(req.body.num1);
    number1 = Number(req.body.num1);
    number2 = Number(req.body.num2);
    var result = number1 + number2;
    res.send("Result is : "+result)

});
// app.get('/',function(req,res){
//     res.send("thanks for the post request");
// })
app.get('/bmi',function(req,res){
    res.sendFile(__dirname + "/bmi_calc.html");
})
app.post('/bmi',function(req,res){
    weight = req.body.val1;
    height = req.body.val2;
    var bmi = Math.floor(weight/(height*height));
    res.send(`<h1>Your BMI Index is :${bmi}</h1> `);

})

app.listen(port,function(){
    console.log("Server Started with port "+port);
})