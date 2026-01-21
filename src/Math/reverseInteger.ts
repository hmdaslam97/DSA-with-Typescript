/* 
7. Reverse Integer
Medium
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Constraints:
-2^31 <= x <= 2^31 - 1

Runtime 79ms Beats 57.13%
Memory 54.07MB Beats 23.09%

 */

function reverse(x: number): number {
  /* 
  1, check if x is (-ve) or (+ve) number
  2, if +ve number then directly reverse numbers and check if it is <= 2^31 - 1 if so then return that number
  3, if -ve number then multiply by -1 and reverse number and multiply by -1 and check if it is >= -2^31. if so return that number
  4, otherwise return 0
 */
  let res;
  if (x > 0) {
    res = Number(x.toString().split("").reverse().join(""))
    if (res <= (Math.pow(2,31)-1)) return res;
  }
  if (x < 0) {
    res = Number((x * -1).toString().split("").reverse().join("")) * -1
    if (res >= Math.pow(-2,31)) return res;
  }
  return 0;
  
};

console.log(reverse(123))//321
console.log(reverse(-123))//-321
console.log(reverse(120))//21
console.log(reverse(Math.pow(-2,31)))//0
console.log(reverse(Math.pow(2,31)-1))//0