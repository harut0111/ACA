"use strict";

function findIndex(array) {

    let res = -1;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            res = i;
            break;
        }
    }
    return res;
}
//test
let val1 = findIndex([2, 12, 15, 48, 64]);
let val2 = findIndex([-9, -4, -4, 3, 12, 4, 5]);
console.log(
    `[2, 12, 15, 48, 64] => ${val1}
    \n[-9, -4, -4, 3, 12, 4, 5] => ${val2}`
);