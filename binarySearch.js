// Binary search will work only for sorted Array
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) return middleIndex;
    if (arr[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}

const arra = [-5, 2, 4, 6, 10];
console.log(binarySearch(arra, 6));
console.log(binarySearch(arra, 2));
console.log(binarySearch(arra, 20));
console.log(binarySearch([], 20));

// Big-O : n (log(n)
