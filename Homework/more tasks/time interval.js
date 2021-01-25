function getFibN(n) {
  sequence = [];
  for (let i = 0; i < n; i++) {
    const n2 = sequence[i - 2] ?? i;
    const n1 = sequence[i - 1] ?? i;
    sequence.push(n2 + n1);
  }
  return sequence[n - 1] ?? "pls change number";
}
// console.log('getFibN(n)', getFibN(2))

function Call(n) {
  console.log("getFibN(n)", getFibN(n));
  setTimeout(() => Call(n + 1), 2000);
}
Call(0);

function getPromise(n) {
  console.log("getFibN(n)", getFibN(n));
  const promise = new Promise((res) => setTimeout(() => res(n), 2000));
  promise.then((val) => getPromise(val + 1));
}
getPromise(0);