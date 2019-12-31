// an array of numbers
var numbers = [1, 2, 3, 4, 5, 6]

var doubleItThenSum = numbers.map(function(number) {
    // takes each item in the array and doubles it
    return number * 2;
}).reduce(function(a,b) {
    // adds each number together until it is the sum of all numbers in the array
    return a + b;
})

console.log(doubleItThenSum)