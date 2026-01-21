/*
2149. Rearrange Array Elements by Sign
Medium
You are given a 0-indexed integer array nums of even length consisting of an
equal number of positive and negative integers.

You should return the array of nums such that the array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums
is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the
aforementioned conditions.

Example 1:
Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.

Example 2:
Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].

Constraints:
2 <= nums.length <= 2 * 105
nums.length is even
1 <= |nums[i]| <= 105
nums consists of equal number of positive and negative integers.

It is not required to do the modifications in-place.

Runtime 5 ms Beats 100.00%
Memory 107.43 MB Beats 6.82%
 */

function rearrangeArray(nums: number[]): number[] {
/* Two pointer method
1, First take nP and pP pointer
2, Run a while loop up till nP AND pP index is of size of nums.
3, fill all +ve in even indexes and -ve in odd positions as array has equal no of
  +ves and -ves
*/
  let nP=1, pP=0;
  const len= nums.length, res = new Array(nums.length);

  if(len < 2){
    return nums;
  }

  for(let i=0; i<len; i++){
    if(nums[i]>0){
      // +ve
      res[pP] = nums[i];
      pP+=2;
    } else {
      // -ve
      res[nP] = nums[i];
      nP+=2;
    }
  }
  return res
};

console.log(rearrangeArray([3,1,-2,-5,2,-4])) //[3,-2,1,-5,2,-4]
console.log(rearrangeArray([-1,1])) //[1, -1]