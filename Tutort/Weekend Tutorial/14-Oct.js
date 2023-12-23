// Sorting Algorithm

// ----- which is the best sorting algorithm in the world?
// Ans: none

// - Bubble sort
// - insertion sort
// - quick sort
// - merge sort

// Other:
// - heap
// - Radix
// - count
// - bucket

// --------- Bubble Sort ----------------
// function bubbleSort(arr) {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       if (arr[j - 1] > arr[j]) {
//         let temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//     console.log(arr);
//   }
//   return arr;
// }
// console.log(bubbleSort([4, 2, 7, 1]));

// -----------selection Sort ----------------
// function selectionSort(arr) {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       if (arr[j - 1] < arr[j]) {
//         let temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//     console.log(arr);
//   }
//   return arr;
// }
// console.log(selectionSort([4, 2, 7, 1]));

// ----------- Merge Sort ----------------
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));
