"use strict";

const calcArea = (defaultText) => {

    let getInput = prompt("Insert Parameters", defaultText)
    let arrOfInp = getInput.split(",");
    if(arrOfInp.length === 3) {
        if (arrOfInp[1] > 0 && arrOfInp[2] > 0) {
            if (arrOfInp[0].match(/triangle/i)) {
                return `Square of the triangle is ${(arrOfInp[1] * arrOfInp [2]) / 2}`;
            } else if (arrOfInp[0].match(/rectangle/i)) {
                return `Square of the rectangle is ${(arrOfInp[1] * arrOfInp [2])}`;
            } else { return "Please insert correct name"; }
        } else { return 'Please enter only positives'; }
    } else { return "Please insert correct parameters";}
}
// console.log(calcArea());

// Testing
let test = ["triangle, 6, 7", "rectangle, 8, 5", "triangle, 0, 5", "12, 23, 45", "12, 36"];
for (let i = 0; i < test.length; i++) {
    console.log(`${test[i]} => ${calcArea(test[i])}`)
}