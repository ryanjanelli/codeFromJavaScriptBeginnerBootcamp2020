// switch practice 

var mathTestScores = [90, 72, 88, 64, 92];

for (let i = 0; i < mathTestScores.length; i++) {
    console.log(mathTestScores[i]);
    switch (true) {
            case (mathTestScores[i] >= 90) :
                console.log('You got an A with a score of ' + mathTestScores[i] + '.');
                break;
            case (mathTestScores[i] >= 80) :
                console.log('You got a B with a score of ' + mathTestScores[i] + '.');
                break;
            case (mathTestScores[i] >= 70) :
                console.log('You got a C with a score of ' + mathTestScores[i] + '.');
                break;
            case (mathTestScores[i] >= 60) :
                console.log('You got a D with a score of ' + mathTestScores[i] + '.');
                break;
            default :
            console.log('You failed. A ' + mathTestScores[i] + ' is not good enough.');
    }
}