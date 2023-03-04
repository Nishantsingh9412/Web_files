var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
function nextSequence(){
    var randomNumber = Math.floor((Math.random()*4));
    // console.log(randomNumber);
    var RandomChosenColour =  buttonColours[randomNumber];
    gamePattern.push(RandomChosenColour);
    // console.log(RandomChosenColour);
    // $('#'+ RandomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    // var ad = new Audio("sounds/"+ RandomChosenColour +".mp3");
    // console.log(ad);
    // ad.play();


    var getId = gamePattern[0];
    console.log(getId);
    $("#"+getId).click(function(){
    alert(getId+"aa gaiyo"); 
})

}

nextSequence();
function playSound(name){
    // name = 
}
// var getId = gamePattern[0];
