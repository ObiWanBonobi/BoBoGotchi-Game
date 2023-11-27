// let for buttons
let startButton = document.getElementById("start-button");
let endButton = document.getElementById("end-button");
let drinkButton = document.getElementById("drink");
let eatButton = document.getElementById("eat");
let loveButton = document.getElementById("love");
let playButton = document.getElementById("play");

// let for page change
let startPage = document.getElementsByClassName("start-page");
let playPage = document.getElementsByClassName("play-page");
let endPage = document.getElementsByClassName("end-page");

// Toggles the other "pages" on startup
document.querySelector(".play-page").classList.toggle("hide");
document.querySelector(".end-page").classList.toggle("hide");

// Start page
startButton.addEventListener("click", function () {
    startGame();
});

function startGame() {
    // Shows the Play page and hides the start page
    document.querySelector(".start-page").classList.toggle("hide");
    document.querySelector(".play-page").classList.toggle("hide");

    // Play game page
    // Needs bubble
    let monsterNeeds = document.querySelectorAll(".need-icon")
    let needs = getRandomInt(4);

    function needBubble(){
        showAndHideBubble(needs);
    }

    function showAndHideBubble(needs) {
        for (let i = 0; i < monsterNeeds.length; i++){
            if (i === needs){
                monsterNeeds[i].classList.remove("hide")
            } else {
                monsterNeeds[i].classList.add("hide")
            }
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    needBubble();

}
