// LC - 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/description/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isIsomorphic = function (s, t) {
//   if (s == t) {
//     return true;
//   }
//   if ((s == null) & (t == null)) {
//     return true;
//   }
//   if (s == null) {
//     return false;
//   }
//   if (t == null) {
//     return false;
//   }
//   if (s.length != t.length) {
//     return false;
//   }

//   let sMap = new Map();
//   let tMap = new Map();

//   for (let i = 0; i < s.length; i++) {
//     let sChar = s[i];
//     let tChar = t[i];
//     if (sMap.has(sChar)) {
//       if (sMap.get(sChar) != tChar) {
//         return false;
//       }
//     } else {
//       sMap.set(sChar, tChar);
//     }

//     if (tMap.has(tChar)) {
//       if (tMap.get(tChar) != sChar) {
//         return false;
//       }
//     } else {
//       tMap.set(tChar, sChar);
//     }
//   }

//   return true;
// };

// console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("foo", "bar"));
// console.log(isIsomorphic("paper", "title"));

// ----------------------------------------------------------------------------------
// https://leetcode.com/problems/longest-consecutive-sequence/description/
// LC- 128. Longest Consecutive Sequence
/**
 * @param {number[]} nums
 * @return {number}
 */
//Approach - 1: Using sort()
// TC: O(NlogN + N) SC: O(1)
// var longestConsecutive = function (nums) {
//   if (nums.length == 0) {
//     return 0;
//   }

//   if (nums.length == 1) {
//     return 1;
//   }

//   let count = 1;
//   nums.sort((a, b) => a - b);
//   let result = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] == nums[i - 1] + 1) {
//       ++count;
//     } else if (nums[i] === nums[i - 1]) {
//       continue;
//     } else {
//       if (count > result) {
//         result = count;
//       }
//       count = 1;
//     }
//   }
//   return Math.max(count, result);
// };

//Approach-2: with contidion
// TC: O(N), SC: O(N)
// var longestConsecutive = function (nums) {
//   if (nums.length == 0) {
//     return 0;
//   }

//   if (nums.length == 1) {
//     return 1;
//   }
//   let set = new Set(nums);
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let left = nums[i] - 1;
//     let right = nums[i] + 1;

//     while (set.delete(left)) {
//       left--;
//     }
//     while (set.delete(right)) {
//       right++;
//     }

//     count = Math.max(count, right - left - 1);

//     if (set.size == 0) {
//       return count;
//     }
//   }
//   return count;
// };
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

// --------------------------------------------------------------------------------------------
// https://leetcode.com/problems/find-the-difference/description/
// LC - 389. Find the Difference

// There is 9 approaches
//1. sort
//2 . 2 map
//3. 1 map
//4. 2 array
//5. 1 array
//6. XOR
//7. sum of ASCII
//8. sum of ASCII with Modulo tricks

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// Approach - 1: sort()
// TC: O(NlogN + NlogN + N) SC: O(1)
// var findTheDifference = function (s, t) {
//   let sArr = s.split("");
//   let tArr = t.split("");
//   sArr.sort();
//   tArr.sort();
//   for (let [index, tchar] of tArr.entries()) {
//     if (tchar != sArr[index]) {
//       return tchar;
//     }
//   }
//   return -1;
// };

var findTheDifference = function (s, t) {
  let sArr = s.split("");
  let tArr = t.split("");
  sArr.sort();
  tArr.sort();
  for (let [index, tchar] of tArr.entries()) {
    if (tchar != sArr[index]) {
      return tchar;
    }
  }
  return -1;
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));


