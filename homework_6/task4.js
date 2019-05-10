'use strict';

function myF(str, n, k = 0) {
    let res = '';
    if (k + n >= str.length) {
        return str;
    }
    let subStr = str.substr(0, n)
    return res += subStr + ',' + myF(str.substr(k+1,), n);
}
// test
console.log(myF('495215', 3));
console.log(myF('abcdfghz', 7));