"use strict";

function bubbleSort(array) {
    let end = array.length - 1;
    let bool = true;
    while(bool) {
        bool = false;
        debugger;
        for (let i = 0; i < end; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                bool= true;
            }
        }
        if (bool) {end--}
    }
    return array;
}
//test
let arr = [];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor((Math.random() * 51) - 25);
    arr.push(randomNum)
}
console.log(arr);
console.log(bubbleSort(arr));


/*  To calculate the complexity of the bubble sort algorithm, it 
is useful to determine how many comparisons each loop performs.
For each element in the array, bubble sort does n-1n−1 comparisons.
In big O notation, bubble sort performs O(n)O(n) comparisons. 
Because the array contains nn elements, it has an O(n)O(n) number of elements.
In other words, bubble sort performs O(n)O(n) operations on an O(n)O(n) 
number of elements, leading to a total running time of O(n^2)   */ 

// https://brilliant.org/wiki/bubble-sort/#:~:text=1%20return%20array-,Complexity%20of%20Bubble%20Sort,)%20O(n)%20comparisons.