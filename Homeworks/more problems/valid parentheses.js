/* check if parentheses layout is valid */

function isValidParentheses(s) {
  while (
    s.length &&
    (s.includes("[]") || s.includes("()") || s.includes("{}"))
  ) {
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
  }
  return s.length < 1;
}

// console.log(isValidParentheses("({([()]{})})")); // True
console.log(isValidParentheses("({([()]{})}[)")); // False
