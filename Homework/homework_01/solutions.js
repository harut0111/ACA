/* ------------------------ Homework 1 (review) --------------------*/
/*  1 Nov 2024   */

/* ------------ Problem 1 ------------ */
// const input = (number) => {
//   if (number % 2 === 0) {
//     return 'even';
//   }
//   return 'odd';
// };

// const res = determineNumbers(70);
// console.log('res', res);

/* ------------ Problem 2 ------------ */
// const division = (n1, n2) => {
//   if (n1 % n2 === 0 || n2 % n1 === 0) return 1;
//   return 0;
// };

// const input2DArray = [
//   [3, 14],
//   [18, 2],
//   [7, 21],
// ];

// for (const input of input2DArray) {
//   console.log('input', input, division(input[0], input[1]));
// }

/* ------------ Problem 3 ------------ */
// const concatNumbers = (positiveNumber) => {
//   return (
//     3 +
//     +`${positiveNumber}${positiveNumber}` +
//     +`${positiveNumber}${positiveNumber}${positiveNumber}`
//   );

//   //   return (
//   //     3 +
//   //     Number(''.concat(positiveNumber, positiveNumber)) +
//   //     Number(''.concat(positiveNumber, positiveNumber, positiveNumber))
//   //   );
// };

// const inputArray = [3, 17, 100];

// for (const input of inputArray) {
//   console.log('input', input, concatNumbers(input));
// }

/* ------------ Problem 4 ------------ */
// const swapNumbers = (number) => {
//   const lastDigit = number % 10;

//   if (lastDigit === 0 || lastDigit === number) return number;
//   const roundedNumber = Math.floor(number / 10);

//   return +`${lastDigit}${roundedNumber}`;
// };

// const inputArray = [367, 1002, 250, 8];

// for (const input of inputArray) {
//   console.log('input', input, swapNumbers(input));
// }

/* ------------ Problem 5 ------------ */
// const getAverage = (n1, n2, n3, n4, n5) => {
//   const average = (n1 + n2 + n3 + n4 + n5) / 5;
//   return average;
// };

// const inputArray = [
//   [45, -12, 0, 3, -15],
//   [7, 52, -23, 9, -81],
// ];

// for (const input of inputArray) {
//   console.log('input', input, getAverage(...input));
// }

/* ------------ Problem 6 ------------ */
// const sortAscOrder = (...args) => {
//   const numbersArray = [...args];
//   let continueNextIteration = true;
//   while (continueNextIteration) {
//     let swapped = false;
//     for (let i = 0; i < numbersArray.length - 1; i++) {
//       const firstNumber = numbersArray[i];
//       const secondNumber = numbersArray[i + 1];
//       // const [firstNumber, secondNumber] = [numbersArray[i], numbersArray[i + 1]];
//       if (firstNumber > secondNumber) {
//         numbersArray[i] = secondNumber;
//         numbersArray[i + 1] = firstNumber;
//         // [numbersArray[i], numbersArray[i + 1]] = [secondNumber, firstNumber];
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       // no swapped happened
//       continueNextIteration = false;
//     }
//   }
//   return numbersArray;
// };

// const inputArray = [
//   [45, 26, 78],
//   [-23, -456, 0],
// ];

// for (const input of inputArray) {
//   console.log('input -> ', input, 'result->', sortAscOrder(...input));
// }

/* ------------ Problem 7 ------------ */
// const findSign = (...args) => {
//   const inputNumbersArray = args;
//   if (inputNumbersArray.includes(0)) return 'unsigned';

//   let countOfNegativeNumbers = 0;

//   for (const currentNumber of inputNumbersArray) {
//     if (currentNumber < 0) {
//       countOfNegativeNumbers++;
//     }
//   }

//   if (countOfNegativeNumbers % 2 === 0) {
//     return '+';
//   }
//   return '-';
// };

// const inputArray = [
//   [-14, 5, 0],
//   [-8, 9, -6],
//   [4, 19, -2],
// ];

// for (const input of inputArray) {
//   console.log('input -> ', input, 'result->', findSign(...input));
// }

/* ------------ Problem 8 ------------ */
// const solveQuadraticEquations = (a, b, c) => {
//   if (a === 0) {
//     return 'Enter valid constants';
//   }

//   const D = Math.pow(b, 2) - 4 * a * c;

//   if (D < 0) {
//     // no roots
//     return 'Solution does not exists';
//   }

