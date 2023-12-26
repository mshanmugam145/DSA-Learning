// #----------------------------------------------------------------------------------
// Q-5 - 219. Contains Duplicate II - https://leetcode.com/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//Approch - 1:
// var containsNearbyDuplicate = function (nums, k) {
//   let obj = {};
//   let count = nums.length;
//   for (let i = 0; i < count; i++) {
//     if (obj.hasOwnProperty(nums[i]) && Math.abs(i - obj[nums[i]]) <= k) {
//       return true;
//     }
//     obj[nums[i]] = i;
//   }
//   return false;
// };

// Approach - 2: Not completed
// SET + Sliding window
// var containsNearbyDuplicate = function (nums, k) {
//   let j = 0;
//   let count = nums.length;
//   let newSet = [];

//   console.log(newSet);
//   for (let i = 0; i < count; i++) {
//     if (i - j > k) {
//       newSet.splice(j, 1);
//       j++;
//     }

//     let res = newSet.push(nums[i]);

//     let count = 0;
//     for(let i = )
//   }
//   return false;
// };

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

// #------------------------------------------------------------------------------------------
// [LC- 220] - Contains Duplicate III
// https://leetcode.com/problems/contains-duplicate-iii/

// Approach - 1: Brute Force
// 47 / 51 testcases passed
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
// var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
//   let n = nums.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (Math.abs(i - j) <= indexDiff) {
//         if (Math.abs(nums[i] - nums[j]) <= valueDiff) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };

// Approach - 2: Brute Force - Optimized
// 49 / 51 testcases passed
// var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
//   let n = nums.length;
//   for (let i = 0; i < n; i++) {
//     console.log(Math.abs(Math.max(i - indexDiff, 0)));
//     for (let j = Math.abs(Math.max(i - indexDiff, 0)); j < i; j++) {
//       if (Math.abs(i - j) <= indexDiff) {
//         if (Math.abs(nums[i] - nums[j]) <= valueDiff) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };

// Approach - 3: with using TreeSet

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));
