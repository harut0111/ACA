'use strict';

function maxProd(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] * array[i + 1] >= max) {
            max = array[i] * array[i + 1];
        }
    }
    return max;
}
// test
let arr = [1,3,20,0,9,-2];
console.log(maxProd(arr));