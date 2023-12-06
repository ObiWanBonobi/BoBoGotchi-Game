// Play buttons
const startButton = document.getElementById("start-button");
const endButton = document.getElementById("end-button");

// Page changes
const startPage = document.getElementsByClassName("start-page");
const playPage = document.getElementsByClassName("play-page");
const endPage = document.getElementsByClassName("end-page");

// Game statistics
let result = 0;
let gameOver = false;

// Images array for red need bubble
let redNeedIcon = document.querySelector("#need-icon");
const ICONS = [
    "assets/images/pet-water.webp",
    "assets/images/pet-food.webp",
    "assets/images/pet-love.webp",
    "assets/images/pet-play.webp"
];

// Selects a random value in an array
function selectArrayElement(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    return randomNum;
}

// Toggles between a blank icon and a randomly selected icon from the ICONS array
let currentSelectedElement = '';

function randomIconInRedBubble() {
    let selectedElement = selectArrayElement(ICONS);
    redNeedIcon.src = ICONS[selectedElement];
    currentSelectedElement = selectedElement;

    setTimeout(function () {
        redNeedIcon.src = "assets/images/blank.png";
        setTimeout(randomIconInRedBubble, 700);
    }, 2000);
}

// Start page button
startButton.addEventListener("click", startGame);

function startGame() {
    // Shows the Play page, hides the start page
    document.querySelector(".start-page").classList.toggle("none");
    document.querySelector(".play-page").classList.toggle("none");

    // Need bubble where the images toggles between an icon and a blank img
    randomIconInRedBubble();
}

endButton.addEventListener("click", restartGame);

function restartGame() {
    location.reload();
}
