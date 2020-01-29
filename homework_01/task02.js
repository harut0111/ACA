"use strict";

let num1 = [3, 18, 7],
    num2 = [14, 2, 21],
    text = "";

const checkDiv = (x, y) => {
    if ((x % y === 0) || (y % x === 0)) {
        return 1;
    } else {
        return 0;
    }
}

for (let i = 0; i < num1.length; i++) {
    text += `${num1[i]},${num2[i]} => ${checkDiv(num1[i], num2[i])}<br>`;
}

console.log(text);
