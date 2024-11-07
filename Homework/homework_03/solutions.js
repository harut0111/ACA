/* ------------------------ Homework 3 (review) --------------------*/
/*  4 Nov 2024   */

/* ------------ Task 1 ------------ */
// const frequencyUniqueNumbers = (inputArray) => {
//   const result = {};
//   const countOfNumbers = inputArray.length;
//   for (const num of inputArray) {
//     result[num] = result[num] ? result[num] + 1 : 1;
//   }
//   for (const key in result) {
//     result[key] = result[key] / countOfNumbers;
//   }
//   return result;
// };

// /* Test */
// const testCases = [
//   {
//     input: [1, 1, 2, 2, 3],
//     expected: { 1: 0.4, 2: 0.4, 3: 0.2 },
//   },
//   {
//     input: [4, 4],
//     expected: { 4: 1 },
//   },
//   {
//     input: [1, 2, 3],
//     expected: { 1: 1 / 3, 2: 1 / 3, 3: 1 / 3 },
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = frequencyUniqueNumbers(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result);
//   }
// });

/* ------------ Task 2 ------------ */
// const countOfElements = (inputArray) => {
//   let stringsCount = 0;
//   let numbersCount = 0;
//   for (const element of inputArray) {
//     if (typeof element === 'string') {
//       stringsCount++;
//     } else {
//       numbersCount++;
//     }
//   }
//   return { Numbers: numbersCount, Strings: stringsCount };
// };

// // /* Test */
// const testCases = [
//   {
//     input: [1, '10', 'hi', 2, 3],
//     expected: { Numbers: 3, Strings: 2 },
//   },
//   {
//     input: [1, 4, 'I am a string', '456'],
//     expected: { Numbers: 2, Strings: 2 },
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = countOfElements(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result);
//   }
// });

/* ------------ Task 4 ------------ */

// const findLongestWord = (inputString) => {
//   const words = inputString.split(/[ ,-]+/);
//   let longestWord = '';
//   for (const word of words) {
//     if (word.length >= longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// // /* Test */
// const testCases = [
//   {
//     input: 'A revolution without dancing is a revolution not worth having.',
//     expected: 'revolution',
//   },
//   {
//     input:
//       'Which would be worse - to live as a monster, or to die as a good man?',
//     expected: 'monster',
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = findLongestWord(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result);
//   }
// });

/* ------------ Task 5 ------------ */

// const findLongestUniqueSubstring = (inputString = '') => {
//   let longestSubstring = '';
//   let currentSubstring = '';
//   for (const char of inputString) {
//     if (char === ' ' || currentSubstring.indexOf(char) === -1) {
//       currentSubstring += char;
//       continue;
//     }
//     if (currentSubstring.length >= longestSubstring.length) {
//       longestSubstring = currentSubstring;
//     }
//     const startIndex = currentSubstring.indexOf(char);
//     currentSubstring = currentSubstring.slice(startIndex + 1) + char;
//   }
//   return longestSubstring;
// };

// // /* Test */
// const testCases = [
//   {
//     input:
//       'there are no two words in the english language more harmful than "good job".',
//     expected: 'rmful than "go',
//   },
//   {
//     input: 'parting your soup is not a miracle, bruce.',
//     expected: 'up is not a m',
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = findLongestUniqueSubstring(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Task 6 ------------ */

// const flipSubstrings = (inputString = '') => {
//   let result = '';
//   for (let i = 0; i < inputString.length; i += 3) {
//     // in the last iteration at list one character will be left
//     const firstChar = inputString[i];
//     const secondChar = inputString[i + 1] || '';
//     const thirdChar = inputString[i + 2] || '';
//     if (!secondChar || !thirdChar) {
//       result += firstChar + secondChar + thirdChar;
//       return result;
//     }
//     result += secondChar + thirdChar + firstChar;
//   }
//   return result;
// };

// // /* Test */
// const testCases = [
//   {
//     input: 'dfgjkloyp',
//     expected: 'fgdkljypo',
//   },
//   {
//     input: 'aweyoolp',
//     expected: 'weaooylp',
//   },
//   {
//     input: 'abcd',
//     expected: 'bcad',
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = flipSubstrings(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Task 7 ------------ */

// const findProductOfArraysMax = (inputArray = [[]]) => {
//   const anyNoNAray = inputArray.some((array) => Array.isArray(array));
//   if (!anyNoNAray) return 'Invalid Argument';

//   const anyNoNegatives = inputArray.some((array) => Math.min(...array) < 0);
//   if (!anyNoNegatives) return 'No negatives';

//   let productOfNegativeNumbers = 1;

//   for (const array of inputArray) {
//     const negativeNumbers = array.filter((number) => number < 0);
//     if (negativeNumbers.length) {
//       productOfNegativeNumbers *= Math.max(...negativeNumbers);
//     }
//   }
//   return productOfNegativeNumbers;
// };

// // /* Test */
// const testCases = [
//   {
//     input: [
//       [2, -9, -3, 0],
//       [1, 2],
//       [-4, -11, 0],
//     ],
//     expected: 12,
//   },
//   {
//     input: [
//       [3, 4],
//       [11, 0],
//       [5, 6, 7, 8],
//     ],
//     expected: 'No negatives',
//   },
//   {
//     input: [1, 2, 3],
//     expected: 'Invalid Argument',
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = findProductOfArraysMax(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Task 7 ------------ */

// const getAllCombinations = (inputArray = []) => {
//   //  combinations with O(n²) complexity (My solution)
//   if (inputArray.length <= 3) return inputArray;
//   const result = [];

//   for (let i = 0; i < inputArray.length; i++) {
//     for (let j = i + 2; j < inputArray.length; j++) {
//       result.push([inputArray[i], inputArray[i + 1], inputArray[j]]);
//       result.push([inputArray[i], inputArray[i + 2], inputArray[j + 1]]);
//       result.push([inputArray[i], inputArray[i + 3], inputArray[j + 2]]);
//       result.push([inputArray[i], inputArray[i + 4], inputArray[j + 3]]);
//     }
//   }
//   const cleanResult = result.filter(
//     (array) => !array.some((number) => number === undefined)
//   );
//   return cleanResult;

//   // other solution with O(n³)  complexity
//   // for (let i = 0; i < inputArray.length - 2; i++) {
//   //   for (let j = i + 1; j < inputArray.length - 1; j++) {
//   //     for (let k = j + 1; k < inputArray.length; k++) {
//   //       result.push([inputArray[i], inputArray[j], inputArray[k]]);
//   //     }
//   //   }
//   // }

//   // return result;
// };

// // /* Test */
// const testCases = [
//   {
//     input: [4],
//     expected: [4],
//   },
//   {
//     input: [19, 6],
//     expected: [19, 6],
//   },
//   {
//     input: [5, 9, 23, 0, -2, -1],
//     // need to collate in right order to see the pattern(Check Homework 3.docx)
//     expected: [
//       [5, 9, 23],
//       [5, 23, 0],
//       [5, 0, -2],
//       [5, -2, -1],
//       [5, 9, 0],
//       [5, 23, -2],
//       [5, 0, -1],
//       [5, 9, -2],
//       [5, 23, -1],
//       [5, 9, -1],
//       [9, 23, 0],
//       [9, 0, -2],
//       [9, -2, -1],
//       [9, 23, -2],
//       [9, 0, -1],
//       [9, 23, -1],
//       [23, 0, -2],
//       [23, -2, -1],
//       [23, 0, -1],
//       [0, -2, -1],
//     ],
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = getAllCombinations(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });
