/* ------------------------ Review 21 Nov 2024 --------------------*/
/* -------------------------------------------------------------------------------------- */
/* Write a JavaScript program to compute the sum of an array of integers.*/

// const sumArray = (arr, i = 0) =>
//   i === arr.length ? 0 : arr[i] + sumArray(arr, i + 1);

// // /* Test */
// const testCases = [
//   {
//     input: [1, 2, 3, 4],
//     expected: 10,
//   },
//   {
//     input: [3, 4, 1, 0],
//     expected: 8,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = sumArray(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* -------------------------------------------------------------------------------------------------------- */
/* Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 */

// const nFactorialR = (n) => (n === 1 ? n : n * nFactorialR(n - 1));

// /* Test */
// const testCases = [
//   {
//     input: [5],
//     expected: 120,
//   },
//   {
//     input: [4],
//     expected: 24,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = nFactorialR(...testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* -------------------------------------------------------------------------------------------------------- */
/* Write a JavaScript program to find the greatest 
common divisor (gcd) of two positive numbers. */

// //Using loop
// const findGCD = (x, y) => {
//   // Hence GCD <= min iterate until min
//   const min = (x + y) / 2;
//   for (let i = min; i >= 1; i--) {
//     if (x % i === 0 && y % i === 0) return i;
//   }
// };
// //Using Recursion
// const findGCDR = (x, y, GCD = (x + y) / 2) => {
//   if (x % GCD === 0 && y % GCD === 0) return GCD;
//   return findGCDR(x, y, GCD - 1);
// };

// /* Test */
// const testCases = [
//   {
//     input: [12, 18],
//     expected: 6,
//   },
//   {
//     input: [8, 4],
//     expected: 4,
//   },
//   {
//     input: [9, 1],
//     expected: 1,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = findGCDR(...testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* -------------------------------------------------------------------------------------------------------- */
/* Write a JavaScript program to get the integers in range (x, y) */

// const getIntegersR = (start, end) => {
//   const currentInt = start + 1;
//   if (currentInt === end) return [];
//   return [currentInt, ...getIntegersR(currentInt, end)];
// };

// /* Test */
// const testCases = [
//   {
//     input: [2, 9],
//     expected: [3, 4, 5, 6, 7, 8],
//   },
//   {
//     input: [4, 8],
//     expected: [5, 6, 7],
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = getIntegersR(...testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });
