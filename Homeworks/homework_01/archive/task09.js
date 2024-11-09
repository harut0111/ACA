"use strict";

let n = +prompt();
let i = 0, j = 0;

if ((n % 2 === 0) && (!Math.floor(n / 10))) {
    i++
}
if ((n % 3 === 0) && (n % 10 === 1)) {
    j++
}
console.log(i);
console.log(j);