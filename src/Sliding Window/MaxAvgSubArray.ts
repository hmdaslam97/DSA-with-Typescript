/*
643. Maximum Average Subarray I
Easy
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average
value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:
Input: nums = [5], k = 1
Output: 5.00000

Constraints:
n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104

Runtime 1 ms Beats 99.69%
Memory 69.90 MB Beats 37.06%
 */

function findMaxAverage(nums: number[], k: number): number {
  /*
  window size = k
  iterate from 0  to less than nums.length-k
 */
  if (nums.length === 1) {
    return nums[0]
  }

  let startSum=0, maxSum;
  // Calculating initial sum manually
  for(let j=0; j<k; j++){
    startSum+=nums[j];
  }
  maxSum = startSum;

  // Calculating maximum sum using sliding window.
  for(let i=0; i<nums.length-k; i++){
    startSum += nums[i+k]-nums[i]
    maxSum = Math.max(startSum, maxSum);
  }

  //returning average of maximum at last.
  return maxSum/k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))//12.75000
console.log(findMaxAverage([5], 1))//5.00000
console.log(findMaxAverage([7,4,5,8,8,3,9,8,7,6], 7))//7.00000