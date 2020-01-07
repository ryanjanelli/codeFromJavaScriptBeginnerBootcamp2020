// take a given name and switch the position of the first name and last name
// Example: "Abraham Lincoln" becomes "Lincoln Abraham"

// 1. split the string into an array of words
// 2. reverse the order of the array 
// 3. join it back together into a string.
nameSwap1 = (str) => str.split(' ').reverse().join(' ');

// 1. split the string into an array of words
// 2. call the second item in the array followed by the first
nameSwap2 = (str) => {
    let strArray = str.split(' ');
    return `${strArray[1]} ${strArray[0]}`;
}

console.log(nameSwap1('Abraham Lincoln'));
console.log(nameSwap1('Ryan Janelli'));

console.log(nameSwap2('Abraham Lincoln'));
console.log(nameSwap2('Ryan Janelli'));