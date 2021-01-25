/* if there are duplicated numbers in an array
then will be difference numbers for 
indexOf() and lastIndexOf() function. */

function filterDuplicated(arr) {
  const uniqueNum = Array.from(new Set(arr));
  const result = [];
  for (const num of uniqueNum) {
    if (arr.indexOf(num) !== arr.lastIndexOf(num)) {
      result.push(num);
    }
  }
  return result;
}

function filterNonDuplicated(arr) {
  const uniqueNum = Array.from(new Set(arr));
  const result = [];
  for (const num of uniqueNum) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
      result.push(num);
    }
  }
  return result;
}

const arr = [1, 2, 2, 4, 5, 8, 9, 2, 23, 7, 5, 6, 6];
console.log("filterNonDuplicated(arr)", filterNonDuplicated(arr));




// ------------>   another solution using regExp   <-------------
function nonDuplicated(array) {
  const uniqArray = Array.from(new Set(array));
  const result = [];
  const strOfArr = array.join("");
  for (const el of uniqArray) {
    const regExp = new RegExp(el, "gi");
    if (strOfArr.match(regExp).length === 1) {
      result.push(el);
    }
  }
  return result;
}
// console.log(nonDuplicated(arr));
