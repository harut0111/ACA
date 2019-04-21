/* Given an array of strings and numbers. 
Print the number of integers and the number 
of strings in the array */

"use strict";

function countNum(array) {
    let n = 0, s = 0, txt = "";
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "number") {
            n++;
        } else {
            s++;
        }
    }
    return `Numbers: ${n}, Strings: ${s}`;
}
//test
let a1 = "[1, \"10\", \"hi\", 2, 3] => " + countNum([1, "10", "hi", 2, 3])
let a2 = "[1, 4, \"i am a string\", \"456\"] => " + countNum([1, 4, "i am a string", "456"])
console.log(a1);
console.log(a2);