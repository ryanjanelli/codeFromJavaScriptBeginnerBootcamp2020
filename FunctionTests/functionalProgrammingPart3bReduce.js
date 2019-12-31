// array of numbers
var powersOfTwo = [2, 4, 8, 16, 32]

// finds sum of the array
var sumOfTwo = powersOfTwo.reduce(function(a, b) {
    return a + b;
})
console.log(sumOfTwo);

// finds product of the array
var productOfTwo = powersOfTwo.reduce(function(a, b) {
    return a * b;
})
console.log(productOfTwo);

// finds the largest number in the array
var largestNumberOfTwo = powersOfTwo.reduce(function(a, b) {
    if (a < b) {return b}
    else return a;
})
console.log(largestNumberOfTwo)