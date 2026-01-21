/* 
35. Search Insert Position
Easy
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

Runtime 0ms Beats 100.00% Memory 51.01MB Beats 95.53%
 */

function searchInsert(nums: number[], target: number): number {
 /* As Binary search algorithm should be less than O(log n) runtime complexity
 Steps
 1, As array is sorted first get the middle position
 2, check if number at middle position matches target, if so return position
 3, else if target > middle position then new left would be middle+1
 4, else (target<middle position) then new right would be middle-1
 */
	let left: number = 0,right: number= nums.length, middle: number = Math.floor((right + left) / 2);
	
	if (target > nums[nums.length - 1]) {
		return nums.length;
	}
	if (target < nums[0]) {
		return 0;
	}
	
	while (left <= right) {
		if (nums[middle] === target) {
			return middle;
		} else if (target > nums[middle]) {//present in right half
			left = middle + 1;
		} else if(target < nums[middle]) {//present in left half
			right = middle - 1;
		} 
		middle = Math.floor((right + left) / 2)
	}
	
	if (target > nums[right]) {
		return middle + 1;
	}

	return -1
};
// console.log(searchInsert([1,3,5,6,9], 5))//2
// console.log(searchInsert([1,3,5,6], 2))//1
// console.log(searchInsert([2,3,5,6], 7))//4
console.log(searchInsert([2,3,5,6], 1))//0