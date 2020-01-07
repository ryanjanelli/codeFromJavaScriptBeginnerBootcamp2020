// given a string, return all characters in that string in alphabetical order

// using split method
alphabetize = (str) => str.replace(/\W/g, '').split('').sort().join('')

console.log(alphabetize('hello world what a beautiful day. its 72 degrees with 50% humidity.'))

// using spread operator
alphabetize2 = (str) => [...str.replace(/\W/g, '')].sort().join('')

console.log(alphabetize2('hello world what a beautiful day. its 72 degrees with 50% humidity.'))