"use strict";

// Method 1 using sort():
const ascending = (n1, n2, n3) => {

    let numArray = [];

    numArray[0] = n1;
    numArray[1] = n2;
    numArray[2] = n3;
    return numArray.sort(function (a, b) { return a - b });
}

// Method 2:

console.log(sortAscendig([0, 12, 4, 8, 5, 1, 25, 78, 95, -54, -1]));
function sortAscendig (array) {
    let bool;
    let newarr = [];

    while(array.length != 0){
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if(array[i] <= array[j]) {
                    bool = true;
                } else{
                    bool = false;
                    break;
                }
            }
            if(bool) {
                newarr.push(array.splice(i,1)[0]);
            }
        }
    }
    return newarr;
}

// console.log(ascending(8, 1, 9));

// Test
// let test = [[45, 26, 78], [-23, -456, 0]];
// for (let i = 0; i < test.length; i++) {
//     let n1 = test[i][0];
//     let n2 = test[i][1];
//     let n3 = test[i][2];
//     console.log(ascending(n1, n2, n3));
// }
