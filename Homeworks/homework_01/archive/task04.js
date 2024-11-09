"use strict";

let num = [367, 1002, 250, 8],
    text = "";

// Method 1
const changeNamber1 = (x) => {
    let a1 = x % 10;
    if (a1 === 0 || a1 === x) {
        return x;
    } else {
        let restDigits = Math.floor(x / 10).toString();
        return +(a1 + restDigits);
    }
}

// Method 2
const changeNamber2 = (x) => {
    let numToStr = x.toString();
    let lastChar = numToStr.charAt(numToStr.length - 1);

    if (lastChar === "0") {
        return x;
    } else {
        let cutStr = numToStr.slice(0,-1);
        let newStr = lastChar.concat(cutStr);
        return +newStr;
    }
}
// console.log(changeNamber2(1222));

for (let i = 0; i < num.length; i++) {
    // Using Method 1
    text += `${num[i]} => ${changeNamber1(num[i])} <br>`;
    //Using Method 2
    // text += `${num[i]} => ${changeNamber2(num[i])} <br>`;
}

console.log(text);
// document.getElementById("p1").innerHTML = text;
