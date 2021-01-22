/* Write a JavaScript function to get all possible 
subsets of length 3 of the given array. Assume that 
all elements in the array are unique. */

"use strict";

function countNum(array) {
    let subArr = [];
    if (array.length <= 3) {
        subArr = array;
    } else {
        for (let i = 0; i < array.length - 2; i++) {
            for (let j = i + 1; j < array.length; j++) {
                for (let k = j + 1; k < array.length; k++) {
                    subArr.push([array[i], array[j], array[k]]);
                }
            }
        }
    }
    return subArr;
}
//test
let array = [[4], [19, 6], [19, 6, 4], [5, 9, 23, 0, -2, -1]];
for (let i = 0; i < array.length; i++) {
    console.log(countNum(array[i]));
}