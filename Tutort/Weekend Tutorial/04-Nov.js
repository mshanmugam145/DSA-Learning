// Dynamic Programming
// [Q-1] :[Amazon] - Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   if (n < 1) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   if (n == 2) {
//     return 2;
//   }
//   let result = [];
//   result[0] = 0;
//   result[1] = 1;
//   result[2] = 2;
//   for (let i = 3; i <= n; i++) {
//     result[i] = result[i - 1] + result[i - 2];
//   }
//   return result[n];
// };

// #-----------------------------------------------

// [Q-2]: [ADOBE] - Find the number of ways to make N as sum of{1, 2}
// [Q-3]: [Microsoft] - Find the number of waysto make N to 0 by removing{1, 2}
// Note: repetitions and combinations are allowed

// e.g: N = 5
// Number of ways = 8
// [1] = 1
// [2] = 2
// [3] = 1+1+1 , 1+2, 2+1 = 3
// [4] = 1+1+1+1, 2+2, 1+2+1(3) = 5
// [5] = 8

// This is like fibonacci series

// # ------------------------------------
// [Q-4]: [PAYPAL] - Removing chocolates
// A box contains number of chocolates that can only be removed 1 at a time or 3 at a time.
// How many ways the box be emptied?
// the answer can be very largeso return - modulo of10^9+7
// for eg.,there are n = 7 chocolates initially. They can removed in 9 ways.
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 3],
//   [1, 1, 1, 3, 1],
//   [1, 1, 3, 1, 1],
//   [1, 3, 1, 1, 1],
//   [3, 1, 1, 1, 1],
//   [1, 3, 3],
//   [3, 1, 3],
//   [3, 3, 1];
// IP: single line represents the no. of chocolates in the box
// OP:The no. of ways of removing chocolates - modulo 10^9+7

// constraints: (0 <= n <= 10) ^ 9;

// sample - 1:
// IP = 1
// OP: 1 % 10000007 = 1

// sample - 2:
// IP = 3
// OP: 2 % 10000007 = 2

// understanding
// 1 => 1
// 2 => 1,1
// 3 => [1,1,1], [3]
// 4 => [1,1,1,1], [3,1], [1,3]
// 5 => [1,1,1,1,1], [1,1,3], [1,3,1], [3,1,1]
// 6 => [1,1,1,1,1,1], [3,3], [1,1,1,3] = 4 --> 6
// 7 => [1,1,1,1,1,1,1], [3,3,1] = 3, [1,1,1,1,3] = 5 --> 9
// const removingChocolates = function (n) {
//   const mod = 10000007;
//   let result = new Array(n + 1);
//   result[0] = 1;
//   result[1] = 1;
//   result[2] = 2;
//   for (let i = 3; i <= n; i++) {
//     result[i] = ((result[i - 1] % mod) + (result[i - 3] % mod)) % mod;
//   }
//   return result[n - 1];
// };
// console.log(removingChocolates(4));
// console.log(removingChocolates(5));
// console.log(removingChocolates(6));
// console.log(removingChocolates(7));

// # ------------------------------------
// [Q-5] [Microsoft] - Variation of sum of numbers - { 1, 3, 5}
// Given 3 numbers {1,3,5}
// Count the number of ways to form a numberN using sum of these three numbers {1,3,5}
// Note - Repetition and combinations allowed

// understanding
// 1 = 1 --> 1
// 2 = [1,1] --> 1
// 3 = [1,1,1], [3] --> 2
// 4 = [1,1,1,1], [1,3], [3,1] --> 3
// 5 = [1,1,1,1,1], [1,1,3] = 3, [5] --> 5

// 6 = [1,1,1,1,1,1], [1,1,1,3] = 4, [3,3], [5, 1] = 2 --> 8
// 7 = [1,1,1,1,1,1,1], [1,1,1,1,3] = 5, [1,1,5] = 3, [3.3.1] = 3 --> 12

// IP = 7
// for 7 ==>  6 + 1 , 4 + 3, 5 + 2
// state(7) = state(6) + state(4) + state(2)
//          = state(7-1) + state(7-3) + state(7-5)
// const getSum = function (n) {
//   let result = new Array(n + 1);
//   result[1] = 1;
//   result[2] = 1;
//   result[3] = 2;
//   result[4] = 3;
//   result[5] = 5;
//   for (let i = 6; i <= n; i++) {
//     result[i] = result[i - 1] + result[i - 3] + result[i - 5];
//   }
//   return result[n];
// };

// console.log(getSum(6));
// console.log(getSum(7));
// console.log(getSum(8));

// [Q-6] [Google] -
// Codu is trying to go down stairs from his building to ground floor. He can go 3 ways.
// 1) Walk 1 step at a time.
// 2) Extend his legs and go 2 steps at a time.
// 3) Jump down 3 steps at a time
//  calculate the number of possible ways to reach the ground floor, provided he can jump 3 steps.
//  That is, he can jump down 3 steps only once, but at any time, if he wishes, while walking down the stairs
//  As the number of ways W can be huge, print W modulo 1000000007
//  Note: As the number of ways W can be huge, print W modulo 1000000007

//  Boundary Condition(s):1 <= 10^6

// Example
// IP : 4
// OP : 7 ==> [1 1 1 1], [1 1 2] = 3, [1 3] = 2, [2 2]

//for going to 4th step the ways are
// - 7-1 = 3
// - 7-2 = 2
// - 7-3 = 4

// for 1 => 1
// for 2 => [1,1], [2]
// for 3 => [1,1,1], [2,1], [1,2], [3]

// for 6 => [1,1,1,1,1,1], [1,1,1,1,2] = 5, [1,1,1,3] = 1, [2,2,2]

// const getUncertainSteps = function (n) {
//   let result = new Array(n + 1);
//   result[0] = 1;
//   result[1] = 2;
//   result[2] = 4;
//   let count = 0;
//   for (let i = 3; i <= n; i++) {
//     if (count < 1) {
//       result[i] = result[i - 1] + result[i - 2] + result[i - 3];
//       count++;
//     } else {
//       result[i] = result[i - 1] + result[i - 2];
//     }
//   }
//   return result[n - 1];
// };
// console.log(getUncertainSteps(3));
// console.log(getUncertainSteps(4));
// console.log(getUncertainSteps(5));
// console.log(getUncertainSteps(6));

// This is a sample of template below -
const getUncertainStepsWithKCount = function (n, k) {
  let result = new Array(n + 1);
  result[0] = 1;
  result[1] = 2;
  result[2] = 4;
  let count = 0;
  for (let i = 3; i <= n; i++) {
    if (count < k) {
      result[i] = result[i - 1] + result[i - 2] + result[i - 3];
      count++;
    } else {
      result[i] = result[i - 1] + result[i - 2];
    }
  }
  return result[n - 1];
};