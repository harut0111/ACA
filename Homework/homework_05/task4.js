"use strict";

function rotEl(arr = [], N) {

    let n = (N < 0) ? arr.length + N : N;
    if (arr.length <= n) {
        return arr;
    }
    let ce = arr.splice(n, 1)
    return ce.concat(rotEl(arr, n));
}
console.log(rotEl(['a', 'b', 'c', 'd', 'e', 'f', 'g,', 'h'], 3));
console.log(rotEl(['a', 'b', 'c', 'd', 'e', 'f', 'g,', 'h'], -2));