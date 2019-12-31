// practice writing strings using ES5 and ES6 notation
// must include both single quote and double quote in the combined string

var drink = 'coffee';
var food = 'doughnut';
var time = 'morning';

var mondayMorning = 'I\'m having ' + drink + ' and a ' + food + '. Dad says "It\'s the best start to the ' + time + '".';
var tuesdayMorning = `I'm having ${drink} and a ${food}. Mom says "Please bring me some this ${time}".`;

console.log(mondayMorning);
console.log(tuesdayMorning);