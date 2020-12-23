/* Write a function, which receives an array as an
 argument which elements arrays of 	numbers. Find 
 biggest negative number of each array. Return 
 product of that numbers.If there is not any 
 negative number in an array, ignore that one. Check
 that items of the given array are arrays */

"use strict";
function prodInArr(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        //Check that items of the given array are arrays
        if (!Array.isArray(array[i])) { return "Invalid Argument"; }
        // delete elment if it does not contain eny negative number
        else if (array[i].every(checkNeg)) {
            array.splice(i, 1);
            i--;
            if (array.length === 0) { return "No negativ numbers"; }
        }
        // if argument is valid and element containes some negativ numbers
        else { product *= findMaxNeg(array[i]); }
    }
    //retrun function result
    return product;


    // checkNeg() returns TRUE if nummber >= 0 else FALSE
    function checkNeg(num) {
        return num >= 0;
    }
    // findMaxNeg() finds the biggest negative number in array
    function findMaxNeg(array) {
        let maxNeg = -Infinity;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 0 && array[i] > maxNeg) { maxNeg = array[i] }
        }
        return maxNeg;
    }
}
//test
let array1 = [[2, -9, -3, 0], [1, 2], [-4, -11, 0]];
let array2 = [[3, 4], [11, 0], [5, 6, 7, 8]];
let array3 = [1, 2, 3];
console.log(prodInArr(array1));
console.log(prodInArr(array2));
console.log(prodInArr(array3));