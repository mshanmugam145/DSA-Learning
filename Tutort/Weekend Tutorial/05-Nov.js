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
var fib = function (n) {
  const phi = (Math.sqrt(5) + 1) / 2;
  return Math.round(Math.pow(phi, n) / Math.sqrt(5));
};
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));

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
