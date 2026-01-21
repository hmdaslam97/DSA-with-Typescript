/*
1. Two Sum
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
 */

function twoSum(nums: number[], target: number): number[] {

	// base case
	if(nums.length<2) return [];

	// 1, Intuition: O(n^2) time and O(k) space.
 	// Runtime 57 ms Beats 15.27%
	// Memory 55.76 MB Beats 90.54%
	//for(let i=0; i<nums.length; i++){ // reading each indexes of nums array
	//	for(let j=i+1; j<=nums.length; j++){// reading all other indexs to the right of array excluding current index.
	//		if(nums[i]+nums[j]===target){//check if current and next element adds to target
	//			return [i,j]; // if so then return the array of those indices.
	//		}
	//	}
	//}

	// 2, Hashing the values: O(n) time and O(n) space
	// Runtime 3 ms Beats 64.35% Memory 56.84 MB Beats 54.35%
	// a, Iterate through each element of the nums array
	// b, Substract each element with the target and call it as composition.
	// c, check if composition exist in the hash
						//i, if so then return the indeces of current element and composition element
						//ii, if not store the composition along with its index.
//

	const hash :any= {};

	for(let i=0;i< nums.length; i++) {
		const composition =  target - nums[i];
		if(composition in hash) { // check if compositions value(i.e index) is > -1
			// hash has composition element
			return [hash[composition], i]
		} else {
			// has does not have composition element
			hash[nums[i]] = i;
		}
	}

	return [];// if nothing was found then return empty array.
};

console.log(twoSum([2,7,11,15], 9))//[0, 1]
console.log(twoSum([1,2,3,4], 5))//[1,2]
console.log(twoSum([3,2,4], 6))//[1,2]
console.log(twoSum([3, 3], 6))//[0,1]