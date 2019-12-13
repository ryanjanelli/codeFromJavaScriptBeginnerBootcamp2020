// for loop practice
// use 1 if, 2 else if and 1 else clause
var mathTestScores = [98, 72, 88, 64, 92];

console.log(mathTestScores);

for (var testsRemaining = mathTestScores.length; testsRemaining > 0; testsRemaining-- && mathTestScores.shift(0)) {
    if (mathTestScores[0] > 90) {
        console.log('You got an A with a score of ' + mathTestScores[0] + '.');
    }   else if (mathTestScores[0] > 80 && mathTestScores[0] < 90) {
            console.log('You got a B with a score of ' + mathTestScores[0] + '.');
    }   else if (mathTestScores[0] > 70 && mathTestScores[0] < 80) {
            console.log('You got a C with a score of ' + mathTestScores[0] + '.');
    }   else if (mathTestScores[0] > 60 && mathTestScores[0] < 70) {
            console.log('You got a D with a score of ' + mathTestScores[0] + '.');
    }   else {
            console.log('You failed.');
    }
}

console.log(mathTestScores);