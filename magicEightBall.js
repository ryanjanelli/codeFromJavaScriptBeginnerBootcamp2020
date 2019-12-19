// reach out the user and have them enter their name
var userName = prompt ('What is your name?');

// greet the user after they tell us their name
// if they did not enter a name, just say Hello!
if (userName) {
        console.log('Hello ' + userName + '!');
} else {
        console.log('Hello!');
}

// have the user ask a question
var userQuestion = prompt ('Please ask a question!');

// address the user and state their question
console.log(userName + ' has asked "' + userQuestion + '"')

// find random number from 1-7
var randomNumber = Math.floor(Math.random() * 8)

// create eightBall variable with empty string to be filled later
var eightBall = '';

// using randomNumber to come up with a reply from the eight ball
switch(randomNumber) {
    case 0: eightBall = 'Better not tell you now.';
        break;
    case 1: eightBall = 'Concentrate and ask again.';
        break;
    case 2: eightBall = 'Reply hazy, try again.';
        break;
    case 3: eightBall = 'Cannot predict now.';
        break;
    case 4: eightBall = 'My reply is no.';
        break;
    case 5: eightBall = 'My sources say no.';
        break;
    case 6: eightBall = 'Outlook not so good.';
        break;
    case 7: eightBall = 'Signs point to yes.';
        break;
}

console.log('You peer into the Magic Eight Ball and read "' + eightBall + '"')