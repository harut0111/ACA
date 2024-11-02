"use strict";

// Method 1:
let diffMaxMin = (num) => {
    let arrOfNum = ("" + num).split("");
    // console.log(arrOfNum);
    if (arrOfNum.length === 1) {
        return +arrOfNum;
    } else {
        let l = arrOfNum.length
        let Max = -Infinity;
        let Min = Infinity;
        for (let i = 0; i < l; i++) {
            let lastElement = +arrOfNum.pop();
            if (lastElement > Max) {
                Max = lastElement;
            }
            if (lastElement < Min) {
                Min = lastElement;
            }
        }
        return Max - Min;
    }
}
// console.log(diffMaxMin(92812));

// Testing
let test = [5, 152, 4593653];
for (let i = 0; i < test.length; i++) {
    console.log(`${test[i]} => ${diffMaxMin(test[i])}`)
}