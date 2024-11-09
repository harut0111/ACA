"use strict";

const reversBorderDigits = (num) => {

    let absNum = Math.abs(num);
    let arrOfNum = ("" + absNum).split("");
    let temp = arrOfNum[0];

    arrOfNum[0] = arrOfNum[arrOfNum.length - 1];
    arrOfNum[arrOfNum.length - 1] = temp;

    if (num < 0) {
        return +("-" + arrOfNum.join(""));
    } else {
        return +arrOfNum.join("");
    }
}
// Testing
let test = [-46, -13, 0, 24, 89]
for (let i = 0; i < test.length; i++) {
    console.log(`${test[i]} => ${reversBorderDigits(test[i])}`)
}