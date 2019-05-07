"use strict";

function bubbleSort(array) {
    let end = array.length - 1;
    let bool = true;
    while(bool) {
        bool = false;
        debugger;
        for (let i = 0; i < end; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                bool= true;
            }
        }
        if (bool) {end--}
    }
    return array;
}
//test
let arr = [];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor((Math.random() * 51) - 25);
    arr.push(randomNum)
}
console.log(arr);
console.log(bubbleSort(arr));