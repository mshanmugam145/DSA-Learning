function cartesianProduct(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

const arr1 = [1, 2]; //m
const arr2 = [9, 8, 7]; //n
console.log(cartesianProduct(arr1, arr2)); // [[1,9], [1,8], [1,7],...]

// Big-O : O(mn);
