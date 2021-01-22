"use strict";

function findNums(start, end) {

    let res = [];
    let arrOfDig;

    for (let i = start; i <= end; i++) {
        // create arr of number digits
        arrOfDig = String(i).split("");

        if (arrOfDig.every(checkEven)) {
            res.push(i);
        }
    }
    if (res.length === 0) { return "Such numbers does not exist"; }
    else { return res; }

    // check if all element is even
    function checkEven(number) {
        return +number % 2 === 0;
    }
}
//test
let arg1 = findNums(19, 42);
let arg2 = findNums(99, 199)
console.log(arg1);
console.log(arg2);