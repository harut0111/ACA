"use strict";

let arr = [
	{ book: "After Dark", readStatus: true, percent: 70 },
	{ book: "Catcher in the Rye", readStatus: true, percent: 40 },
	{ book: "Animal Farm", readStatus: true, percent: 20 },
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 }
];
// filter objects that have true status
let filtArr = arr.filter((item) => item.readStatus === true);
// sort objects in ascending order by their percent
filtArr.sort((a, b) => a.percent - b.percent);
console.log(filtArr);
