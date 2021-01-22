"use strict";

function unshift(array = []) {
    // base case returns empty array when array has maximum one element
    if (array.length <= 1) {
        array.pop();
        return array;
    }

    // remove last element
    let le = array.pop();
    // push last elemt to returned array
    unshift(array).push(le);
    // return new array
    return array;
}
// test
console.log('[1,2,3,4,5] --> ' + unshift([1, 2, 3, 4, 5]));
console.log('[5] --> ' + unshift([5]));
console.log('[] --> ' + unshift([5]));