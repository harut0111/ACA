/* Write a JavaScript program to get the integers in range (x, y).

Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
 */

"use strict";

function findIntgers(start, end) {
    if(end - 1 === start) {
        return [];
    }
    else { 
        let arr = findIntgers(start, end - 1);
        arr.push(end - 1);
        return arr;
    }
}
console.log(findIntgers(5,24));