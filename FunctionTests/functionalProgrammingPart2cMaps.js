// an array of potential greetings
var greetings = ['Hi', 'Hello', 'Hey', 'Howdy', 'What\'s up', 'Thanks']

// map method to make them all uppercase
var shoutGreetings = greetings.map(function(words) {
    return words.toUpperCase();
})

// pull out first string in array
var shoutHi = shoutGreetings.shift();

console.log(shoutHi);

// map method to make all lowercase
var whisperGreetings = shoutGreetings.map(function(words) {
    return words.toLocaleLowerCase();
})

console.log(whisperGreetings);