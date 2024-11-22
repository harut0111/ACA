const printTriangle = (n = 9) => {
  let d = n - 1;
  let row = '';
  for (let i = d; i >= 0; i--) {
    for (let j = -d; j <= d; j++) {
      if (Math.abs(i) + Math.abs(j) <= d) {
        row += '*';
      } else {
        row += ' ';
      }
    }
    row += '\n';
  }
  return row;
};
console.log(printTriangle(9));
