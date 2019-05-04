"use strict";

function getSum(num) {
    // create arr of number 
    let arrOfDig = Array.from(String(num));
    // calculate the sum of digits
    let res = arrOfDig.reduce((sum, num) => +sum + +num);
    // if sum is not one digit call the same function, else return the sum
    if (String(res).length > 1) {
        return getSum(res);
    }
    return res;
}
console.log(getSum(14));
console.log(getSum(29));
console.log(getSum(999999999999));