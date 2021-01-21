//-----------------------------------------------------------------------------
//handle buttons events
//-----------------------------------------------------------------------------

//Get num of drums from HTML
var numOfDrums = document.querySelectorAll(".drum").length;
for(var iNum = 0; iNum < numOfDrums; ++iNum)
{
    //add event listner to all buttons and corresponding callback function
    //here we have used anonymous function we can rather defined a seperated function
    //and pass it as an argument during adding eventlistner
    document.querySelectorAll(".drum")[iNum].addEventListener("click",function(){
        var keyName = this.innerHTML;
        playSound(keyName);
        addAnimation(keyName);
        //animation
    });
}

//-----------------------------------------------------------------------------
//handle keyboard events
//-----------------------------------------------------------------------------

document.addEventListener("keypress",function(event){
    var keyName =  event.key;
    playSound(keyName);
    addAnimation(keyName);
})

//-----------------------------------------------------------------------------
//Play sound when correspoding key is pressed

function playSound(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        default:
            break;
    }
}

//-----------------------------------------------------------------------------
//add animation to button when its pressed

function  addAnimation(key)
{
    //to add already defined class in the css add this class dynmically
    //into class list
    var currButton = document.querySelector("." + key);
    currButton.classList.add("pressed");

    //set timer after which anmation faded out
    setTimeout(function(){
        currButton.classList.remove("pressed");
    },100);
}

//-----------------------------------------------------------------------------