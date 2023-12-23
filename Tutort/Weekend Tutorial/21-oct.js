// LC - 75 - https://leetcode.com/problems/sort-colors/
// Solution - 1:
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//   let n = nums.length;
//   let countZero = 0;
//   let countOne = 0;
//   let countTwo = 0;
//   for (let i = 0; i < n; i++) {
//     if (nums[i] == 0) {
//       ++countZero;
//     }
//     if (nums[i] == 1) {
//       ++countOne;
//     }
//     if (nums[i] == 2) {
//       ++countTwo;
//     }
//   }

//   // 0 = 2, 1 = 2, 2=2
//   for (let i = 0; i < countZero; i++) {
//     nums[i] = 0;
//   }
//   for (let i = 0; i < countOne; i++) {
//     nums[countZero + i] = 1;
//   }
//   for (let i = 0; i < countTwo; i++) {
//     nums[countZero + countOne + i] = 2;
//   }
//   return nums;
// };

//  Solution  - 2;
// var sortColors = function (nums) {
//   let i = 0;
//   let n = nums.length;
//   let start = 0;
//   let end = n - 1;
//   while (i <= end) {
//     //i = 0, end = 5, start = 0
//     // i = 0, end = 4, start = 0
//     // i = 1, end = 4, start = 1
//     // i = 2, end = 4, start = 2
//     // i = 2, end = 3, start = 2
//     // i = 3, end = 3, start = 2
//     // i = 4, end = 3, start = 2
//     if (nums[i] == 2) {
//       swap(nums, i, end);
//       end--; //
//     } else if (nums[i] == 0) {
//       swap(nums, i, start);
//       start++;
//       i++;
//     } else {
//       i++;
//     }
//     console.log(nums); //[0, 0, 2, 1, 1, 2], //[0,0,1,1,2,2]
//   }
//   return nums;
// };

// function swap(nums, a, b) {
//   let temp = nums[a];
//   nums[a] = nums[b];
//   nums[b] = temp;
// }
// console.log(sortColors([2, 0, 2, 1, 1, 0]));

// #----------------------------------------------------------------------------------
// Q-3: [LC - 179 ] https://leetcode.com/problems/largest-number/description/

// Comparator Sort
// function compareSort(arr) {
//   arr.sort((a, b) => {
//     console.log(a, b);
//     if (a < b) return -1;
//   });
//   console.log(arr);
// }
// console.log(compareSort([5, 1, 2]));
// Comparator Sort

/**
 * @param {number[]} nums
 * @return {string}
 */
// var largestNumber = function (nums) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     arr[i] = nums[i].toString();
//   }
//   var res = arr.sort(function (a, b) {
//     // a = 3, b= 30
//     var str1 = a + b; // 330
//     var str2 = b + a; // 303
//     return str1 > str2 ? -1 : 1;
//   });
//   let result = res.join("");
//   return result[0] === "0" ? "0" : result;
// };

// console.log(largestNumber([30, 3]));

// #----------------------------------------------------------------------------------
// Q-4 - 217. Contains Duplicate - https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Approach -1: Brute Force 2 nested loops
// TC: O(N^2) & SC: O(1)
// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// Approach -2: Sorting
// TC: O(NlogN) + O(N) & SC: O(1)
// var containsDuplicate = function (nums) {
//   nums.sort();
//   console.log(nums);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// };

// Approach -3: SET
// TC: O(N) & SC: O(N)
// var containsDuplicate = function (nums) {
//   let newSet = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (newSet.has(nums[i])) {
//       return true;
//     } else {
//       newSet.add(nums[i]);
//     }
//   }
//   return false;
// };

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

