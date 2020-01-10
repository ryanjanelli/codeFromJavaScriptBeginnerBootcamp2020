numbers = [-5, -10, -1, 8, 20, 16, 30, -24, 55, 47, -37]

// create a function that takes an array of numbers and returns the largest number

//using Math.max

findLargestNumber = (array) => Math.max(...array);

// using a for of loop

// function that takes an array of numbers as an argument
findLargestNumber2 = (array) => {
    // sets largestNumber to first number in array
    let largestNumber = array[0];
    for (let number of array) {
        // updates largestNumber if current number is larger
        if (number > largestNumber) {
            largestNumber = number;
        }
    }
    return largestNumber;
}

// create a function that takes an array of numbers and returns the smallest number

// using Math.min

findSmallestNumber = (array) => Math.min(...array);

// using filter method

findSmallestNumber2 = (array) => {
    // sets smallestNumber to first number in array
    let smallestNumber = array[0];
    array.filter((number) => {
       // updates smallestNumber is current number is smaller
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    })
    return smallestNumber;
}

console.log(findLargestNumber(numbers));
console.log(findLargestNumber2(numbers));
console.log(findSmallestNumber(numbers));
console.log(findSmallestNumber2(numbers));