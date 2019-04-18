"use strict";

function mergeSort(array) {
    // debugger;
    let leftPart = array.splice(0, Math.ceil(array.length / 2));
    let rightPart = array;

    if (leftPart.length <= 1 && rightPart.length <= 1) {
        return merge(leftPart, rightPart);
    } else {
        return merge(mergeSort(leftPart), mergeSort(rightPart));
    }

    function merge(leftPart, rightPart) {
        let res = [];
        while(leftPart.length !== 0 && rightPart.length !== 0) {
            if (leftPart[0] < rightPart[0]) {
                res.push(...leftPart.splice(0,1));
            } else {
                res.push(...rightPart.splice(0,1));
            }
        }
        res.push(...leftPart, ...rightPart)
        return res;
    }
}
//test
let arr = [];
for (let i = 0; i < 50; i++) {
    let randomNum = Math.floor((Math.random() * 51) - 25);
    arr.push(randomNum)
}
console.log(mergeSort(arr));
