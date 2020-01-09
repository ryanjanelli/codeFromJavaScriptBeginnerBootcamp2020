// reverse a string using a for of loop from front to back

// function that takes a string as an argument
revString = (str) => {
    // set rev to empty string
    let rev = '';
    // iterate through each char of the str
    for (let char of str) {
        // place char at front of rev string
        rev = char + rev;
    }
    return rev;
}

// function that takes a string as an argument
revString2 = (str) => {
    let revArray = [];
    // iterate though each char of the str
    for (let char of str) {
        // unshift each char to the front of the array
        revArray.unshift(char);
    }
    // return the the array as a string
    return revArray.join('');
}

console.log(revString('baloon'));
console.log(revString('good morning'));

console.log(revString2('baloon'));
console.log(revString2('good morning'));