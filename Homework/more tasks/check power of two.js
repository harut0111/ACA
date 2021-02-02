// How will you check if a number if a power of two or not?

// https://www.ritambhara.in/check-if-number-is-a-power-of-2/#:~:text=If%20log2(n)%20is,power%20of%202%2C%20else%20not.&text=Keep%20dividing%20the%20number%20by,is%20a%20power%20of%202.

// Use Bitwise operators

// N    = 4,  000100
// N-1  = 3,  000011

// const decimalToBinary = (decimal) => decimal.toString(2)
// console.log('decimalToBinary(4)', decimalToBinary(4))

// If a number is a power of 2 then then N & (N-1) will be zero.
// The only exception to above rule is when N is Zero

const isPowerOfTwo = (N) => !(N & (N - 1));

for (let i = 1; i <= 10; i++) {
    console.log(`isPowerOfTwo(${i})`, isPowerOfTwo(i));
}
