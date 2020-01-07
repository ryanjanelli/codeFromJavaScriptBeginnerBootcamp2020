// practice using a for of loop to find longest word in a string

longestWordLength = (str) => {
    // set longestWord to empty string
    let longestWord = '';
    // take a string and convert each word to an array
    let array = str.split(' ');
    for (let word of array) {
        // remove any numbers or special characters from the word
        word = word.replace(/[0-9]|\W/g, '');
        // update longestWord if word is longer
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord.length;
}

console.log(longestWordLength('hello my name is bryan'));