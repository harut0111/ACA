'use strict';

function myF(arr = []) {
    // sort array in ascending order
    arr.sort((a, b) => a - b);
    // numbers in range
    let n = arr[arr.length - 1] + 1 - arr[0];
    return n - arr.length;
}
// test
console.log(myF([1, 2, 8, 4, 3, 7, 10, 11]));
