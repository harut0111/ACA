/* Write a function to compute a new string from 
the given one by moving the first char to come after 
the next two chars, so "abc" yields "bca". 
Repeat this process for each subsequent group of 3 chars. 
Ignore any group of fewer than 3 chars at the end. */

"use strict";
function moveFirstChar(string = "") {

    if (string === "") { return "Empty string" }
    let t = "", res = "";

    for (let i = 0; i < string.length; i += 3) {
        //if rest substring length is less than 3
        if (string.length - 1 - i < 3) {
            res += string.substr(i);
            break;
        }
        // abc => a, bc => bc + a => bca
        t = string.substr(i, 1);
        res += string.substr(i + 1, 2) + t;
    }
    return res;
}
//test
let str1 = "dfgjkloypOO";
let str2 = "aweyoolp"
console.log(moveFirstChar(str1));
console.log(moveFirstChar(str2));