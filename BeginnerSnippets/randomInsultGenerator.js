//assign and array four string elements as body parts
var randomBodyParts = ['Face', 'Hands', 'Feet', 'Belly'];

//assign and array four string elements as adjectives
var randomAdjectives = ['Fat', 'Smelly', 'Dry', 'Stupid'];

//assaing and array five string elements as random words
var randomWords = ['Cat', 'Snow', 'Grass', 'Rock', 'Desert'];

//select a random body part from array of body parts
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];

//select a random adjective from array of adjectives
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

//select a random word from array of words
var randomWord = randomWords[Math.floor(Math.random() * 5)];

console.log('Your ' + randomBodyPart + ' is like a ' 
+ randomAdjective + ' ' + randomWord + '!!!');