// reverse stiring useing ES6

function reverse(arr) {
  const l = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[l - i]] = [arr[l - i], arr[i]];
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));
