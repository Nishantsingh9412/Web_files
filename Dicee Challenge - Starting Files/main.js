var RandomNumber1 = Math.floor(Math.random()*6)+1;
// console.log(RandomNumber1);
var Random_img_source1 ="images/dice"+RandomNumber1+".png";

///////////////////////////////////First Random number Generator With image2//////////////////
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",Random_img_source1);


///////////////////////////////////First Random number Generator With image2//////////////////
var RandomNumber2 = Math.floor(Math.random()*6)+1;
var Random_img_source2 = "images/dice"+RandomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",Random_img_source2);

if(RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML = " 🏁 Player 1 wins ! ";
}else if(RandomNumber1 == RandomNumber2){
    document.querySelector("h1").innerHTML = " 🏁 Tie 🏁";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins !🏁 ";
}



// document.querySelector("h1").innerHTML="Player 1 wins ";
