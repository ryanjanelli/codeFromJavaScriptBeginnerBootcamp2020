// take a given name and switch the position of the first name and last name
// Example: "Abraham Lincoln" becomes "Lincoln Abraham"

nameSwap1 = (str) => str.split(' ').reverse().join(' ');

nameSwap2 = (str) => {
    let strArray = str.split(' ');
    return `${strArray[1]} ${strArray[0]}`;
}

console.log(nameSwap1('Abraham Lincoln'));
console.log(nameSwap1('Ryan Janelli'));

console.log(nameSwap2('Abraham Lincoln'));
console.log(nameSwap2('Ryan Janelli'));