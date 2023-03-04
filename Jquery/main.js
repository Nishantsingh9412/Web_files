////// Changing color 
$("h1").addClass("big-title margin-50");           // addClass to h1

// console.log($("h1").hasClass("margin-50"));    // true

// Getting attribute 
// console.log($("img").attr("src"));                  // O/P  ok.png

// Setting attribute 
$("a").attr("href","https://www.yahoo.com");

// Js 
// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     })
// }

// Jquery 
// $("button").click(function(){
//     $("h1").css("color","purple");
// });
///// Getting Property
// var x = $("h1").css("font-size");
// console.log(x);    // 32 px

// Getting Input through Keyboard
// $("input").keypress(function(event){
//     console.log(event.key);
// })

// $(document).keypress(function(event){
//     var x = event.key;
//     console.log(x);
//     $("h1").text(x);
// })

// $("h1").on("mouseover",function(){
//     $("h1").css("color","peachpuff");
// });

// $("button").on("click",function(){
//     $("h1").toggle()
// })


// $("button").on("click",function(){
//     $("h1").fadeOut()
// })

// $("button").on("click",function(){
//     $("h1").fadeToggle()
// })


// $("button").on("click",function(){
//     $("h1").slideIn();
// })
// $("button").on("click",function(){
//     $("h1").animate({opacity:0.5});
// })

// $("button").on("click",function(){
//     $("h1").animate({margin:"20px"});
// })

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})