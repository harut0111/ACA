"use strict";

//Method 1: Using Regular Expression

const checkSign = (n1, n2, n3) => {

    let str1 = n1.toString()
    let str2 = n2.toString();
    let str3 = n3.toString();
    let fullStr = " ".concat(str1, " ", str2, " ", str3, " ");
    let matchZero = fullStr.match(/ 0 /g);
    let matchMinus = fullStr.match(/ -/g);
    // console.log(fullStr);

    if (matchZero === null) {
        if (matchMinus === null) {
            return "+";
        } else {
            if ((matchMinus.length - 1) % 2 === 0) {
                return "-";
            } else {
                return "+";
            }
        }
    } else {
        return "unsigned";
    }
}

console.log(checkSign(60, -0, -50));

