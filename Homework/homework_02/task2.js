"use strict";

/* 
//Method 1: using recursion
function FibbNumbers1(n = 10) {
    if (n <= 1) return n;
    else {
        return FibbNumbers1(n - 1) + FibbNumbers1(n - 2);
    }
}
//test
let arr = [0, 2, 10, 20];
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} => ${FibbNumbers1(arr[i])}`);
}
 */


//Method 2: using foor loop
function FibbNumbers2(n = 4) {
    let arr = [0, 1];

    for (let i = 0; i < n; i++){
        arr.push(arr[0] + arr[1]);
        arr.shift();
    }
    return arr[arr.length - 2];
}
//test
let arr = [0, 2, 10, 20];
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} => ${FibbNumbers2(arr[i])}`);
}