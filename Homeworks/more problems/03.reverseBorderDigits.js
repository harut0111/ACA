/* reverse first and last digits of a number
without using array */

function reverseBorderDigits(n) {
  const log10 = Math.floor(Math.log10(n));
  const pow10 = Math.pow(10, log10);

  const lastDigit = n % 10;
  const firstDigit = Math.floor(n / pow10) % 10;
  const middlePart = (n % pow10) - lastDigit;

  return lastDigit * pow10 + middlePart + firstDigit;
}

/* Test */
const testCases = [
  {
    input: [75229],
    expected: 95227,
  },
  {
    input: [54328],
    expected: 84325,
  },
  {
    input: [8450],
    expected: 458,
  },
];

testCases.forEach((testCase, index) => {
  const result = reverseBorderDigits(...testCase.input);
  const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
  console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
  if (!passed) {
    console.log('Expected:', testCase.expected);
    console.log('Received:', result, '\n');
  }
});
