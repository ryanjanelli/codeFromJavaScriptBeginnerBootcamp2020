// string to be evaluated
var string = 'one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen';
// declare variable to capture longest words
var longestWords = [];
// for loop, if statement, string.split
function findLongestWord(stringOfWords, longestWord) {
    // capture all words into an array for processing
    var arrayOfWords = stringOfWords.split(' ');
        for (i = 0; i < arrayOfWords.length; i++) {
            switch (true) {
                case i == 0 :
                    // place first word into array.
                    longestWord.push(arrayOfWords[i]);
                    break;
                case arrayOfWords[i].length === longestWord[0].length :    
                    // adds word at current index to longestWord array if length is equal.
                    longestWord.push(arrayOfWords[i])
                    break;
                case arrayOfWords[i].length > longestWord[0].length :
                    // dumps out all other words in longestWord array and adds word at current index to array.   
                    longestWord = [];    
                    longestWord.push(arrayOfWords[i])
                    break;
                case arrayOfWords[i].length < longestWord[0].length :
                    // length of word at current index is less than length of longestWord. Do nothing and continue.
                    break;
            }
        }
        return 'Longest Word(s): ' + longestWord + '. Word Length: ' + longestWord[0].length;
}

console.log(findLongestWord(string, longestWords))
