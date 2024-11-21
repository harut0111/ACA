/* check if parentheses layout is valid */

function validParenthesesLayout(s) {
  const parentheses = ['()', '[]', '{}'];
  let anyValidParentheses = true;
  while (s.length && anyValidParentheses) {
    for (const chars of parentheses) {
      s = s.replace(chars, '');
    }
    anyValidParentheses = parentheses.some((item) => s.includes(item));
  }
  return s.length < 1;
}

/* Test */
const testCases = [
  {
    input: ['({([()]{})})'],
    expected: true,
  },
  {
    input: ['({([()]{})}[)'],
    expected: false,
  },
];

testCases.forEach((testCase, index) => {
  const result = validParenthesesLayout(...testCase.input);
  const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
  console.log(`Test case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
  if (!passed) {
    console.log('Expected:', testCase.expected);
    console.log('Received:', result, '\n');
  }
});
