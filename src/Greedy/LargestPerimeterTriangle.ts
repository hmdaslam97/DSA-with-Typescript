/*
976. Largest Perimeter Triangle
Easy
Given an integer array nums, return the largest perimeter of a triangle with a
non-zero area, formed from three of these lengths. If it is impossible to form
any triangle of a non-zero area, return 0.

Example 1:
Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.

Example 2:
Input: nums = [1,2,1,10]
Output: 0
Explanation:
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.

Constraints:
3 <= nums.length <= 104
1 <= nums[i] <= 106

Runtime 21 ms Beats 94.64%
Memory 59.25 MB Beats 50.00%
 */

function largestPerimeter(nums: number[]): number {
  for (let i = 2, n = nums.sort((a, b) => b - a).length; i < n; i++) {
    if (nums[i - 2] < nums[i - 1] + nums[i]) {
      return nums[i - 2] + nums[i - 1] + nums[i];
    }
  }
  return 0;
};

console.log(largestPerimeter([2,1,2]))//5
console.log(largestPerimeter([1,2,1,10]))//0
console.log(largestPerimeter([3, 2, 3, 4]))//10 [3,3,4]
console.log(largestPerimeter([3, 1, 2, 4, 5, 10]))//12 [3,4,5]