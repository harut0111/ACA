/* ------------------------ Homework 4 (review) --------------------*/
/*  12 Nov 2024   */

/* ------------ Problem 1 ------------ */
const filterArray = (inputArray, number) => {
  const result = [];

  for (const element of inputArray) {
    if (element > number) {
      result.push(element);
    }
  }

  return result.length > 0 ? result : 'Such values do not exist.';
};

/* Test */
const testCases = [
  {
    input: [[10, 25, 16, -5, 30, 15, 24], 16],
    expected: [25, 30, 24],
  },
  {
    input: [[1, 1, 2, -3, 0, 8, 4, 0], 9],
    expected: 'Such values do not exist.',
  },
];

testCases.forEach((testCase, index) => {
  const result = filterArray(...testCase.input);
  const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
  console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
  if (!passed) {
    console.log('Expected:', testCase.expected);
    console.log('Received:', result, '\n');
  }
});
