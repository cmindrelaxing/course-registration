
// One  Dimensional Array
// Create a function called highestScore function
// Receive a 1D array called score scores
// return the highest score

console.clear();
function highestScore(scores) {
    var max = scores[0];
    for (var i = 1; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i];

        }
    }
    return max;

}
var scores = [21, 98, 1, 88, 15];
var maxScore = highestScore(scores);
console.log(maxScore);
