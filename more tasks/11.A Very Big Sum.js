const getSum = (num1, num2) => {
    const num1Array = num1.toString().split("");
    const num2Array = num2.toString().split("");
    num1Array.reverse();
    num2Array.reverse();
    const longestArray = Math.max(num1Array.length, num2Array.length);
  
    let tempDigit = 0;
    const sumDigits = [];
    for (let i = 0; i < longestArray; i++) {
      const num1 = Number(num1Array[i]) || 0;
      const num2 = Number(num2Array[i]) || 0;
      const currentSum = num1 + num2 + tempDigit;
      tempDigit = 0;
      if (currentSum >= 10 && i !== longestArray - 1) {
        tempDigit = Math.floor(currentSum / 10);
        sumDigits.unshift(currentSum % 10);
        continue;
      }
      sumDigits.unshift(currentSum);
    }
    return Number(sumDigits.join(""));
  };
  
  const sumNumbers = (arr = []) => {
      while (arr.length > 1) {
          const currentNumbers = arr.splice(0, 2)
          const currentSum = getSum(currentNumbers[0], currentNumbers[1])
          arr.push(currentSum)
          if(arr.length === 1 ) return arr[0]
      }
  }
  
  const num_list = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
  const res = sumNumbers(num_list)
  console.log('res', res)