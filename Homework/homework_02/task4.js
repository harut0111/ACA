"use strict";

//Method 1: loop
function div(n = 10) {
    if (n === 0) {
        return "Cannot calculate"
    } else if (!Math.floor(n/10)) {
        return "Quotient is 1";
    } else{
        return sumDig(n);
    }

    function sumDig(n) {
        let sum = 0;
        let product = 1;
        let arrOfn = ("" + n).split("");
        for (let i = 0; i < arrOfn.length; i++) {
            sum += +arrOfn[i];
            product *= +arrOfn[i]
        }
        if (product % sum === 0) {
            return `Quotient is ${product/sum}`;
        } else{
            return `Remainder is ${product % sum}`;
        }
    }
}
//test
let arr = [1233,5,0,455];
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} => ${div(arr[i])}`);
}