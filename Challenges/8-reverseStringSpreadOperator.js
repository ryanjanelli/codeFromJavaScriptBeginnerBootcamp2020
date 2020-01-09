// reverse a string using the spread operator

// turn str into an array using spread operator by putting it within brackets
// reverse the array and join the array back into a string
revString = (str) => [...str].reverse().join('');

console.log(revString('hello'))
console.log(revString('good morning'));