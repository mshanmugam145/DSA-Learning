function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

let arr = [11, 2, 6, 3, 4, 25, 61];
console.log(linearSearch(arr, 11));
console.log(linearSearch(arr, 4));
console.log(linearSearch(arr, 35));
console.log(linearSearch(arr, 2));
// Big-O : O(n)
