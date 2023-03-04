// const { log } = require('console');
const express = require('express');
const https = require("https");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res)
{
    // console.log(req.body.cityName); 
    const query = req.body.cityName;
    const  apiKey = "ff47dd219a5eb96c2443b0bd67c30791";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey+"&units="+ unit +" ";
    https.get(url,function(response){
        console.log(response.statusCode);
        
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            console.log(temp);
            const desc = weatherData.weather[0].description;
            console.log(desc);
            res.write(`<p> The Weather is Currently ${desc} </p>`)
            res.write(`<h1>The temperature in ${query} is ${temp} Degree Celcius </h1>`);
            const ImgUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            res.write(`<img src="${ImgUrl}" alt="">`)
            res.send();
    // console.log("Post Request Recieved");
})

// app.get('/',function(req,res){
    // const query = "London";
    // const  apiKey = ff47dd219a5eb96c2443b0bd67c30791;
    // const unit = "metric";
    // const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey+"&units="+ unit +" ";
    // https.get(url,function(response){
    //     console.log(response.statusCode);
        
    //     response.on("data",function(data){
    //         const weatherData = JSON.parse(data);
    //         const temp = weatherData.main.temp;
    //         console.log(temp);
    //         const desc = weatherData.weather[0].description;
    //         console.log(desc);
    //         res.write(`<p> The Weather is Currently ${desc} </p>`)
    //         res.write(`<h1>The temperature in India is ${temp} Degree Fahrenheit </h1>`);
    //         const ImgUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    //         res.write(`<img src="${ImgUrl}" alt="">`)
    //         res.send();
            // res.send();
            // console.log(weatherData);        // Displays Full data
            // const ob = {
            //     name:"Nishi",
            //     food:"roshogulla",
            // }
            // console.log(JSON.stringify(ob));
        });


        // res.send("Server is running");
    });
// });

app.listen(port,function(){
    console.log(`Port started with port : ${port}`);
});