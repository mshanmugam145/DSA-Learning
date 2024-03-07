// --------------------------------------------------------------------------------------------
// https://leetcode.com/problems/most-common-word/description/
// [LC - 819]. Most Common Word
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
// Approach - 1:
// TC: O(N + M + N), SC: O(N)
// var mostCommonWord = function (paragraph, banned) {
//   let str = paragraph.split(" ");
//   let map = {};
//   for (let para of str) {
//     let char1 = para.toLowerCase().trim();
//     let char = char1.replace(/[&\/\\#,+()$~%.'":*!?<>{}]/g, "");
//     if (map[char] != undefined) {
//       map[char] = map[char] + 1;
//     } else {
//       map[char] = 1;
//     }
//   }

//   for (let ban of banned) {
//     delete map[ban];
//   }

//   let result;
//   let count = 0;
//   for (let prop in map) {
//     if (count < map[prop]) {
//       result = prop;
//       count = map[prop];
//     }
//   }
//   return result;
// };

// console.log(
//   mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
//     "hit",
//   ])
// );

// Dynamic Programming

// [0, 1, 1, 2, 3, 5, 8, 13, 21 ...]
//Find the fibonacci
// recursive Solution
// Complexi of recursion --> O(branches ^ depth)
// TC: O(2 ^ n)
// SC: O(1) - In Memory + O(n) - Aux memory memory resursive stack
// function fib(n) {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1 || n == 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(5));

// Using DP
// TC: O(N)
// SC: O(N)
function fibDp(n) {
  const result = new Array(n + 1);
  result[0] = 0;
  result[1] = 1;
  result[2] = 1;
  console.log(result);
  for (let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
}
console.log(fibDp(5));
