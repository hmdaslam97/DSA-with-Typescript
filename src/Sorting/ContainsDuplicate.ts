/*
217. Contains Duplicate
Easy
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109

Runtime 42 ms Beats 11.17%
Memory 78.06 MB Beats 14.72%
 */
type objType = Record<string, boolean>;

function containsDuplicate(nums: number[]): boolean {
  const uniqueObj:objType = {};

  for(let i=0; i<nums.length; i++) {
    if(uniqueObj[nums[i]]){ //already number is present
      return true;
    }
    uniqueObj[nums[i]]=true;
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1]))//true
console.log(containsDuplicate([1,2,3,4]))//false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))//true