const { log } = require("console");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,"OOPS ! Name to de de bhai !!!!"]
        }
    ,
    rating:{
        type: Number,
        min:1,
        max:10
    },
    review : String
});
const Fruit  = mongoose.model("Fruit",fruitSchema);


const fruit = new Fruit ({
    // name : "Apple",
    rating : 8,
    review : "Apple in a day keeps a Dr. away"
});


const kiwi = new Fruit({
    name:"Kiwi",
    rating:10,
    review:"Kiwi is my Favourite fruit"
});
const orange = new Fruit({
    name:"Orange",
    rating:6,
    review:"they are sour"
});

const mango = new Fruit({
    name:"Mango",
    rating:9,
    review:"ye Aaaaaaaaam Zindagi hai "
});

mango.save();
// Fruit.insertMany([kiwi,orange],function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Successfully insertion done");
//     }
// });

//  fruit.save();   

// Fruit.find(function(err,fruits){
//     if(err)
//         console.log(err);
//     else    
//         // fruits.forEach(fruit => 
//         //         console.log(fruit.name)
//         //     )
//         fruits.forEach(function(fruit){
//             console.log(fruit.name);
//         })
//         // console.log(fruits);
// })

//  ----------------------------------->>>>>>>Updating Value 
// Fruit.updateOne({_id:"63e69977c97ccc0641051d5f"},{name:"Kiwi2"},function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Document Updated Successfully");
//     }
// });


//  ----------------------------------->>>>>>>Deleting Values 
// Fruit.deleteOne({name:"Peach"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("-----------Deletion done ---------------- \n");
//     }
// });


// Fruit.deleteMay({name:"Orange"},function(err){
    // if(err)
        // console.log(err);
    // else
        // console.log(`_---___-----___--- deletion of many Done `);
// })


const PersonSchema = new mongoose.Schema({
    name:String,
    age:Number ,
    favFruit:fruitSchema
});
const Person = mongoose.model("person",PersonSchema);   // " person "  -----> name of the colection 
// const person =  new Person({
//     name:"Rakesh",
//     age:22
//     }
// )

// Person.insertMany([{name:"Chinki",age:20,favFruit:mango},{name:"Minki",age:21,favFruit:mango}]);
// Person.insertMany([
//     { name: 'Gourav', age: 20},
//     { name: 'Kartik', age: 20},
//     { name: 'Niharika', age: 20}
// ]).then(function(){
//     console.log("Data inserted")  // Success
// }).catch(function(error){
//     console.log(error)      // Failure
// });
// const person =  new Person({
//     name:"Chiki",
//     age:20,
//     favFruit:mango
//     },{
//         name:"Minki",
//         age:21,
//         favFruit:mango
//     }
// );

// const person = new Person({
//     name:"Mangu",
//     age:22
// });

// person.save()