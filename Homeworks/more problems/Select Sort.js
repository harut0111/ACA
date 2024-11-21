"use strict";

const findMin = (arr) => {
  let min = +Infinity;
  for (const el of arr) {
    if (el < min) {
      min = el;
    }
  }
  return min;
};

const selectSort = (arr) => {
  const sortedArr = [];
  while (arr.length) {
    // const currentMin = Math.min(...arr);
    const currentMin = findMin(arr);
    sortedArr.push(currentMin);
    arr.splice(arr.indexOf(currentMin, 1));
  }
  return sortedArr;
};
const arr = [6, 5, 4, 3, 2, 1, -55];
console.log("selectSort(arr)", selectSort(arr));
console.log("findMin(arr)", findMin(arr));
