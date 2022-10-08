function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}
const arr = [75, 85, 90, 95, 100, 80];
insertionSort(arr);
console.log(arr);

//Big-O : O(n^2)
