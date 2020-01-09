// reverse a string using a for loop
// must start at last letter when creating for loop

// function that takes a string as an argument
revString = (str) => {
    // set rev to empty string
    let rev = '';
    // starting at the last character in str
    for (let i = str.length - 1; i >= 0; i--) {
        // add current letter to rev
        rev += str[i];
    }
    return rev;
}


console.log(revString('banana'));
console.log(revString('pandora'));