const generateRandomInts = (min, max, length = 10) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(randomValue);
  }
  return result;
};

console.log(generateRandomInts(50, 65, 15));
