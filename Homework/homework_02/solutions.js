/* ------------------------ Homework 2 (review) --------------------*/
/*  4 Nov 2024   */

/* ------------ Problem 1 ------------ */
// const detectPrimeNumber = (n) => {
//   if (n < 5) {
//     return [2, 3].includes(n) ? 'yes' : 'no';
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return 'no';
//     }
//   }
//   return 'yes';
// };

// for (let i = 2; i < 50; i++) {
//   const result = detectPrimeNumber(i);
//   console.log(i, result);
// }

/* ------------ Problem 2 ------------ */
// const fibonacciNumbers = (n) => {
//   if (n === 0) return n;
//   let a = 0;
//   let b = 1;

//   for (let i = 0; i < n - 1; i++) {
//     [a, b] = [b, b + a];
//   }
//   return b;
// };
// // /* Tests */
// const inputArray = [0, 2, 10, 20, 25];
// const outputArray = [0, 1, 55, 6765, 75025];

// for (let i = 0; i < inputArray.length; i++) {
//   const result = fibonacciNumbers(inputArray[i]);
//   const test = result === outputArray[i] ? 'Passed' : 'Failed';
//   console.log(outputArray[i], result, test);
// }

// const fibonacciNumbersRecursive = (n) => {
//   if (n <= 1) return n;
//   const a = fibonacciNumbersRecursive(n - 1);
//   const b = fibonacciNumbersRecursive(n - 2);
//   return a + b;
// };

// console.log('res', fibonacciNumbersRecursive(5));

/* 
--------- Key difference: (!!!DEBUG TO CHECK VERY DETAILED) ---------
Memoization Caches Results: With memoization, the function avoids redundant recursive calls which 
significantly improves performance from O(2ⁿ) to O(n). Each time a new Fibonacci number is calculated, it's stored in 
the memo object. Reduces Recursive Calls: If a value has already been computed (e.g., fibonacciNumbers(3)), it directly returns 
the stored result from memo instead of making further recursive calls. Here is the code (if (n in memo) return memo[n];)
*/

// const fibonacciNumbersRecursiveMemory = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n <= 1) return n;
//   const a = fibonacciNumbersRecursiveMemory(n - 1, memo);
//   const b = fibonacciNumbersRecursiveMemory(n - 2, memo);
//   memo[n] = a + b;
//   return memo[n];
// };

// console.log('res', fibonacciNumbersRecursiveMemory(5));

// const fibSeq = [];
// for (let i = 0; i < 25; i++) {
//   const res = fibonacciNumbersRecursiveMemory(i);
//   fibSeq.push(res);
// }
// console.log('fibSeq', fibSeq);

/* ------------ Problem 3 ------------ */
// const fibonacciSeries = (n) => {
//   const fibonacciSequences = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const sum = fibonacciSequences[i - 1] + fibonacciSequences[i - 2];
//     if (sum > n) break;
//     fibonacciSequences.push(sum);
//   }
//   return fibonacciSequences;
// };

// const inputArray = [7, 45];
// for (const input of inputArray) {
//   console.log('input ->', input, 'result ->', fibonacciSeries(input));
// }

/* ------------ Problem 3 ------------ */
// const fibonacciSeries = (number) => {
//   if (number === 0) return 'Cannot calculate';

//   const getNumDigits = (n) => {
//     const numDigits = [];
//     while (n) {
//       const currentDigit = n % 10;
//       numDigits.unshift(currentDigit);
//       n = Math.floor(n / 10);
//     }
//     return numDigits;
//   };

//   const digitsArray = getNumDigits(number);

//   const sumOfDigits = digitsArray.reduce(
//     (prevNum, currentNum) => prevNum + currentNum,
//     0
//   );
//   const productOfDigits = digitsArray.reduce(
//     (prevNum, currentNum) => prevNum * currentNum,
//     1
//   );

//   if (productOfDigits % sumOfDigits === 0) {
//     return `Quotient is ${productOfDigits / sumOfDigits}`;
//   }

//   return `Remainder is ${productOfDigits % sumOfDigits}`;
// };

/* Test */
// const inputArray = [1233, 5, 0, 455];
// const outputArray = [
//   'Quotient is 2',
//   'Quotient is 1',
//   'Cannot calculate',
//   'Remainder is 2',
// ];

// for (let i = 0; i < inputArray.length; i++) {
//   const result = fibonacciSeries(inputArray[i]);
//   const test = result === outputArray[i] ? 'Passed' : 'Failed';
//   console.log(inputArray[i], result, test);
// }

/* ------------ Problem 4 ------------ */
// const findSecondMax = (numbersArray = []) => {
//   const maxTwoNumbers = [-Infinity, numbersArray[0]];

//   for (let i = 1; i < numbersArray.length; i++) {
//     const currentNumber = numbersArray[i];
//     if (currentNumber <= maxTwoNumbers[0]) continue;

//     if (currentNumber > maxTwoNumbers[0] && currentNumber <= maxTwoNumbers[1]) {
//       maxTwoNumbers.shift();
//       maxTwoNumbers.unshift(currentNumber);
//       continue;
//     }
//     maxTwoNumbers.shift();
//     maxTwoNumbers.push(currentNumber);
//   }

//   return numbersArray.indexOf(maxTwoNumbers[0]);
// };

// /* Test */
// const inputArray = [
//   [23, -98, 0, -456, 12, 8],
//   [-60, 2, 43, -18, 5, -19, 36, 7, 56],
// ];
// const outputArray = [4, 2];

// for (let i = 0; i < inputArray.length; i++) {
//   const result = findSecondMax(inputArray[i]);
//   const test = result === outputArray[i] ? 'Passed' : 'Failed';
//   console.log(outputArray[i], result, test);
// }

/* ------------ Problem 4 ------------ */
// const findSecondMax = (arr = [], padAmount, repeat) => {
//   const leftPad = arr.slice(0, padAmount);
//   const rightPad = arr.slice(-padAmount);

//   for (let i = 0; i < repeat; i++) {
//     arr = [...leftPad, ...arr, ...rightPad];
//   }

//   return arr;
// };

// /* Test */
// const inputArray = [
//   [[1, 2, 3, 4], 1, 3],
//   [[1, 2, 3, 4], 2, 1],
//   [[1], 1, 3],
// ];
// const outputArray = [
//   [1, 1, 1, 1, 2, 3, 4, 4, 4, 4],
//   [1, 2, 1, 2, 3, 4, 3, 4],
//   [1, 1, 1, 1, 1, 1, 1],
// ];

// for (let i = 0; i < inputArray.length; i++) {
//   const result = findSecondMax(...inputArray[i]);
//   const test =
//     JSON.stringify(result) === JSON.stringify(outputArray[i])
//       ? 'Passed'
//       : 'Failed';
//   console.log(test);
// }
