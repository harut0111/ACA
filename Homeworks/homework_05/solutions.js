/* ------------------------ Homework 5 (review) --------------------*/
/*  14 Nov 2024   */

/* ------------ Problem 1 ------------ */
// const unshiftArrayR = (array, i = 1) => {
//   // base case
//   if (i >= array.length) return [];

//   // recursive case
//   return [array[i], ...unshiftArrayR(array, i + 1)];
// };

// /* Test */
// const testCases = [
//   {
//     input: [6, 78, 'n', 0, 1],

//     expected: [78, 'n', 0, 1],
//   },
//   {
//     input: [5],
//     expected: [],
//   },
//   {
//     input: [],
//     expected: [],
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = unshiftArrayR(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Problem 2 ------------ */
// const flatArrayR = (array, i = 0) => {
//   // base case
//   if (i >= array.length) return [];

//   const currentElement = array[i];

//   // if current element is an array, then we need to take that branch with i = 0
//   // and combine the result with the next element with i+1
//   if (Array.isArray(currentElement)) {
//     return [...flatArrayR(currentElement, 0), ...flatArrayR(array, i + 1)];
//   }
//   // otherwise, we take the current element and move on to the next element
//   return [currentElement, ...flatArrayR(array, i + 1)];
// };

// /* Test */
// const testCases = [
//   {
//     input: [1, [3, 4, [1, 2]], 10],
//     expected: [1, 3, 4, 1, 2, 10],
//   },
//   {
//     input: [14, [1, [[[3, []]], 1], 0]],
//     expected: [14, 1, 3, 1, 0],
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = flatArrayR(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Problem 3 ------------ */
// const findDigitsSumR = (number) => {
//   const arrayOfNumbers = Array.from(number.toString(), (charOfNumber) =>
//     parseInt(charOfNumber)
//   );
//   const sumOfDigits = arrayOfNumbers.reduce((acc, digit) => acc + digit);

//   // base case
//   if (sumOfDigits > -10 && sumOfDigits < 10) return sumOfDigits;

//   // recursive case
//   return findDigitsSum(sumOfDigits);
// };

// /* Test */
// const testCases = [
//   {
//     input: 14,
//     expected: 5,
//   },
//   {
//     input: 29,
//     expected: 2,
//   },
//   {
//     input: 999999999999,
//     expected: 9,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = findDigitsSum(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Problem 4 ------------ */
// const shiftArrayR = (array, shift) => {
//   // base case
//   if (shift === 0) return array;

//   // rotate right
//   if (shift > 0) {
//     const firstElement = array.shift();
//     array.push(firstElement);
//     return shiftArrayR(array, shift - 1);
//   }

//   // rotate left
//   const lastElement = array.pop();
//   array.unshift(lastElement);
//   return shiftArrayR(array, shift + 1);
// };

// /* Test */
// const testCases = [
//   {
//     input: [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3],
//     expected: ['d', 'e', 'f', 'g', 'h', 'a', 'b', 'c'],
//   },
//   {
//     input: [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2],
//     expected: ['g', 'h', 'a', 'b', 'c', 'd', 'e', 'f'],
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = shiftArrayR(...testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });
