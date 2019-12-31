// given two numbers, find the sum of all numbers within that range
// using Math.max() and Math.min() and a for loop

// input two numbers to find the sum of their range
function sumOfRange(x, y) {
    let total = 0;
    for (i = Math.min(x, y); i <= Math.max(x, y); i++) {
        total += i;
    }
     return total;
}

console.log(sumOfRange(1, 4));
console.log(sumOfRange(12, 6));
console.log(sumOfRange(1, 10));