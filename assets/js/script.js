// let for buttons
let startButton = document.getElementById("start-button");
let drinkButton = document.getElementById("drink");
let eatButton = document.getElementById("eat");
let petButton = document.getElementById("pet");
let playButton = document.getElementById("play");
let endButton = document.getElementById("end-button");

// let for page change
let startPage = document.getElementsByClassName("start-page");
let playPage = document.getElementsByClassName("play-page");
let endPage = document.getElementsByClassName("end-page");

// Hides the other pages on startup
document.querySelector(".play-page").classList.toggle("hide");
document.querySelector(".end-page").classList.toggle("hide");

// Start button event and funtion
startButton.addEventListener("click", function() {
	startGame();
});

function startGame() {
    document.querySelector(".start-page").classList.toggle("hide");
    document.querySelector(".play-page").classList.toggle("show");
}