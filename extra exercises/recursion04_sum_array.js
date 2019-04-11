/* Write a JavaScript program to compute the sum of an array of integers.

Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 */

"use strict";

function sumArray(array) {
    // debugger;
    if(array.length === 1) {
        return array[0];
    }
    else { 
        return array.pop() + sumArray(array);
    }
}
let array = [1,7,2,3,4];
console.log(sumArray(array));
