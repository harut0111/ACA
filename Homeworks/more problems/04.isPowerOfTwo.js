// To check it let's Use Bitwise operators

// N    = 4,  000100
// N-1  = 3,  000011
// N & N-1 -> 000000 // !0 is true

// If a number is a power of 2 then then N & (N-1) will be zero.
// The only exception to above rule is when N is Zero

// // Convert to decimal representation
// const decimalToBinary = (decimal) => decimal.toString(2)
// console.log('decimalToBinary(4)', decimalToBinary(4))

const isPowerOfTwo = (n) => !(n & (n - 1));

/* Test */
const testCases = [
  {
    input: [2],
    expected: true,
  },
  {
    input: [5],
    expected: false,
  },
  //   {
  //     input: [0],
  //     expected: false,
  //   },
];

testCases.forEach((testCase, index) => {
  const result = isPowerOfTwo(...testCase.input);
  const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
  console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
  if (!passed) {
    console.log('Expected:', testCase.expected);
    console.log('Received:', result, '\n');
  }
});
