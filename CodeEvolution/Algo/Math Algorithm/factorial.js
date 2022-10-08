function factorial(n) {
  let res = 1;
  n === 0 && res;
  for (let i = n; i > 1; i--) {
    res *= i;
  }
  return res;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
