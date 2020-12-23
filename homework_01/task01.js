"use strict";

let numbers = [123, 35, 70],
    text = "";


for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        text += `${numbers[i]} is even <br>`;
    } else {
        text += `${numbers[i]} is odd <br>`;
    }
}
console.log(text);
// document.getElementById("p1").innerHTML = text;
