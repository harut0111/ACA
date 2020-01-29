/* Write a function that accepts a string(a sentence) as 
a parameter and finds the longest word within the string․ 
If there are several words which are the longest ones, 
print the last word
(words can be separated by space, comma or hyphen). */

"use strict";
function longestWord(string = "") {
    // chech if string is empty
    if (string === "") { return "Empty String" };
    // words can be separated by space, comma or hyphen
    let arrOfStr = string.split(/,| |-/g);
    // define variables with initial values
    let maxLength = arrOfStr[0].length;
    let maxLengthWord = arrOfStr[0];
    //find the last word with max lenght
    for (let i = 1; i < arrOfStr.length; i++) {
        if (arrOfStr[i].length >= maxLength) {
            maxLength = arrOfStr[i].length;
            maxLengthWord = arrOfStr[i];
        }
    }
    return maxLengthWord;
}
//test
let str1 = "A revolution without dancing is a-revolution,nooooooooooooooooot worth having";
let str2 = "Which would be worse - to live as a monster, or to die as a good man?";
console.log(longestWord(str1));
console.log(longestWord(str2));