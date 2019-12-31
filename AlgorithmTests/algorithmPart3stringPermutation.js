// create an algorithm that determines if two strings are a permuation of each other.
// using string.split(), array.sort() and array.join() achieve this goal
// check to see if it has the same characters and same amount of characters

// declare strings here
var stringA = 'coco is laying on the bed';
var stringB = 'rusty will destroy the christmas tree';
var stringC = 'on the bed coco is laying';
var stringD = 'coco is laying on the cat'

// function that takes in two strings to compare and check for permutation
function permutationString(string1, string2) {
    let sortedString1 = string1.split('').sort().join('');
    let sortedString2 = string2.split('').sort().join('');
        return sortedString1 == sortedString2;
        }
        


// backup of code

// function permutationString(string1, string2) {
//     let sortedString1 = string1.split('').sort().join('');
//     let sortedString2 = string2.split('').sort().join('');
//             if (sortedString1 == sortedString2) {
//                 console.log(string1 + ' is a permutation of ' + string2)
//             } else { 
//                 console.log(string1 + ' and ' + string2 + ' are NOT permutations') 
//             }
//         }

console.log(permutationString(stringA, stringB));
console.log(permutationString(stringA, stringC));
console.log(permutationString(stringA, stringD));
console.log(permutationString('hello world', 'dlrow olleh'));