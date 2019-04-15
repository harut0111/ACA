"use strict";

function printX(size = 8) {
    let start = -size / 2;
    let end = -start;
    let txt = "";
    
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            if (
                 Math.abs(i) === Math.abs(j) || i === start ||
                 i === end || j === start || j === end
            ) { txt += "*"; }
            else { txt += " "; }
        }
        txt += "\n";
    }
    return txt;
}
//test
console.log(printX(18));