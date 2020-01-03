// create a function that will take 3 parameters
// pass to the function an array with 3 elements using spread operator
// pass those arguments to a template literal and return the template literal

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let multiplyAllThree = (x, y, z) => {
    let product = x * y * z;
    return `The product of ${x}, ${y}, and ${z} is ${product}.`;
}

console.log(multiplyAllThree(...numbers.slice(5)));
console.log(multiplyAllThree(...numbers.slice(0,3)));
console.log(multiplyAllThree(...numbers.slice(2,4), numbers[7]));