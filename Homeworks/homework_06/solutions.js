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

/* ------------ Problem 3 ------------ */
/*  Convert a long phrase to its acronym. */

// const phraseToAcronym = (phrase = '') => {
//   const arrayOfWords = phrase.split(' ');

//   return arrayOfWords.reduce((acc, word) => {
//     const firstChar = word[0];
//     acc += firstChar.toUpperCase();
//     return acc;
//   }, '');
// };

// /* Test */
// const testCases = [
//   {
//     input: 'Prisoner of War',
//     expected: 'POW',
//   },
//   {
//     input: 'Have a good night',
//     expected: 'HAGN',
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = phraseToAcronym(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Problem 4 ------------ */
/* Given a string of digits, output all the contiguous 
substrings of length n in that string. */

// const getAllSubstringsR = (str = '', n = 0, i = 0, charSubstrings = []) => {
//   //base case
//   if (n > str.length) return charSubstrings;

//   const currentContiguousSubString = str.slice(i, n);
//   charSubstrings.push(currentContiguousSubString);
//   // recursive case
//   return getAllSubstringsR(str, n + 1, i + 1, charSubstrings);
// };

// /* Test */
// const testCases = [
//   {
//     input: ['495215', 3],
//     expected: ['495', '952', '521', '215'],
//   },
//   {
//     input: ['abcdfghz', 7],
//     expected: ['abcdfgh', 'bcdfghz'],
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = getAllSubstringsR(...testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Problem 4 ------------ */
/* Create a function that builds a tree like object given an
 array with object which contains parent and id properties. */

// /*
//  Solution: Iterative (nodeMap)
//  Time Complexity: O(n)
//  Space Complexity: O(n)
//  Comments: Best for large datasets due to its linear
//  complexity and efficient use of a lookup map.
//  */
// const buildTree = (nodes) => {
//   const tree = {};
//   const nodeMap = {};

//   // Initialize map for each node
//   nodes.forEach(({ id }) => {
//     nodeMap[id] = {};
//   });

//   nodes.forEach(({ parent, id }) => {
//     if (parent === null) {
//       // Root node
//       tree[id] = nodeMap[id];
//     } else {
//       // Append child node to its parent
//       if (!nodeMap[parent]) {
//         nodeMap[parent] = {};
//       }
//       nodeMap[parent][id] = nodeMap[id];
//     }
//   });

//   return tree;
// };

// /*
//  Solution: Recursive
//  Time Complexity: O(n²)
//  Space Complexity: O(h)*
//  Comments: Simpler and cleaner code but slower for
//  large datasets. Better suited for small inputs.
//  */

// const buildTreeR = (arr, parent = null, tree = {}) => {
//   for (let el of arr) {
//     if (el.parent === parent) {
//       tree[el.id] = { ...buildTree(arr, el.id) };
//     }
//   }
//   return tree;
// };

// /* Test */
// const testCases = [
//   {
//     input: [
//       { parent: null, id: 0 },
//       { parent: 0, id: 1 },
//       { parent: 0, id: 2 },
//       { parent: 1, id: 3 },
//       { parent: 1, id: 4 },
//       { parent: 2, id: 5 },
//       { parent: 4, id: 6 },
//     ],
//     expected: { 0: { 1: { 3: {}, 4: { 6: {} } }, 2: { 5: {} } } },
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = buildTree(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });
