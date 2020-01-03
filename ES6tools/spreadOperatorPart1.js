// practice with the spread operator
// learning the basics behind it

let letters = ['a', 'b', 'c'];
// displayed as objects in an array
console.log(letters);
// displayed as 3 objects
console.log(...letters);

var alpha  = ['a', 'b', 'c'];
var bet = ['d', 'e', 'f'];

// combine using es5 methods

var alphabet = alpha.concat(bet);
console.log(alphabet);

var alphabet2 = ['a', 'b', 'c',...bet]
console.log(alphabet2);

let first = [1, 2, 3];
let second = [2, 4, 6];
let third = [3, 5, 7, 9, 11]

function productOfThree(a, b, c) {
    let result = a * b * c;
    console.log(result);
}

productOfThree(first[0], first[1], first[2]);
productOfThree(second[0], second[1], second[2]);
productOfThree(...first);
productOfThree(...second);
productOfThree(...third.slice(0, 3));
productOfThree(...third.slice(2))