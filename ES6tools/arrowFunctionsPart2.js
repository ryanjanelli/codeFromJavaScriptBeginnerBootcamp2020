// rewrite the code on lines 2-4 using ES6 syntax with arrow function
// var func1 = function() {
//     return 'Hi';
// }

let func1 = () => 'Hi';
console.log(func1());

let func2 = () => {return 'Hi';};
console.log(func2());

// create two arrow functions
// one with no parameters and one with two or more parameters

let func3 = () => Date();
console.log(func3());

let func4 = (feet, inches) => `I am ${feet} feet and ${inches} inches tall.`;
console.log(func4(5,11));

var evenNumbers = [2, 4, 6, 8];
// syntax in es5
// var es5squared = numbers.map(function(n) {return n * n});
let es6squared = evenNumbers.map(n => n * n);
console.log(es6squared);