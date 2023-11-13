

// 1st argument

// function highestRunScorer (playersInfo) {
//     var highestScorer = playersInfo[0][0];
//     var highestScore = playersInfo[0][1];


//     for(var x = 0; x < playersInfo.length; x++) {
//         if (highestScore < playersInfo[x][1]) {
//             highestScore = playersInfo[x][1];
//             highestScorer = playersInfo[x][0];
//         }
//     }

//     return highestScorer;

// }

// var playersInfo = [
//     ["Ashraful", 95],
//     ["Mizan", 25],
//     ["Rakib", 45],
//     ["Luna", 105],
// ];

// var name = highestRunScorer(playersInfo);
// console.log(name);


// 2nd assignment

function highestRunScorer (playersInfo) {
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];


    for(var x = 0; x < playersInfo.length; x++) {
        if (highestScore < playersInfo[x][1]) {
            highestScore = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }

    return highestScorer;

}

var playersInfo = [
    ["Ashraful", 95],
    ["Mizan", 125],
    ["Rakib", 45],
    ["Luna", 105],
];

var name = highestRunScorer(playersInfo);
console.log(name);