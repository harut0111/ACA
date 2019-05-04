"use strict";

let obj = { a: '1', b: '2', c: '2', d: '2' };

for (const key in obj) {
	// obj doesn't have same property name
	if (obj[obj[key]] === undefined) {
		obj[obj[key]] = key;
		delete obj[key];
	// obj has same property name
	} else {
		obj[obj[key]] = [].concat(obj[obj[key]], key);
		delete obj[key];
	}
}
console.log(obj);