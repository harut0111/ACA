'use strict';
// NOT COMPLETED!
function checkBrackets(array) {
    let arr = [];
    for (const str of array) {
        if (str.match(/[{}[\]()]/g).length % 2) {
            arr.push('No');
        } else {
            arr.push('Yes');
        }
    }
    return arr;
}


let arr = ['[]{}()', '[]]{}', '{[(]}', '{}{[(])}'];
let r = checkBrackets(arr);
console.log(r);

