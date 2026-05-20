/*
338. Counting Bits
Easy
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

Example 1:
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

Constraints:

0 <= n <= 105
Follow up:
It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

solution 1:
Runtime 13 ms Beats 20.70%
Memory 62.49 MB Beats 34.69%

solution 2:
Runtime 0 ms Beats 100.00%
Memory 61.63 MB Beats 74.64%
 */

function countBits(n: number): number[] {
  //const getOnesInNum = (num:number):number=>{
  //  let ones = 0;
  //  while(num>0){
  //    if(num%2 ===1){
  //      ones++;
  //    }
  //    num=Math.trunc(num/2);
  //  }
  //  return ones;
  //}

  ////base case
  //if (n===0) return [0]

  //let res:number[] = []
  //for(let i=0; i<=n; i++){
  //  res.push(getOnesInNum(i));
  //}
  //return res;

  const res: number[] = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    res[i] = res[i >> 1] + (i & 1);// i/(2^1), 1&1 => 1
  }
  return res;
};

console.log(countBits(2))//[0, 1, 1]
//console.log(countBits(5))//[0, 1, 1, 2, 1, 2]
//console.log(countBits(12))// [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2]