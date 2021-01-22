"use strict";

function checkDigit(number) {
    // reach this case means no even digit met so return true
    if (number === 0) {
        return true;
    }

    // if find even digit return false
    let ld = number % 10;
    if (ld % 2 === 0) { return false;}
    // else cut last digit end repeat the same till base case
    number =  parseInt(number / 10);
    return checkDigit(number);
}
//test
let val1 = checkDigit(4211133);
let val2 = checkDigit(7791);
let val3 = checkDigit(5);
console.log(`4211133 => ${val1}\n7791 => ${val2}\n5 => ${val3}`);
