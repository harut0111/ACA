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


