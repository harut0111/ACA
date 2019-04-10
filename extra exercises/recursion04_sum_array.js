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