/*
724. Find Pivot Index
Easy
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:
Input: nums = [1, 7, 3,  6,  5,  6]
              [1, 8, 11, 17, 22, 28] => transformed
              28-17 = 11 => total - current element === left element


Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

Example 2:
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

Example 3:
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0


Constraints:
1 <= nums.length <= 104
-1000 <= nums[i] <= 1000

Note: This question is the same as 1991:
https://leetcode.com/problems/find-the-middle-index-in-array/

Runtime 2 ms Beats 65.38%
Memory 59.41 MB Beats 28.32%

Time Complexity: O(n)
First loop: O(n) to build the prefix sum array
Second loop: O(n) to find the pivot index
Total: O(n) + O(n) = O(n)

Space Complexity: O(n)
transformedArr stores n+1 prefix sums, requiring O(n) extra space
Other variables (sum, j) only use O(1) constant space

This is an efficient solution since you traverse the array only twice and use a
prefix sum array to avoid recalculating sums repeatedly.
 */

function pivotIndex(nums: number[]): number {
  let transformedArr = [0], sum =0;

  for(let i=0; i<nums.length; i++){
    sum+=nums[i]
    transformedArr.push(sum)
  }

  for(let j=1; j<transformedArr.length; j++){
    if(sum-transformedArr[j] === transformedArr[j-1]){ //total - current element === left element
      return j-1
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3,  6,  5,  6]))//3
console.log(pivotIndex([1,2,3]))//-1