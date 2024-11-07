/* ------------------------ Homework 2 (review) --------------------*/
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

/* ------------ Task 3 ------------ */

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

/* ------------ Task 4 ------------ */

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
