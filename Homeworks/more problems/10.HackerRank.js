/* ------------------------ Review 20 Nov 2024 --------------------*/
/* You are given an unordered array consisting of 
consecutive integers [1, 2, 3, ..., n] without any duplicates. 
You are allowed to swap any two elements.
Find the minimum number of swaps required to sort the array in ascending order. */

// function minimumSwaps(arr = []) {
//   const findMin = (arr) => {
//     let min = +Infinity;
//     let index = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//         index = i;
//       }
//     }
//     return { min, index };
//   };

//   let minSwapCount = 0;
//   while (arr.length > 1) {
//     const { min: currentMin, index: currentMinNumIndex } = findMin(arr);
//     if (currentMin < arr[0]) {
//       [arr[currentMinNumIndex]] = [arr[0]];
//       minSwapCount++;
//     }
//     arr.splice(0, 1);
//   }
//   return minSwapCount;
// }

// /* Test */
// const testCases = [
//   {
//     input: [4, 3, 1, 2],
//     expected: 3,
//   },
//   {
//     input: [7, 1, 3, 2, 4, 5, 6],
//     expected: 5,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = minimumSwaps(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* It is New Year's Day and people are in line for the
 Wonderland rollercoaster ride. Each person wears a 
 sticker indicating their initial position in the queue
 from  to . Any person can bribe the person directly in 
 front of them to swap positions, but they still wear 
 their original sticker. One person can bribe at most two others.

 Determine the minimum number of bribes that took place 
 to get to a given queue order. Print the number of bribes,
  or, if anyone has bribed more than two people, print Too chaotic. */

// function minimumBribes(queue) {
//   let totalBribes = 0;

//   for (let i = queue.length - 1; i >= 0; i--) {
//     if (queue[i] - (i + 1) > 2) return 'Too chaotic';

//     // I only need to look 2 positions back since that's the max allowed bribes
//     for (let j = Math.max(0, queue[i] - 2); j < i; j++) {
//       if (queue[j] > queue[i]) totalBribes++;
//     }
//   }

//   return totalBribes;
// }

// /* Test */
// const testCases = [
//   {
//     input: [2, 1, 5, 3, 4],
//     expected: 3,
//   },
//   {
//     input: [5, 1, 2, 3, 7, 8, 6, 4],
//     expected: 'Too chaotic',
//   },
//   {
//     input: [1, 2, 5, 3, 4, 7, 8, 6],
//     expected: 4,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = minimumBribes(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });
