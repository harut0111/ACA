"use strict";

//Method 1: Using for loop

function checkPrime(n = 2) {
    let answer = "";
    if (n === 2 || n === 3) answer = "prime";
    else {
        for (let i = 2; i < Math.sqrt(n); i++) {
            if (n % i === 0) {
                answer = "";
                break;
            } else {
                answer = "prime";
            }
        }
    }
    return answer;
}
//test
for(let i = -1; i <= 25; i++){
    console.log(`${i} ${checkPrime(i)}`);
}