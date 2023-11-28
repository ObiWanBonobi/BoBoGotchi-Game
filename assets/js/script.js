// let for buttons
let startButton = document.getElementById("start-button");
let endButton = document.getElementById("end-button");
let waterButton = document.getElementById("water-button");
let foodButton = document.getElementById("food-button");
let loveButton = document.getElementById("love-button");
let playButton = document.getElementById("play-button");

// let for page changes
let startPage = document.getElementsByClassName("start-page");
let playPage = document.getElementsByClassName("play-page");
let endPage = document.getElementsByClassName("end-page");

// let for game statistics
let score = 0;
let gameOver = false;

// Toggles the other "pages" on startup
document.querySelector(".play-page").classList.toggle("none");
document.querySelector(".end-page").classList.toggle("none");

// Start page
startButton.addEventListener("click", function () {
    startGame();
});

function startGame() {
    // Shows the Play page and hides the start page
    document.querySelector(".start-page").classList.toggle("none");
    document.querySelector(".play-page").classList.toggle("none");

    // Play game page
    // Needs bubble
    let needIcon = document.getElementsByClassName("need-icon");
    let needNumber = getRandomInt(4);

    function needBubble() {
        showAndHideBubble(needNumber);
    }

    function showAndHideBubble(needNumber) {
        for (let i = 0; i < needIcon.length; i++) {
            if (i === needNumber) {
                needIcon[i].classList.remove("none")
            } else {
                needIcon[i].classList.add("none")
            }
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    needBubble();

}