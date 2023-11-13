// initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const reminingAttempts = cardBody.querySelector(".reminingAttempts");

// event add function
form.addEventListener("submit", function(event) {
    event.preventDefault();
    attempts++;
    if (attempts === 5) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }if (attempts < 6) {
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        reminingAttempts.innerHTML = `Remining attempts: ${totalAttempts-attempts}`;
    }
    guessingNumber.value = "";
});

// result check function
function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);
    if (guessingNumber === randomNumber) {
        resultText.innerHTML = `you have won`;
        totalWons++;
    }else {
        resultText.innerHTML = `you have lost, random number was: ${randomNumber}`;
        totalLosts++;
    }
    lostWonMessage.innerHTML = `Total won: ${totalWons}, Total loss: ${totalLosts}`;
    lostWonMessage.classList.add('large-text');
    cardBody.appendChild(lostWonMessage);
};

// get randomNumber function
function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
};