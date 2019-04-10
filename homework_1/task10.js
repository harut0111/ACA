"use strict";

const checkNum = (digit, number) => {
    let strOfDigit = digit.toString();
    let strOfNumber = number.toString();

    if (strOfNumber.search(strOfDigit) === -1) {
        return "No";
    } else {
        return "Yes";
    }
}
console.log(checkNum(120, 4512089));