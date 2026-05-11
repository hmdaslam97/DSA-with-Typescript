/*
2269. Find the K-Beauty of a Number
Easy
Topics
premium lock icon
Companies
Hint
The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

Note:

Leading zeros are allowed.
0 is not a divisor of any value.
A substring is a contiguous sequence of characters in a string.



Example 1:

Input: num = 240, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "24" from "240": 24 is a divisor of 240.
- "40" from "240": 40 is a divisor of 240.
Therefore, the k-beauty is 2.
Example 2:

Input: num = 430043, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "43" from "430043": 43 is a divisor of 430043.
- "30" from "430043": 30 is not a divisor of 430043.
- "00" from "430043": 0 is not a divisor of 430043.
- "04" from "430043": 4 is not a divisor of 430043.
- "43" from "430043": 43 is a divisor of 430043.
Therefore, the k-beauty is 2.


Constraints:

1 <= num <= 109
1 <= k <= num.length (taking num as a string)

Runtime 0 ms Beats 100.00%
Memory 55.36 MB Beats 57.14%
 */

function divisorSubstrings(num: number, k: number): number {
  /* Steps
    1, Make num as string and save it in another string strNum
    2, from 0 to num-k read a for loop
    3, slice i to i+k and convert it into number n
    4, check if num%n is 0, if so then increment res.
    5, return res.
   */
  const strNum = num.toString();
  let res = 0;

  for(let i=0; i<=(strNum.length-k); i++) {
    const n = Number(strNum.slice(i, i+k));
    if(num % n === 0){
      res++;
    }
  }
  return res;
};

console.log(divisorSubstrings(240, 2))//2
console.log(divisorSubstrings(430043, 2))//2
