// for loop practice
// use 1 if, 2 else if and 1 else clause
var mathTestScores = [90, 72, 88, 64, 98, 56];


for (var i = 0; i < mathTestScores.length; i++) {
    if (mathTestScores[i] >= 90) {
        console.log('You got an A with a score of ' + mathTestScores[i] + '.');
    }   else if (mathTestScores[i] >= 80) {
            console.log('You got a B with a score of ' + mathTestScores[i] + '.');
    }   else if (mathTestScores[i] >= 70) {
            console.log('You got a C with a score of ' + mathTestScores[i] + '.');
    }   else if (mathTestScores[i] >= 60) {
            console.log('You got a D with a score of ' + mathTestScores[i] + '.');
    }   else {
            console.log('You failed.');
    }
}