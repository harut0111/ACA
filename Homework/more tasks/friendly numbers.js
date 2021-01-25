/* Given two numbers, we call them friendly if they consist of exactly the same
digits. For example 121 and 211 are friendly, but 112 and 122 are not friendly.
Given two numbers return "Yes"if they are friendly and "No"otherwise. */

function isFriendly(n1, n2) {
  const arr1 = Array.from(String(n1));
  const arr2 = Array.from(String(n2));

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const strOfn1 = arr1.join("");
  const strOfn2 = arr2.join("");

  console.log(strOfn1, strOfn2);
  if (strOfn1 === strOfn2) return true;
  return false;
}

console.log(isFriendly(122, 221));
