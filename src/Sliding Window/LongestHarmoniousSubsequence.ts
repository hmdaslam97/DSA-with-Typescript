/*
594. Longest Harmonious Subsequence
Easy
We define a harmonious array as an array where the difference between its maximum
value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious
subsequence among all its possible subsequences.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation:
The longest harmonious subsequence is [3,2,2,2,3].

Example 2:
Input: nums = [1,2,3,4]
Output: 2
Explanation:
The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

Example 3:
Input: nums = [1,1,1,1]
Output: 0
Explanation:
No harmonic subsequence exists.

Constraints:
1 <= nums.length <= 2 * 104
-109 <= nums[i] <= 109

Runtime 41 ms Beats 30.64%
Memory 66.83 MB Beats 16.13%
 */

function findLHS(nums: number[]): number {
  //const freq: Record<number, number> = {};
  //  for (const n of nums) {
  //      freq[n] = (freq[n] || 0) + 1;
  //  }

  //  let ans = 0;
  //  for (const keyStr in freq) {
  //      const key = Number(keyStr);
  //      if (freq.hasOwnProperty(key + 1)) {
  //          ans = Math.max(ans, freq[key] + freq[key + 1]);
  //      }
  //  }

  //  return ans;

   const map = nums.reduce(
        (m, n) => m.set(n, (m.get(n) || 0) + 1),
        new Map<number, number>(),
    );
    let res = 0;
    map.forEach((c, n) => res = Math.max(res, c + (map.get(n + 1) || -Infinity)));
    return res;
};

//console.log(findLHS([1,3,2,2,5,2,3,7]))//5
//console.log(findLHS([1,2,3,4]))//2
//console.log(findLHS([1,1,1,1]))//0
//console.log(findLHS([2,2,2,2,2,2,2,3,1,0,0,0,3,1,-1,0,1,1,0,0,1,1,2,2,2,0,1,2,2,3,2]))//20
console.log(findLHS([1,1,1,1,1,1,3,5,5,6]))//3