"use strict";

//Method 1: using recursion
// debugger;
function FibbSeries(n = 10) {
    let fibser = [];
    for (let i = 1; i <= n; i++) {
        fibser.push(FibbNum(i - 1));
    }
    return fibser;
    function FibbNum(n) {
        if (n <= 1) return n;
        else return FibbNum(n-1) + FibbNum(n-2);
    }
}
//test
let arr = [0,1,2,3,7,10];
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} => ${FibbSeries(arr[i])}`);
}

/* 
//Method 2: using foor loop
function FibbSeries(n = 4) {
    let arr = [];
    switch (n) {
        case 0:
            break;
        case 1:
            arr.push(0);
            break;
        case 2:
            arr.push(0,1);
            break;
        default:
            arr.push(0,1);
            for (let i = 0; i < n - 2; i++){
                arr.push(arr[i] + arr[i + 1]);
            }
    }
    return arr;
}
//test
let arr = [0,1,2,3,7,10,];
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} => ${FibbSeries(arr[i])}`);
}
 */


