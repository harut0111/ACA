"use strict";

function minPosNum(array) {
    // base case check first element and returns -1 if it's negative else returns the element
    if (array.length === 1) {
        if (array[0] >= 0) { return array[0]; } 
        else { return -1; }
    }

    let le = array.pop();
    let f = minPosNum(array);
    
    //both are negative
    if (f < 0 && le < 0) { return -1; }
    // returned value is negative and last element is positive
    else if(f < 0 && le >= 0) { return le; }
    // returned value is positive and last element is negative
    else if(f >= 0 && le < 0) { return f; }
    //both are positive
    else { return (le <= f) ? le:f; }
}
//test
let val1 = minPosNum([56, -9, 87, -23, 0, -105, 55, 1]);
let val2 = minPosNum([45, -9, 15, 5, -78]);
let val3 = minPosNum([-5, -9, -111, -1000, -7]);
console.log(
    `[56, -9, 87, -23, 0, -105, 55, 1] => ${val1}
    \n[45, -9, 15, 5, -78] => ${val2}
    \n[-5, -9, -111, -1000, -7] => ${val3}`
    );
