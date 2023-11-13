


// Guessing Game
// Generate a random number between 1 to 5
// If the guess number matches random number;
// run the game for 5 times
// show the number of wons and losts

// // 1st assignment


// for ( var i = 0; i < 5; i++ ) {
//     var guessNumber = parseInt(prompt("Enter a random number from 1 to 5"));

//     var randomNumber = Math.floor(Math.random() * 5) + 1;

//     if (guessNumber == randomNumber) {
//         console.log("You have won = " + randomNumber);
//     }
//     else {
//         console.log("You have lost  = " + randomNumber);
//     }
// }



// 2nd assignment


var numOfWon = 0;
var numOfLost = 0;

for ( var i = 0; i < 5; i++) {
    var guessNumber = parseInt(prompt("Enter a random number from 1 to 5"));

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessNumber == randomNumber) {
        console.log("You have won = " + randomNumber);
        numOfWon++;
    }
    else {
        console.log("You have lost  = " + randomNumber);
        numOfLost++;
    }
}


document.write("Total Number of won = " + numOfWon + "</br>");

document.write("Total Number of Lost = " + numOfLost + "</br>");