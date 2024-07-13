// Home Work - 04-Nov
// [Q-7] - https://leetcode.com/problems/fibonacci-number/
// 509. Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Constraints:
// 0 <= n <= 30

/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   const phi = (Math.sqrt(5) + 1) / 2;
//   return Math.round(Math.pow(phi, n) / Math.sqrt(5));
// };
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));

// Solutions:
// 1. Recursion --> Brute force
// TC:O(2^n), SC: O(n)

// 2. DP
// TC:O(n), SC: O(n)

//3. Iteration
// TC:O(n), SC: O(1)

//4. Binets Formula : Mathematical formula
// phi = (sqrt(5) + 1) / 2
// fn(n) = (phi^n) / sqrt(5)
// TC: O(1), SC: O(1)

// Home work
// [Q-8] - https://leetcode.com/problems/n-th-tribonacci-number/description/
// 1137. N-th Tribonacci Number
// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.
// Example 1:
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// Example 2:
// Input: n = 25
// Output: 1389537

// Constraints:
// 0 <= n <= 37

// The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function (n) {
//   let result = new Array(n + 1);
//   result[0] = 0;
//   result[1] = 1;
//   result[2] = 1;
//   for (let i = 3; i <= n; i++) {
//     result[i] = result[i - 1] + result[i - 2] + result[i - 3];
//   }
//   return result[n];
// };

// console.log(tribonacci(3));
// console.log(tribonacci(4));
// console.log(tribonacci(5));

// 1 - Recursion --> Brute Force
// TC: O(3^n) ; SC: O(n)

// 2 - Bottom Up --> The above code
// TC: O(n) ; SC: O(n)

// 2 - top down
// TC: O(n) ; SC: O(n)
/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function (n) {
//   let result = new Array(n + 1);
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   if (n == 2) return 1;
//   return helperFunction(n, result);
// };

// function helperFunction(n, result) {
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   if (n == 2) return 1;
//   if (result[n]) {
//     return result[n];
//   }
//   return (result[n] =
//     helperFunction(n - 1, result) +
//     helperFunction(n - 2, result) +
//     helperFunction(n - 3, result));
// }

// console.log(tribonacci(3));
// console.log(tribonacci(4));
// console.log(tribonacci(5));

// 2-D DP
// [Q-9] - https://leetcode.com/problems/n-th-tribonacci-number/description/
//[microsoft, Goldman Sachs] - Goldmine
