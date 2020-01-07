// remove odd or even numbers from an array

let numbers = [-3.5, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 8.5];

// using a for loop

// returns even numbers
evenOnly = (array) => {
    let evenNum = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 === 0) {
            evenNum.push(array[i])
        };
    }
    return evenNum;
}

// returns odd numbers
oddOnly = (array) => {
    let oddNum = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 === 1 || array[i]%2 === -1) {
            oddNum.push(array[i])
        };
    }
    return oddNum;
}

console.log(evenOnly(numbers));
console.log(oddOnly(numbers));

// using the filter method on array

// returns even numbers
evenOnly2 = (array) => array.filter(num => num%2 === 0);

// returns odd numbers
oddOnly2 = (array) => array.filter(num => num%2 === 1 || num%2 === -1);
    

console.log(evenOnly2(numbers));
console.log(oddOnly2(numbers));