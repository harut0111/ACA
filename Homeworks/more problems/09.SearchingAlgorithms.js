/* ------------------------ Review 22 Nov 2024 (review) --------------------*/

/* -------------------------------------------------------------------------------------- */
/*  BINARY SEARCH  
    https://www.geeksforgeeks.org/binary-search/
*/
// const binarySearch = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return mid; // Target found at index mid
//     } else if (arr[mid] < target) {
//       left = mid + 1; // Search in the right half
//     } else {
//       right = mid - 1; // Search in the left half
//     }
//   }

//   return -1; // Target not found
// };

// /* Test */
// const testCases = [
//   {
//     input: [[1, 3, 5, 8, 12, 16], 16],
//     expected: 5,
//   },
//   {
//     input: [[1, 3, 5, 8, 12, 16], 111],
//     expected: -1,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = binarySearch(...testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });
