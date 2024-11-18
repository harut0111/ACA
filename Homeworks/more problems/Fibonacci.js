function FibSequence(n) {
    sequence = [];
    for (let i = 0; i < n; i++) {
        const n2 = sequence[i-2] ?? i
        const n1 = sequence[i-1] ?? i
        sequence.push(n2 + n1)
    }
    return sequence;
}
console.log('FibSequence(n)', FibSequence(10))
        
        
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
// same in one row
// const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

console.log("fib(10)", fib(6));
