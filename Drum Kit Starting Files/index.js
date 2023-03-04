// detecting Button Click
var num_of_drum_buttons = document.querySelectorAll(".drum").length;

for(var i = 0; i<num_of_drum_buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // console.log(this.classList.add("challenge"));  
        var ButtonClicked = this.innerHTML;
        MakeSound(ButtonClicked);
        btn_animation(ButtonClicked);       
    });
}

// Detecting Keyboard Press

document.addEventListener("keypress",function(event){
    // console.log(event);
    MakeSound(event.key);
    btn_animation(event.key)
});

// Both are Same 

// document.addEventListener("keypress",function(event){
//     // console.log(event);
//     MakeSound(event.key);
// });


function MakeSound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "d":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
        break;
        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
        break;
        case "k":
            var tom_2 = new Audio("sounds/tom-3.mp3");
            tom_2.play();
        break;
        case "l":
            var tom_3 = new Audio("sounds/tom-4.mp3");
            tom_3.play();
        break;
        default:
            // console.log(key);
    }
};


// --------------------------------Method 2----------------------------------------------

// document.querySelectorAll("button").forEach(button => {button.addEventListener("click", function(){
//         alert("main click ho giyo");
// });});



    // // using ------------------------------ Arrow Function ---------*********------------
    // document.querySelector("button").addEventListener("click", () => {
    //     alert("main click ho giyo");
    // });

// 

function  btn_animation(currentKey){
    var btn = document.querySelector("."+currentKey); 
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed");
    },100);
}

