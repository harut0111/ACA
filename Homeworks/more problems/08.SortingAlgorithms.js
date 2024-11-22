/* ------------------------ Review 22 Nov 2024 (review) --------------------*/

/*  SELECTION SORT 
    https://www.geeksforgeeks.org/selection-sort-algorithm-2/
*/
// const findMin = (arr) => {
//   let min = +Infinity;
//   for (const el of arr) {
//     if (el < min) {
//       min = el;
//     }
//   }
//   return min;
// };

// const selectSort = (arr) => {
//   const sortedArr = [];
//   while (arr.length) {
//     // const currentMin = Math.min(...arr);
//     const currentMin = findMin(arr);
//     sortedArr.push(currentMin);
//     arr.splice(arr.indexOf(currentMin), 1);
//   }
//   return sortedArr;
// };

// /* Test */
// const testCases = [
//   {
//     input: [6, 4, 8, 12, 78, -55],
//     expected: [-55, 4, 6, 8, 12, 78],
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = selectSort(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* -------------------------------------------------------------------------------------- */
/*  BUBLE SORT 
    https://www.geeksforgeeks.org/bubble-sort-algorithm/
*/
// const bubbleSort = (arr) => {
//   let swap = true;
//   while (swap) {
//     swap = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swap = true;
//       }
//     }
//   }
//   return arr;
// };

// /* Test */
// const testCases = [
//   {
//     input: [6, 4, 8, 12, 78, -55],
//     expected: [-55, 4, 6, 8, 12, 78],
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = bubbleSort(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* -------------------------------------------------------------------------------------- */
/*  BUBLE SORT 
    https://www.geeksforgeeks.org/bubble-sort-algorithm/
*/

/* -------------------------------------------------------------------------------------- */
