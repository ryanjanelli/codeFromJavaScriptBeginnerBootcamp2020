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

console.log(revString('baloon'));
console.log(revString('good morning'));