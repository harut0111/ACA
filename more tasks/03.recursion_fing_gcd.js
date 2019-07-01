/* Write a JavaScript program to find the greatest 
common divisor (gcd) of two positive numbers. */

"use strict";

//Usign Recursion(My solution).
function findGCD(x = 12, y = 8, i = 0) {
    if (x < y) {
        x += y;
        y = x - y;
        x = x - y;
    }
    if(x % y === 0 && (y + i) % y === 0) return y;
    else {
        i++;
        return findGCD(x, y - 1, i)
    }
}
// console.log(findGCD(12, 18));

/* //Answer
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
// console.log(gcd(2154, 458)); */


/* //Using for loop(My solution).
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