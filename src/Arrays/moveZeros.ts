/* 
283. Move Zeroes Easy
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
 
Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 
Follow up: Could you minimize the total number of operations done?
Runtime 17ms Beats 13.09% 
Memory 6.64MB Beats 11.79% 
*/

function moveZeroes(nums: number[]): void {
	/* 
	1, run a for loop for nums array
	2, check for zero in num element
	3, if so then splice nums array and increment zeros count and decrement i
	4, run a while loop with zeros count and push 0 by decrementing zeros count.
 */
	let zeros:number = 0;
	
	for (let i: number = 0;i < nums.length;i++){
		if (nums[i] === 0) {
			nums.splice(i,1);
			zeros++;
			i--;
		}
	}
	while (zeros) {
		nums.push(0)
		zeros--;
	}
	console.log(nums)
};

moveZeroes([0,1,0,3,12])//[1,3,12,0,0]
moveZeroes([0])//[0]
