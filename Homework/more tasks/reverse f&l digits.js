/* reverse first and last digits of a number
whithout using array */

function reverse(N) {
  let res = "";
  const lastDig = N % 10 ? N % 10 : "";
  N = Math.floor(N / 10);

  while (N) {
    if (Math.floor(N / 10)) {
      const currentDig = N % 10;
      N = Math.floor(N / 10); 
      res = currentDig + res;
    } else {
      const firstDig = N % 10;
      N = Math.floor(N / 10);
      res = lastDig + res + firstDig;
    }
  }
  return Number(res);
}

console.log(reverse(75220));
