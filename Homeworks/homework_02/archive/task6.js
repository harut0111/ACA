"use strict";

function getSecondMaxIndex(array = []) {

    let kipArray = [...array];
    return kipArray.indexOf(secondMax(array));

    function secondMax(array) {
        let bool;
        let newarr = [];

        while (newarr.length <= 1) {
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    if (array[i] >= array[j]) {
                        bool = true;
                    } else {
                        bool = false;
                        break;
                    }
                }
                if (bool) {
                    newarr.push(array.splice(i, 1)[0]);
                }
            }
        }
        return newarr[1];
    }
}
//test
let arr = [[23, -98, 0, -456, 12, 8], [-60, 2, 43, -18, 5, -19, 36, 7, 56]];
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} => ${getSecondMaxIndex(arr[i])}`);
}