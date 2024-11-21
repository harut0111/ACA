/* Given two numbers, we call them friendly if they consist of exactly the same
digits. For example 121 and 211 are friendly, but 112 and 122 are not friendly.
Given two numbers return "Yes"if they are friendly and "No"otherwise. */

const isFriendly = (n1, n2) => {
  const arr1 = Array.from(String(n1));
  const arr2 = Array.from(String(n2));

  const uniqChars = new Set([...arr1, ...arr2]);

  for (const char of uniqChars) {
    if (arr1.includes(char) && arr2.includes(char)) continue;
    return 'No';
  }
  return 'Yes';
};

/* Test */
const testCases = [
  {
    input: [122, 221221212],
    expected: 'Yes',
  },
  {
    input: [1228, 221221212],
    expected: 'No',
  },
];

testCases.forEach((testCase, index) => {
  const result = isFriendly(...testCase.input);
  const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
  console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
  if (!passed) {
    console.log('Expected:', testCase.expected);
    console.log('Received:', result, '\n');
  }
});
