/* -------> Calculate number of digits in a number

    Math.floor(Math.log10(num)) + 1
    e.g., 234 has 3 digits: Math.log10(234) ≈ 2.37, floor + 1 = 3
    Math.log10(100) is equal to 10^2 and +1 will be 3
*/

/* -------> Number to Array of digits

   const arrOfDigits = Array.from(currentNum.toString(), (digit) => +digit);
   e.g., 12345 -> ['1', '2', '3', '4', '5'] -> [1, 2, 3, 4, 5]
*/

/* -------> if you need to check any condition on iterable things 

   arrOfDigits.every((digit) => digit % 2 === 0)
*/
