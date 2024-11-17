'use strict';

function acronym(string) {
    let arrOfStr = string.split(' ');
    let res = '';
    for (let i = 0; i < arrOfStr.length; i++) {
        res += arrOfStr[i][0].toUpperCase();
    }
    return res;
}
// test
let s1 = "Prisoner of War";
let s2 = "Have a good night";
console.log(acronym(s1));
console.log(acronym(s2));