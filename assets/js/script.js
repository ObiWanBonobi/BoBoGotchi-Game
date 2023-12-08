// Play buttons
const startButton = document.getElementById("start-button");
const endButton = document.getElementById("end-button");

// Page changes
const startPage = document.getElementsByClassName("start-page");
const playPage = document.getElementsByClassName("play-page");
const endPage = document.getElementsByClassName("end-page");

// Game statistics
let result = 0;

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
let currentSelectedElement = "";

function randomIconInRedBubble() {
    let selectedElement = selectArrayElement(ICONS);
    redNeedIcon.src = ICONS[selectedElement];
    currentSelectedElement = selectedElement;

    setTimeout(function () {
        redNeedIcon.src = "assets/images/blank.png";
        setTimeout(randomIconInRedBubble, 200);
    }, 1250);
}

// Will continue the game or finish it
let userButtonPressed = "";
let correctButtonClicked = false;

function continueGameOrGameOver(currentScore) {
    let score = currentScore;
    let scoreDisplayGame = document.getElementById("score-display-game");
    let scoreDisplayFinal = document.getElementById("score-display-final");

    correctButtonClicked = checkPressedButton(userButtonPressed, currentSelectedElement);

    if (correctButtonClicked == true) {
        // Adds a point to the score
        score++;
        scoreDisplayGame.textContent = score;
    } else {
        // leaves the play page and shows the game over page
        document.querySelector(".end-page").classList.toggle("none");
        document.querySelector(".play-page").classList.toggle("none");
        scoreDisplayFinal.textContent = score;
    }

    return score;
}

// Function that plays the game
function playTheGame(result) {
    // checks score and changes image the higher the score
    let initialScore = result;
    let gameScore = initialScore;
    determineMonsterImage(result);

    // Starts changing the random Icon bubble
    randomIconInRedBubble();

    // Control buttons for the game
    // Water button
    document.getElementById("0").addEventListener("click", function () {
        userButtonPressed = document.getElementById("0").id;
        gameScore = continueGameOrGameOver(gameScore);
        determineMonsterImage(gameScore);
    });

    // Food button
    document.getElementById("1").addEventListener("click", function () {
        userButtonPressed = document.getElementById("1").id;
        gameScore = continueGameOrGameOver(gameScore);
        determineMonsterImage(gameScore);
    });

    // Love button
    document.getElementById("2").addEventListener("click", function () {
        userButtonPressed = document.getElementById("2").id;
        gameScore = continueGameOrGameOver(gameScore);
        determineMonsterImage(gameScore);
    });

    // Play button
    document.getElementById("3").addEventListener("click", function () {
        userButtonPressed = document.getElementById("3").id;
        gameScore = continueGameOrGameOver(gameScore);
        determineMonsterImage(gameScore);
    });

}

// Check if the clicked button is correct
function checkPressedButton(pressedButton, currentIcon) {
    if (pressedButton == currentIcon) {
        return true;
    } else {
        return false;
    }
}

// changes BoBo's image the more points you score
function determineMonsterImage(score) {
    let monsterImage = document.querySelector("#monster-img");

    if (score > 5) {
        monsterImage.src = "assets/images/cute-monster-normal.png";
    }

    if (score > 10) {
        monsterImage.src = "assets/images/cute-monster-happy.png";
    }

    if (score > 15) {
        monsterImage.src = "assets/images/cute-monster-very-happy.png";
    }
}

// Start page button
startButton.addEventListener("click", startGame);

function startGame() {
    // Shows the Play page, hides the start page
    document.querySelector(".start-page").classList.toggle("none");
    document.querySelector(".play-page").classList.toggle("none");

    // plays the game
    playTheGame(result);
}

// Restart page button
endButton.addEventListener("click", restartGame);

// Reloads the page to show the start page again
function restartGame() {
    location.reload();
}
