/* Given an array of numbers. Print frequency 
of each unique number. (Frequency is the count of 
particular element divided by the count of all elements) */

"use strict";
// Method 1: using regular expression
function numFrequency(array, number) {
    let strOfArr = array.join();
    let patt = new RegExp(number, "g");
    let count = strOfArr.match(patt).length;

    return count / array.length;
}
/*
//test
console.log("[1,1,2,2,3], 1 => " + numFrequency([1,1,2,2,3], 1))
console.log("[1,1,2,2,3], 2 => " + numFrequency([1,1,2,2,3], 2))
console.log("[1,1,2,2,3], 3 => " + numFrequency([1,1,2,2,3], 3))
console.log("[4,4], 4 => " + numFrequency([4,4], 4))
console.log("[1,2,3], 1 => " + numFrequency([1,2,3], 1))
 */

// Method 2: using loop
function numFreq(array) {
    let count;
    let txt = "";
    let l = array.length;

    for (let i = 0; i < l; i++) {
        if (array.indexOf(array[i]) < i) continue;
        count = 1;
        if (i === l - 1) {
            txt += `${array[i]} => ${count / l}\n`;
            break;
        }
        for (let j = i + 1; j < l; j++) {
            if (array[i] === array[j]) count++;
        }
        txt += `${array[i]} => ${count / l}\n`;
    }
    return txt;
}
//test
let array = [[1, 1, 2, 2, 3], [1, 2, 3], [4, 4]];
for (let i = 0; i < array.length; i++) {
    console.log(numFreq(array[i]));
}