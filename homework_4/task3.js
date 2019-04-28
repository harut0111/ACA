"use strict";

function checkDigit(number) {
    debugger;
    if (number === 0) {
        return true;
    }

    let ld = number % 10;
    number =  parseInt(number / 10);
    return checkDigit(number) && (ld % 2 !== 0);
}
//test
let val1 = checkDigit(4211133);
let val2 = checkDigit(7791);
let val3 = checkDigit(5);
console.log(`4211133 => ${val1}\n7791 => ${val2}\n5 => ${val3}`);