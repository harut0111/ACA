/* Write a JavaScript program to find the greatest 
common divisor (gcd) of two positive numbers. */

"use strict";


/*function findGCD(x = 12, y = 6) {
    if (x < y) {
        x += y;
        y = x - y;
        x = x - y;
    }
    let gcd = y;
    
    if(x % gcd === 0 && gcd % y === 0) return y;
    else {
        gcd--;
        return 
        //NOT FINISHED
    };
}
console.log(findGCD(8, 18));*/

/* //Using for loop
function findGCD(x = 12, y = 9) {
    // debugger;
    if (x < y) {
        x += y;
        y = x - y;
        x = x - y;
    }
    if (x % y === 0) return y;
    else {
        for (let i = y - 1; i > 0; i--) {
            if (x % i === 0 && y % i === 0) return i;
        }
    }
}
console.log(findGCD(12, 18)); */
