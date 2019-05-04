"use strict";

function flatArr(arr = []) {
    /* base case check if given element contains array then 
    call flatArr() function (repeat cicle) for that array 
    and returns result, if not returns element (which can be empty array too)*/
    if (arr.length <= 1) {
        if (Array.isArray(arr[0])) {
            return flatArr(arr[0]);
        } else {
            return arr;
        }
    }

    // cut first element
    let fe = arr.splice(0, 1);
    /* call flatArr() function if first element is array then concatenate
    to rest array result. It first element is not array just concatinate
    it to the resutl of rest array.
    */
    if (Array.isArray(fe[0])) {
        arr = flatArr(fe).concat(flatArr(arr));
    } else {
        arr = fe.concat(flatArr(arr));
    }
    // return concatinated array
    return arr;
}
//test
let arr1 = [[], 1, [4, [1, [5, [], 6], 3]], 8, [[88]]];
let arr2 = [14, [1, [[[3, []]], 1], 0]];
console.log(flatArr(arr1));
console.log(flatArr(arr2));