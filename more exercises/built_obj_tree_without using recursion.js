"use strict";

function buildTree(array) {
    let obj = {};

    // get array of gen
    let arrOfGen = buildGen(array);

    let arrOfSta = [];
    // build statements
    for (const item of arrOfGen) {
        let txt = 'obj';
        for (const i of item) {
            txt += `[${i}]`;
        }
        txt += ' = {};';
        arrOfSta.push(txt);
    }

    // eval statements
    for (const item of arrOfSta) {

        eval(item);
    };
    // build array of gen
    function buildGen(array = []) {
        let arr = [];
        for (const obj of array) {

            let p = obj.parent;
            let id = obj.id;
            
            if (p === null) {
                arr.push([id]);
            } else {
                for (let i = 0; i < arr.length; i++) {
                    let index = arr[i].indexOf(p);
                    if (index !== -1) {
                        let t = [...arr[i]];
                        t.splice(index + 1, 0, id);
                        arr.push(t);
                        break;
                    }
                }
            }
        }
        return arr;
    }
    return obj;
}
// test
let treeNodes = [
    { parent: null, id: 0},
    { parent: 0, id: 1},
    { parent: 0, id: 2},
    { parent: 1, id: 3},
    { parent: 1, id: 4},
    { parent: 2, id: 5},
    { parent: 4, id: 6},
];
console.log(buildTree(treeNodes));