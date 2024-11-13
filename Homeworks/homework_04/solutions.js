/* ------------------------ Homework 4 (review) --------------------*/
/*  12 Nov 2024   */

/* ------------ Problem 1 ------------ */
// const filterArray = (inputArray, number) => {
//   const result = [];

//   for (const element of inputArray) {
//     if (element > number) {
//       result.push(element);
//     }
//   }

//   return result.length > 0 ? result : 'Such values do not exist.';
// };

// /* Test */
// const testCases = [
//   {
//     input: [[10, 25, 16, -5, 30, 15, 24], 16],
//     expected: [25, 30, 24],
//   },
//   {
//     input: [[1, 1, 2, -3, 0, 8, 4, 0], 9],
//     expected: 'Such values do not exist.',
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = filterArray(...testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Problem 2 ------------ */

/* For performance-sensitive applications, especially when handling large ranges, 
the mathematical solution is the better choice. It’s more efficient in both time 
and memory. However, if the range of numbers is small and code readability is a 
priority, the string-based solution can be a reasonable choice. */

/* String-Based Solution */
// const filterEvenDigitNumbers = (startNum, endNum) => {
//   const result = [];
//   for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
//     const arrOfDigits = Array.from(currentNum.toString(), (digit) => +digit);
//     const isAllEven = arrOfDigits.every((digit) => digit % 2 === 0);

//     if (isAllEven) {
//       result.push(currentNum);
//     }
//   }

//   return result.length > 0 ? result.join(',') : 'Such numbers does not exist.';

//   /* there is an improvement that can be made here: e.g
//   in case of 101 for the next number we don't need to check 102, 103, 104, ...
//   but rather 200, 201, 202, ... . Check that improvement in the next solution */
// };

/* Non-String (Mathematical) Solution */
// const filterEvenDigitNumbers = (startNumber, endNumber) => {
//   const result = [];

//   // Iterate through numbers, with potential jumps in iteration
//   forLoop: for (let num = startNumber; num <= endNumber; ) {
//     // Calculate number of digits in current number
//     // e.g., 234 has 3 digits: Math.log10(234) ≈ 2.37, floor + 1 = 3
//     const digitCount = Math.floor(Math.log10(num)) + 1;

//     // Iterate through each digit position from left to right
//     for (let pos = digitCount; pos > 0; pos--) {
//       // Extract digits up to current position
//       // e.g., for 234 and pos=2: Math.floor(234/10¹) = 23
//       const truncatedNum = Math.floor(num / Math.pow(10, pos - 1));

//       // Get the rightmost digit of truncated number
//       // e.g., 23 % 10 = 3
//       const digit = truncatedNum % 10;

//       // If digit is odd, jump to next number with even digit at this position
//       if (digit % 2 !== 0) {
//         // Calculate position value (e.g., 100 for hundreds)
//         const posValue = Math.pow(10, pos - 1);

//         // Jump to next number that would have even digit at current position
//         // e.g., for 324 at hundreds position: (3 * 100) + 100 = 400
//         const nextNum = truncatedNum * posValue + posValue;
//         num = nextNum;

//         continue forLoop;
//       }
//     }

//     // if this row is reached, it means that all digits are even
//     result.push(num);

//     // next even number should be at least 2 units greater than current
//     num += 2;
//   }

//   return result.length > 0 ? result.join(',') : 'Such numbers does not exist.';
// };

// /* Test */
// const testCases = [
//   {
//     input: [19, 42],
//     expected: '20,22,24,26,28,40,42',
//   },
//   {
//     input: [99, 199],
//     expected: 'Such numbers does not exist.',
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = filterEvenDigitNumbers(...testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Problem 3 ------------ */
// const checkAllOddDigitsR = (number) => {
//   if (number <= 0) return true;
//   const lastDigit = number % 10;
//   if (lastDigit % 2 === 0) return false;
//   return checkAllOddDigitsR(Math.floor(number / 10));
// };

// /* Test */
// const testCases = [
//   {
//     input: 4211133,
//     expected: false,
//   },
//   {
//     input: [7791],
//     expected: true,
//   },
//   {
//     input: [5],
//     expected: true,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = checkAllOddDigitsR(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Problem 4 ------------ */

// const findMinPositiveR = (array = [], index = 0, minNum = Infinity) => {
//   // base case
//   if (index === array.length) {
//     return minNum === Infinity ? -1 : minNum;
//   }

//   // recursive case
//   const currentNum = array[index];
//   if (currentNum >= 0 && currentNum < minNum) {
//     minNum = currentNum;
//   }

//   return findMinPositiveR(array, index + 1, minNum);
// };

// /* Test */
// const testCases = [
//   {
//     input: [56, -9, 87, -23, 0, -105, 55, 1],
//     expected: 0,
//   },
//   {
//     input: [45, -9, 15, 5, -78],
//     expected: 5,
//   },
//   {
//     input: [-5, -9, -111, -1000, -7],
//     expected: -1,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = findMinPositiveR(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });

/* ------------ Problem 5 ------------ */

// const findSortingIndex = (array = []) => {
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < array[i - 1]) return i;
//   }
//   return -1;
// };

// /* Test */
// const testCases = [
//   {
//     input: [2, 12, 15, 48, 64],
//     expected: -1,
//   },
//   {
//     input: [-9, -4, -4, 3, 12, 4, 5],
//     expected: 5,
//   },
// ];

// testCases.forEach((testCase, index) => {
//   const result = findSortingIndex(testCase.input);
//   const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
//   console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
//   if (!passed) {
//     console.log('Expected:', testCase.expected);
//     console.log('Received:', result, '\n');
//   }
// });
