/* ------------------------ Review 22 Nov 2024 (review) --------------------*/

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
/*  QUICK SORT 
    https://www.geeksforgeeks.org/quick-sort-algorithm/
*/
// function quickSort(arr) {
//   // Base case: If the array has 1 or 0 elements, it's already sorted
//   if (arr.length <= 1) return arr;

//   // Step 1: Choose the last element as the pivot
//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];

//   // Step 2: Partition the array into left (smaller) and right (greater)
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]); // Elements smaller than pivot go to 'left'
//     } else {
//       right.push(arr[i]); // Elements larger or equal go to 'right'
//     }
//   }

//   // Step 3: Recursively sort left and right, then combine with the pivot
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// /* Test */
// const testCases = [
//   {
//     input: [6, 8, 4, 12, 78, -55],
//     expected: [-55, 4, 6, 8, 12, 78],
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = quickSort(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* -------------------------------------------------------------------------------------- */
/*  MERGE SORT 
    https://www.geeksforgeeks.org/merge-sort/
*/
// const mergeSort = (arr) => {
//   // Base case: If the array has 1 or 0 elements, it's already sorted
//   if (arr.length <= 1) return arr;

//   // Step 1: Divide the array into two halves
//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   // Step 2: Sort both halves recursively
//   const sortedLeft = mergeSort(left);
//   const sortedRight = mergeSort(right);

//   // Step 3: Merge the sorted halves
//   return merge(sortedLeft, sortedRight);
// };

// function merge(left, right) {
//   const result = [];
//   let i = 0,
//     j = 0;

//   // Compare elements from left and right arrays and add the smaller one to the result
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   // Add any remaining elements from the left array
//   while (i < left.length) {
//     result.push(left[i]);
//     i++;
//   }

//   // Add any remaining elements from the right array
//   while (j < right.length) {
//     result.push(right[j]);
//     j++;
//   }

//   return result;
// }

// /* Test */
// const testCases = [
//   {
//     input: [6, 8, 4, 12, 78, -55],
//     expected: [-55, 4, 6, 8, 12, 78],
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = mergeSort(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });
