//takes user's input as an argument, converts to lower case and returns the input
//if user enters invalid choice, they are prompted to enter a valid option
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || 
    userInput === 'human' || 
    userInput === 'gun') {
        return userInput;
    }
    else {
        console.log('Please enter a valid option');
    }
}

//computer selects a random choice and returns that choice
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    var threeChoices = ['bear', 'human', 'gun'];
    var computerInput = threeChoices[randomNumber];
    return computerInput;
}

//determines winner and goes through all possible outcomes
//each yields a unique ending
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a Tie!!!';
    }
    //user selected human
    if (userChoice === 'human') {
        //computer selected bear
        if (computerChoice === 'bear') {
            return 'You have been mauled by a bear!';
        }
        else {
            return 'You have disarmed a gun!';
        }
    }
    //user selected bear
    if (userChoice === 'bear') {
        //computer selected gun
        if (computerChoice === 'gun') {
            return 'You have been shot by a gun!';
        }
        else {
            return 'You have mauled a human!';
        }
    }
    //user selected gun
    if (userChoice === 'gun') {
        //computer selected human
        if (computerChoice === 'human') {
            return 'Your gun has been disarmed!';
        }
        else {
            return 'You have shot a bear!';
        }
    }
}

//using the above functions, a prompt box directs user to select a choice and then determines the outcome
function playGame() {
    //collects users choice via prompt box
    var promptUserChoice = prompt('Please choose bear, human or gun');
    //sets users choice
    var userChoice = getUserChoice(promptUserChoice);
    //sets computers choice
    var computerChoice = getComputerChoice();
    //logs users choice, then computer choice and displays the results of the game
    console.log (userChoice);
    console.log (computerChoice);
    console.log (determineWinner(userChoice, computerChoice));
}

//runs the game
playGame();