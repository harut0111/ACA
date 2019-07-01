/* Write a JavaScript program to calculate the factorial of a number.

In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 */

"use strict";

function calcFactorial(n = 5) {
    if(n === 1) { return n }
    else { return n * calcFactorial(n - 1) }
}
// console.log(calcFactorial(4));