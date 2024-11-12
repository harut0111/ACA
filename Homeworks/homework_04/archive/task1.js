"use strict";
function checkNum(array, number) {
    debugger;
    let res = array.filter(check);
    if (res.length === 0) {
        return "Such values do not exist";
    } else {
        return res;
    }
    // check if array element is greater than given number
    function check(n) {
        return n > number;
    }
}
//test
let arg1 = checkNum([10, 25, 16, -5, 30, 15, 24], 16);
let arg2 = checkNum([1, 1, 2, -3, 0, 8, 4, 0], 9);
console.log(`${arg1}\n${arg2}`);