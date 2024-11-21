
function bubbleSort(arr) {
  let end = arr.length - 1;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    swapped && end--; // for optimization 
  }
  return arr;
}
//test
let arr = [];
for (let i = 0; i < 10; i++) {
  let randomNum = Math.floor(Math.random() * 51 - 25);
  arr.push(randomNum);
}
console.log(arr);
console.log(bubbleSort(arr));

/*  To calculate the complexity of the bubble sort algorithm, it 
is useful to determine how many comparisons each loop performs.
For each element in the array, bubble sort does n-1 comparisons.
In big O notation, bubble sort performs O(n) comparisons. 
Because the array contains nn elements, it has an O(n) number of elements.
In other words, bubble sort performs O(n) operations on an O(n)
number of elements, leading to a total running time of O(n^2)   */

// https://brilliant.org/wiki/bubble-sort/#:~:text=1%20return%20array-,Complexity%20of%20Bubble%20Sort,)%20O(n)%20comparisons.
