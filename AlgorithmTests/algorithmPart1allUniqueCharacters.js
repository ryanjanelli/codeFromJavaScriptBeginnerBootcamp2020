// this algorithm determines if a string has all unique letters
var string1 = 'surf taco';
var string2 = 'taco bell'

function allUniqueCharacters() {
    for (i = 0; i < this.length + 1; i++) {
        // if indexOf returns -1, there are no other matching characters. 
        // charAt(i) takes the current letter in the string and 
        // checks it against every letter coming after it. 
        if (this.indexOf(this[i], i + 1) == -1) {
            continue; 
        } else { 
            return this + ' has letters that repeat.';
            }
    }
    return this + ' has all unique letters.';
}

console.log(allUniqueCharacters.bind(string1)());
console.log(allUniqueCharacters.bind(string2)());

// copy of working code for reference
// this code has the charAt() method rather than the bracket that is used above
// function allUniqueCharacters() {
//     for (i = 0; i < this.length + 1; i++) {
//         // if indexOf returns -1, there are no other matching characters. 
//         // charAt(i) takes the current letter in the string and 
//         // checks it against every letter coming after it. 
//         if (this.indexOf(this.charAt(i), i + 1) == -1) {
//             continue; 
//         } else  if (i == this.length) {
//             console.log(this + ' has all unique letters.')
//         } else { 
//             console.log(this + ' has letters that repeat.');
//             break;
//         }
//     }
// }