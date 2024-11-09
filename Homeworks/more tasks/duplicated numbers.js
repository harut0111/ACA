/* if there are duplicated numbers in an array
then we can use indexOf() method which always 
returns first index of given element. Because indexOf()
method loops all elements its Big(O) notation will be "n^2".
We can use object dot notation (Big(O) is 1) to have "n
for finding duplicates */

// Big(O) is "n^2 "here
const filterDuplicated = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);

// Big(O) is "n" here
function findDuplicates(a) {
  let count = {};
  let dup = [];
  for (let i = 0; i < a.length; i++) {
    // return all duplicates
    // count.hasOwnProperty(a[i]) ? dup.push(a[i]) : (count[a[i]] = null);
    if (count.hasOwnProperty(a[i]) && !dup.includes(a[i])) {
      dup.push(a[i]);
    } else {
      count[a[i]] = null;
    }
  }
  return dup;
}

const arr = [1, 2, 3, 3, 4, 5, 5, 5, 6];
console.log("filterDuplicated(arr)", filterDuplicated(arr));
console.log("findDuplicates(arr)", findDuplicates(arr));



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
