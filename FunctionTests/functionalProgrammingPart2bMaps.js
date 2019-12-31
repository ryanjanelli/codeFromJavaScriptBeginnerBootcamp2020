// array of numbers
var numbers = [43, 67, 94, 85, 26, 74, 3, 15, 10]

// method chaining to double a number and then add one
var doubleItAddOne = numbers.map(function(x) {
    return x * 2;
}).map(function(x) {
    return x + 1;
})

console.log(doubleItAddOne)