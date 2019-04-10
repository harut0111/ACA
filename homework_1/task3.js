"use strict";

let num = [3, 17, 100],
    text = "";

const concatNum = (x) => {
    let txt = "",
        sum = 0;
    for (let i = 0; i < 3; i++) {
        txt = txt.concat(x);
        sum += +txt;
    }
    return sum;
}

for (let i = 0; i < num.length; i++) {
    text += `${num[i]} => ${concatNum(num[i])} <br>`;
}

console.log(text);
// document.getElementById("p1").innerHTML = text;