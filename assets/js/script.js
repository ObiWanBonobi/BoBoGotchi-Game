// Buttons
let startButton = document.getElementById("start-button");
let endButton = document.getElementById("end-button");
let waterButton = document.getElementById("water-button");
let foodButton = document.getElementById("food-button");
let loveButton = document.getElementById("love-button");
let playButton = document.getElementById("play-button");

// Page changes
let startPage = document.getElementsByClassName("start-page");
let playPage = document.getElementsByClassName("play-page");
let endPage = document.getElementsByClassName("end-page");

// Game statistics
let score = 0;
let gameOver = false;

// Images array
let needIcon = document.querySelector("#need-icon");
let iconArray = [
        "assets/images/pet-water.webp",
        "assets/images/pet-food.webp",
        "assets/images/pet-love.webp",
        "assets/images/pet-play.webp"
];

function changeImg(needIcon,iconArray) {
  setInterval(function() {
    let randomNum = Math.floor(Math.random() * iconArray.length);
    needIcon.src = iconArray[randomNum];
  },1500);
}

// Toggles the other "pages" on startup
document.querySelector(".play-page").classList.toggle("none");
document.querySelector(".end-page").classList.toggle("none");

// Start page
startButton.addEventListener("click", startGame);

function startGame() {
    // Shows the Play page and hides the start page
    document.querySelector(".start-page").classList.toggle("none");
    document.querySelector(".play-page").classList.toggle("none");

    // Need bubble
    changeImg(needIcon,iconArray);
}
