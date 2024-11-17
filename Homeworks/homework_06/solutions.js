/* ------------------------ Homework 6 (review) --------------------*/
/*  17 Nov 2024   */

/* ------------ Problem 1 ------------ */
/* Given an array of integers, find the pair of adjacent 
elements that has the largest product and return that product. */

// const maxProduct = (arr) => {
//   let maxProd = -Infinity;
//   for (let i = 0; i < arr.length - 1; i++) {
//     const currentProd = arr[i] * arr[i + 1];
//     if (currentProd > maxProd) maxProd = currentProd;
//   }
//   return maxProd;
// };

// /* Test */
// const testCases = [
//   {
//     input: [3, 6, -2, -5, 7, 3],
//     expected: 21,
//   },
//   {
//     input: [-1, -2, -3, -4],
//     expected: 12,
//   },
//   {
//     input: [5, 1, 2, 3, 1, 0],
//     expected: 6,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = maxProduct(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Problem 2 ------------ */
/*  Given an array of integers. All numbers are unique. 
Find the count of missing numbers between minimum and 
maximum elements to make integers sequence. */

// const findMissingNumbersCount = (arr = []) => {
//   arr.sort((a, b) => a - b);
//   const firstNum = arr.shift();
//   const lastElement = arr.pop();

//   let count = 0;
//   for (let i = firstNum + 1; i < lastElement; i++) {
//     if (arr.includes(i)) continue;
//     count++;
//   }
//   return count;
// };

// /* Test */
// const testCases = [
//   {
//     input: [3, 7, 1, 9],
//     expected: 5,
//   },
//   {
//     input: [10, 20, 30, 40],
//     expected: 27,
//   },
//   {
//     input: [8, 15, 3, 12],
//     expected: 9,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = findMissingNumbersCount(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });
