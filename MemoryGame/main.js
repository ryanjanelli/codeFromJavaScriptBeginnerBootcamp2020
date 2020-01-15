var cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
];

// Duplicate cardaAray to create a match for each card  
var gameGrid = cardsArray.concat(cardsArray);
// Randomize gameGrid on each load
gameGrid.sort(() => 0.5 - Math.random())
// Grab the div with an id of "game-boad" and assign to variable "game"
var game = document.getElementById('game-board');
// Create a section element and assign to it the variable "grid"
var grid = document.createElement('section');
// Give section element a class of grid
grid.setAttribute('class', 'grid');
// Apend the grid section to the game-board div
game.appendChild(grid);
// Loop trhough each item in our cards array
for (let i = 0; i < gameGrid.length; i++) {
    // Create a div element and assign to variable card
    var card = document.createElement('div')
    // Apply a card class to that div
    card.classList.add('card');
    // Set the data-name attribute of the div to the gameGrid name
    card.dataset.name = gameGrid[i].name;
    // Create front of card
    var front = document.createElement('div');
    front.classList.add('front');
    // Create back of card
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameGrid[i].img})`;
    // Append card to grid
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
};

var firstGuess = '';
var secondGuess = '';
// Set count of selected tiles to 0
var count = 0;
// Set number of successful matches to 0
var matchCount = 0;
// Set number of guesses equal to 0
var guessCount = 0
var previousTarget = null;
var delay = 1200;

// Add match CSS
var match = () => {
    var selected = document.querySelectorAll('.selected');
    // Loop through the array like object containg `selected` class
    for (let i of selected) {
        i.classList.add('match');
    }
    matchCount++;
    if (matchCount === gameGrid.length/2) {
        if(!alert(`You won after ${guessCount} attempts!`)){resetGame()}
        setTimeout(resetGame, delay * 2)
    }
}

// Reset guesses after two attempts
var resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    for (let i of selected) {
        i.classList.remove('selected');
    }
};

var resetGame = () => {
    document.location.reload(true)
}

// Add event listener to grid
grid.addEventListener('click', (e) => {
    // Declare variable to target of clicked item
    var clicked = e.target;
    // Do not allow the grid section itself to be selected
    // only select divs inside the grid
    if (clicked.nodeName === 'SECTION' || 
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('match') ||
    clicked.parentNode.classList.contains('selected')) { 
        return; 
    }
    // We only want to add 'selected' class if the current count is less than 2
    if (count < 2) {
        count++;
        if (count === 1) {
            // Assign firstGuess
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else {
            // Assign secondGuess
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
            guessCount++;
            console.log(guessCount);
        }
        // If both guesses are not empty
        if (firstGuess !== '' && secondGuess !== '') {
            if (firstGuess === secondGuess) {
                // Run the match function
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
            } else {
                setTimeout(resetGuesses, delay);
            }
        }
        previousTarget = clicked;
    }
});