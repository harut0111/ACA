"use strict";

function sectinDiv(start = 1, end = 5, n = 1) {
    let space = +((end - start) / (n - 1)).toFixed(1)
    if (space === Infinity) return start;
    let arr = [];
    for (let i = start; i <= end; i += space) {
        arr.push(+i.toFixed(1));
    }
    //Alert
    if (arr[arr.length - 1] !== end) {
        return `${arr} !!!!specified range is not divided` +
        ` into equal spaces`;
    }
    return arr;
}
//test
let arr = [[1, 5, 1], [10, 100, 3], [1, 5, 6], [1, 11, 4]];
for (let i = 0; i < arr.length; i++) {
    let a = arr[i][0], b = arr[i][1], c = arr[i][2];
    console.log(`${arr[i]} => ${sectinDiv(a, b, c)}`);
}