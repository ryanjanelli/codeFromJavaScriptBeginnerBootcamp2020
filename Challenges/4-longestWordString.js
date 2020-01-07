// given a string of words, return the length of the longest word(s)

// enter a str as a parameter
longestWordLength = (str) => {
    // set longestWord to a string with one character
    let longestWord = ['a'];
    // take the str and convert each word to an array
    let array = str.split(' ');
    array.forEach((word) => {
        // remove any non letter characters from the current word
        word = word.replace(/[0-9]|\W/g, '');
        switch (true) {
            // if word is longer than previous longest word, empty the array and push word to it
            case word.length > longestWord[0].length :
                longestWord.length = 0    
                longestWord.push(word);
                break;
            // if word is equal to longest word, push word to array
            case word.length === longestWord[0].length :
                longestWord.push(word);
                break;
            // if word is shorter than longest word, do nothing
            case word.length < longestWord[0].length :
                break;
        }
    })
    return longestWord[0].length;
};

console.log(longestWordLength('he*l\'lo? my n&ame. i*s54 bry\'an'));
console.log(longestWordLength('english is my favorite language'));
