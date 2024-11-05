/* Write a function to find longest substring in a given a 
string without repeating characters except space character. 
If there are several, return the last one. 
Consider that all letters are lowercase. */

"use strict";

function longestSubstring(string = "") {
    if (string === "") { return "Empty string" }
    let temp, res = [], k = 0;
    let arrOfStr = string.split("");

    while (k + res.length <= arrOfStr.length - 1) {
        temp = [];
        for (let i = k; i < arrOfStr.length; i++) {
            if (temp.indexOf(arrOfStr[i]) === -1 || arrOfStr[i] === " ") {
                temp.push(arrOfStr[i])
            } else { break }
        }
        k++;
        if (temp.length >= res.length) {
            res = temp;
        }
    }
    return "".concat(...res);
}
//test
let str1 = "there are no two words in the english language more harmful than \"good job\"";
let str2 = "parting your soup is not a miracle, bruce";
let str3 = "aaaaaaa";
console.log(longestSubstring(str1));
console.log(longestSubstring(str2));
console.log(longestSubstring(str3));