//   if (D === 0) {
//     // 1 root
//     const root = -b / (2 * a);
//     return `Solution is ${root}`;
//   }

//   // D < 0, 2 roots
//   const root1 = (-b - Math.sqrt(D)) / (2 * a);
//   const root2 = (-b + Math.sqrt(D)) / (2 * a);
//   return `Solutions are ${root1} and ${root2}`;
// };

// const inputArray = [
//   [1, 2, 1],
//   [0, 4, -5],
//   [3, -8, 12],
//   [5, -13, 6],
// ];

// for (const input of inputArray) {
//   console.log(
//     'input -> ',
//     input,
//     'result->',
//     solveQuadraticEquations(...input)
//   );
// }

/* ------------ Problem 9 ------------ */
// const rewriteCode = (n) => {
//   let i = 0;
//   let j = 0;

//   if (n % 2 === 0 && !Math.floor(n / 10)) i++;
//   if (n % 3 === 0 && n % 10 === 1) j++;
//   return [i, j];
// };

/* ------------ Problem 10 ------------ */
// const checkDigits = (digit, number) => {
//   // Solution 1 transfer to String and solve
//   //   const stringOfNumber = number.toString();
//   //   const arrayOfCharacters = [...stringOfNumber];
//   //   // const arrayOfCharacters = stringOfNumber.split(''); // using split() builtin function
//   //   const isInclude = arrayOfCharacters.includes(digit.toString());
//   //   return isInclude ? 'Yes' : 'No';

//   // Solution 2 destruct numbers
//   while (number) {
//     const currentDigit = number % 10;
//     if (currentDigit === digit) return 'Yes';
//     number = Math.floor(number / 10);
//   }
//   return 'No';
// };

// const inputArray = [
//   [5, 2463],
//   [4, 6],
//   [8, 45689],
// ];

// for (const input of inputArray) {
//   console.log('input -> ', input, 'result->', checkDigits(...input));
// }

/* ------------ Problem 11 ------------ */
// const reverseEdgeDigits = (number) => {
//   // converting to string is easer solution
//   //   const strOfNum = number.toString();
//   //   const l = strOfNum.length;
//   //   if (l === 1) return number;
//   //   const reversedStr = strOfNum[l - 1] + strOfNum.slice(1, -1) + strOfNum[0];
//   //   return +reversedStr;

//   const countDigits = (n) => {
//     let count = 0;
//     while (n !== 0) {
//       n = Math.floor(n / 10);
//       count++;
//     }
//     return count;
//   };

//   const digitsCount = countDigits(number);
//   // const digitsCount = Math.floor(Math.log10(number)) + 1;
//   // using log10 is the most efficient way to calculate count of digits in number

//   if (digitsCount === 1) return number;

//   const lastDigit = number % 10;
//   const powOfTen = Math.pow(10, digitsCount - 1);
//   const firstDigit = Math.floor(number / powOfTen);
//   const restPart = (number % powOfTen) - lastDigit;
//   return lastDigit * powOfTen + restPart + firstDigit;
// };

// const inputArray = [2, 456, 13, 895796];

// for (const input of inputArray) {
//   console.log('input -> ', input, 'result->', reverseEdgeDigits(input));
// }

/* ------------ Problem 12 ------------ */
// const computeArea = (shapeName, a, b) => {
//   if (a <= 0 || b <= 0) return 'Please enter only positives';
//   return shapeName === 'triangle' ? (a / 2) * b : (shapeArea = a * b);
// };

// const inputArray = [
//   ['triangle', 6, 7],
//   ['rectangle', 8, 5],
//   ['triangle', 0, 5],
// ];

// for (const input of inputArray) {
//   console.log('input -> ', input, 'result->', computeArea(...input));
// }

/* ------------ Problem 13 ------------ */
// const findDifference = (num) => {
//   let maxNumber = -Infinity;
//   let minNumber = Infinity;
//   while (num) {
//     const currentDigit = num % 10;
//     num = Math.floor(num / 10);

//     if (currentDigit > maxNumber) maxNumber = currentDigit;
//     if (currentDigit < minNumber) minNumber = currentDigit;
//   }

//   return maxNumber - minNumber;
// };

// const inputArray = [5, 152, 4593653];
// for (const input of inputArray) {
//   console.log('input -> ', input, 'result->', findDifference(input));
// }
