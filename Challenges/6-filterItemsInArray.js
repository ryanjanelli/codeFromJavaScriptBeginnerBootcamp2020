// create a function that takes an array with various data types and returns a new array without the strings

array1 = ['Hello', 2, 3, 'Morning', 5, 'Afternoon', -2, 'Evening', '5', '7', true, null, self = {first : 'Ryan', last : 'Janelli'}, 1.5]

// using forEach method

// function that accepts an array as argument
filterOutStrings = (array) => {
    // create an empty array to hold all non strings
    let stringlessArray = [];
    // iterate through each item in array
    array.forEach((item) => {
        // if the item is not equal to a string, push to stringlessArray
        if (typeof item !== 'string') {
            stringlessArray.push(item)
        }
    })
    return stringlessArray;
}

// create a function that takes an array with various data types and returns a new array with only numbers

// using for of loop

// function that accepts an array as argument
filterOnlyNumbers = (array) => {
    // create an empty array to hold all numbers
    let numbersArray = [];
    // iterate through each item in array
    for (let item of array) {
        // if item is a number, push to numbersArray
        if (typeof item === 'number') {
            numbersArray.push(item);
        }
    }
    return numbersArray;
}

// create a function that takes an array with various data types and returns a new array with only strings

filterOnlyStrings = (array) => array.filter(item => typeof item === 'string');


console.log(filterOutStrings(array1));
console.log(filterOnlyNumbers(array1));
console.log(filterOnlyStrings(array1));

