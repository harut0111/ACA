// check if number is prime
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// generate 1-100 prime numbers
const prime = [];
for (let i = -1; i <= 100; i++) {
  if (isPrime(i)) prime.push(i);
}
console.log(prime);

// The following is a simple primality test in Python code using the
//  simple 6k ± 1 optimization mentioned earlier. More sophisticated
//  methods described below are much faster for large n.
// https://en.wikipedia.org/wiki/Primality_test

// def is_prime(n: int) -> bool:
//     """Primality test using 6k+-1 optimization."""
//     if n <= 3:
//         return n > 1
//     if n % 2 == 0 or n % 3 == 0:
//         return False
//     i = 5
//     while i ** 2 <= n:
//         if n % i == 0 or n % (i + 2) == 0:
//             return False
//         i += 6
//     return True
