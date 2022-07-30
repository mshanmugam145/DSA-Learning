function fibonacci(n) {
  var len = [0, 1]; //O(1)
  for (let i = 2; i < n; i++) {
    //O(n)
    var newVal = len[i - 1] + len[i - 2]; //O(1)
    len.push(newVal); //O(1)
  }
  return len;
}
console.log(fibonacci(7));

// Big-O --> O(n)
