// Play buttons
const startButton = document.getElementById("start-button");
const endButton = document.getElementById("end-button");
const waterButton = document.getElementById("water-button");
const foodButton = document.getElementById("food-button");
const loveButton = document.getElementById("love-button");
const playButton = document.getElementById("play-button");

// Page changes
const startPage = document.getElementsByClassName("start-page");
const playPage = document.getElementsByClassName("play-page");
const endPage = document.getElementsByClassName("end-page");

// Game statistics
let score = 0;
let gameOver = false;

// Images array for red need bubble
let redNeedIcon = document.querySelector("#need-icon");
const ICONS = [
    "assets/images/pet-water.webp",
    "assets/images/pet-food.webp",
    "assets/images/pet-love.webp",
    "assets/images/pet-play.webp"
];

// Function that toggles between a blank icon and a randomly selected icon from the ICONS array
function randomIconInRedBubble() {
    let selectedElement = selectArrayElement(ICONS);
    redNeedIcon.src = "assets/images/blank.png";

    setTimeout(function() {
        redNeedIcon.src = ICONS[selectedElement];
        setTimeout(randomIconInRedBubble, 2000);
    }, 700);
} 

// Selects a random value in an array
function selectArrayElement(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    return randomNum;
}

// Toggles the other "pages" on startup
document.querySelector(".play-page").classList.toggle("none");
document.querySelector(".end-page").classList.toggle("none");

// Start page button
startButton.addEventListener("click", startGame);

function startGame() {
    // Shows the Play page, hides the start page and starts the red need bubble with a blank icon
    document.querySelector(".start-page").classList.toggle("none");
    document.querySelector(".play-page").classList.toggle("none");

    // Need bubble where the images toggles between an icon and a blank img
    randomIconInRedBubble();
}
