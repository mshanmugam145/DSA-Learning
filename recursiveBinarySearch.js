function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) return middleIndex;
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, rightIndex - 1);
  } else {
    return search(arr, target, leftIndex + 1, rightIndex);
  }
}

const arra = [-5, 2, 4, 6, 10];
console.log(recursiveBinarySearch(arra, 6));
console.log(recursiveBinarySearch(arra, 2));
console.log(recursiveBinarySearch(arra, 20));
console.log(recursiveBinarySearch([], 20));
