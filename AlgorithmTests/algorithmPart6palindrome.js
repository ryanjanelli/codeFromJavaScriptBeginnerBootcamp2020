// create a test for a string to determine if it is a palindrome (same forwards as backwards)
// if using a regular expression, /\W/ will catch all non word characters

var string1 = 'rAcecar';
var string2 = 'courSE';
var string3 = 'pop-POp';
var string4 = 'c-ococ';

// enter a string into the function
function palindromeTest(stringToTest) {
    // remove all spaces and special characters then set to lower case
    var stringToTest = stringToTest.replace(/\W/g, '').toLowerCase();
    console.log(stringToTest);
    // reverse the string using split, reverse and join
    var reverseString = stringToTest.split('').reverse().join('');
    console.log(reverseString);
    // compare the two to determine if it is a palindrome
    return stringToTest === reverseString;
}

console.log(palindromeTest(string1));
console.log(palindromeTest(string2));
console.log(palindromeTest(string3));
console.log(palindromeTest(string4));