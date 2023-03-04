//jshint esversion:6 
// console.log(module);
// module.exports = getDate;    \\ For only Single variable passing
// anonymous function 
// var a = function(){
//     x = 5
//     return x   
// }
// console.log(a) 
exports.getDate = function(){
    
let today = new Date();
let options = {
    weekday : "long",
    day : "numeric",
    month: "long"
};
let day = today.toLocaleDateString("en-US",options);
return day;
}


exports.getDay =  function(){

    let today = new Date();
    let options = {
        weekday : "long",
    };
    let day = today.toLocaleDateString("en-US",options);
    return day;
}
