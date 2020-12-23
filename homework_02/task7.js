"use strict";

// debugger;
function copyIn(array = [], padA = 1, repeat = 2) {
    if (padA > array.length) {
        return "Invalid padding amount";
    }
    let leftSubArr = array.slice(0, padA);
    let rightSubArr = array.slice(array.length - padA);
    for (let i = 0; i < repeat; i++) {
        array.unshift(...leftSubArr);
        array.push(...rightSubArr);
    }
    return array;
}
//test
let arr = [
    { array: [1, 2, 3, 4], padA: 1, repeat: 2 },
    { array: [1, 2, 3, 4], padA: 2, repeat: 1 },
    { array: [1], padA: 1, repeat: 3 },
    { array: [1], padA: 2, repeat: 3 }
];
for (let i = 0; i < arr.length; i++) {
    let array = arr[i].array, padA = arr[i].padA, repeat = arr[i].repeat;
    console.log(`array = ${array}\npadA =${padA}\nrepeat =${repeat}\nresult=> ${copyIn(array, padA, repeat)}`);
}