"use strict";

function randomNumbers (min, max, length = 10) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor((Math.random() * (max - min + 1))) + min)
    }
    return arr;
}
console.log(randomNumbers(50, 65, 15));