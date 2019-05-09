"use strict";

//this function always returns one digit number

/* WARNING! the function can leads to 
RangeError(exceed max call stack size)
depend on the size of given number */

function getSum(num) {
    // create arr of number 
    let arrOfDig = Array.from(String(num));
    // calculate the sum of digits
    let res = arrOfDig.reduce((sum, num) => +sum + +num);
    // if sum is not one digit repeat the circle, otherwise return the sum
    if (String(res).length > 1) {
        return getSum(res);
    }
    return res;
}
console.log(getSum(14));
console.log(getSum(29));
console.log(getSum(999999999999));
