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
