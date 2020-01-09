// check to see if a str is a palindrome or not
// ignore capitalization, spaces and special characters

// using built in methods for strings and arrays

// function that takes str as an argument
isPalindrome = (str) => {
    // removes all special characters and numbers
    str = str.replace(/\W/g, '').toLowerCase();
    // sets rev to the reverse of str
    rev = str.split('').reverse().join('');
    // return boolean based on if these two are equal
    return str === rev;
}

// using filter method

// function that takes str as an argument
isPalindrome2 = (str) => {
    // removes all special characters and numbers
    str = str.replace(/\W/g, '').toLowerCase();
    // sets rev to an empty string
    let rev = '';
    [...str].filter((char) => {
        // place char at front of rev string
        rev = char + rev;
    })
    // return boolean based on if these two are equal
    return str === rev;
}

console.log(isPalindrome('apricot'));
console.log(isPalindrome('paLInDrome'));
console.log(isPalindrome('Eva, Can I Stab Bats In A Cave?'));
console.log(isPalindrome('Was It A Rat I Saw?!'));

console.log(isPalindrome2('apricot'));
console.log(isPalindrome2('paLInDrome'));
console.log(isPalindrome2('Eva, Can I Stab Bats In A Cave?'));
console.log(isPalindrome2('Was It A Rat I Saw?!'));