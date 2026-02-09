/*
1137. N-th Tribonacci Number
Easy
Topics
premium lock icon
Companies
Hint
The Tribonacci sequence Tn is defined as follows:

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

Example 1:
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

Example 2:
Input: n = 25
Output: 1389537

Constraints:
0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

Runtime 0 ms Beats 100.00%
Memory 55.18 MB Beats 52.07%
 */

function tribonacci(n: number): number {

  const helper= (num: number, memo:Record<string, number>={}):number=>{
    //base case
    if(num===0) return 0;
    if(num<=2) return 1;

    if(num in memo){
      return memo[num]
    }

    memo[num-1] = helper(num-1, memo)
    memo[num-2] = helper(num-2, memo)
    memo[num-3] = helper(num-3, memo)
    return memo[num-1]+memo[num-2]+memo[num-3]
  }

  //recursive case
  return helper(n)
};

//console.log(tribonacci(0))// 0
//console.log(tribonacci(1))// 1
//console.log(tribonacci(2))// 0+1 => 1
//console.log(tribonacci(3))// 0+1+1 =>2
//console.log(tribonacci(25))// 1389537
console.log(tribonacci(33))// 181997601
