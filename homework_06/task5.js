'use strict';
/*------- WARNING! -------
given array must contain only one element with 'parent: null' value 
and it must be the first element of the array.
*/
function objTree(array) {

    /* at first let's sort objects in ascending order by their parent 
    value and assume  */
    array.sort((a, b) => a.parent - b.parent);

    // empty object which I'am going to build by calling buidTree() function
    let object = {};
    buidTree(object);

    function buidTree(object) {

        // counter for cutting used array elements
        let k = 0;
        // this case is just for an element with 'parent: null' property
        for (const i of array) {
            let ip = i.parent;
            if (ip === null) {
                object[i.id] = {};
                k++;
            }
            // if object has our desirabel property then create obj.new property
            else if (object.hasOwnProperty(ip)) {
                object[ip][i.id] = {};
                k++
            // if it doesn't ... then object is epmty or have properties with an other names
            } else {
                // cut subarray
                array.splice(0, k);
                // create an array of object keys
                let keyArr = Object.keys(object)
                /* call same function(repeat circle) for every property until finding it's parent
                empty object(keyArr.length = 0) means no loop iteration */
                for (const j of keyArr) {
                    buidTree(object[j]);
                }
            } 
        }
    }
    return object;
}
// test
let treeNodes = [
    { parent: null, id: 0},
    { parent: 4, id: 6},
    { parent: 0, id: 2},
    { parent: 0, id: 1},
    { parent: 1, id: 4},
    { parent: 1, id: 3},
    { parent: 2, id: 5}
]

console.log(objTree(treeNodes));


//-------solution 2(by Armine)-----

/* 
function build_obj(arr, parent = null, tree = {}) {
    for (let el of arr) {
        if (el.parent === parent) {
            tree[el.id] = {... build_obj(arr, el.id)}
        }
    }
    return tree;
}

let treenode = [
    {parent: null, id: '0'},
    {parent: '0', id: '1'},
    {parent: '0', id: '2'},
    {parent: '1', id: '3'},
    {parent: '1', id: '4'},
    {parent: '2', id: '5'},
    {parent: '4', id: '6'},
	
];

console.log(build_obj(treenode, parent = null, obj = {}))

 */



 

/* 
//-------method 2--------

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


 */