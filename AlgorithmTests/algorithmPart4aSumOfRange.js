// given two numbers, find the sum of all numbers within that range
// using Math.max() and Math.min() and a for loop

// input two numbers within an array to find the sum of their range
function sumOfRange(arrayOfTwoNumbers) {
    let min = Math.min(arrayOfTwoNumbers[0], arrayOfTwoNumbers[1]);
    let max = Math.max(arrayOfTwoNumbers[0], arrayOfTwoNumbers[1]);
    let total = 0;
    for (i = min; i <= max; i++) {
        total += i;
    }
     return total;
}

console.log(sumOfRange([1, 4]));
console.log(sumOfRange([12, 6]));
console.log(sumOfRange([1, 10]));