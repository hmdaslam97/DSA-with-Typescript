/*
219. Contains Duplicate II
Easy
Given an integer array nums and an integer k, return true if there are two
distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105

Runtime 61 ms Beats 16.07% O(n)
Memory 79.13 MB Beats 62.23% O(n)
 */

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  //sliding window + hash object
  const hash:Record<string, number> = {}
  for(let i=0; i<nums.length; i++){
    const num = nums[i];
    if(num in hash){
      //already number is present
      if(Math.abs(hash[num]-i)<=k){
        // matches above criteria so returning true.
        return true;
      } else {
        // update the index of hash to newly found duplicate number located in higher index.
        hash[num]=i;
      }
    } else {
      // Assigning the non existing element into the hash object.
      hash[num] = i;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3)) //true
console.log(containsNearbyDuplicate([1,0,1,1], 1)) //true
console.log(containsNearbyDuplicate([1,5,1,0], 2))//true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))//false