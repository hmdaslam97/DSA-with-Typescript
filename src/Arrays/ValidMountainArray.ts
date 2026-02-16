/*
941. Valid Mountain Array
Easy
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true

Constraints:
1 <= arr.length <= 104
0 <= arr[i] <= 104

Runtime 52 ms Beats 45.41%
Memory 59.46 MB Beats 16.84%
 */

function validMountainArray(arr: number[]): boolean {
  const l = arr.length;
  let incFlag = false, decFlag = false;

  //base case
  if(l < 3){
    return false;
  }
  if(arr[0] >= arr[1]){
    // second height is either equal or smaller than first height
    return false;
  } else {
    incFlag = true;
  }

  // check for strict increasing order
  // check for strict decreasing order
  for(let i=1; i<l-1; i++){
    // check from i to i+1
    if(arr[i+1] > arr[i]){
      //Strict Increasing
      if(decFlag){
        return false;
      }
      incFlag = true;
    } else if(arr[i+1] < arr[i]) {
      //Strict decreasing
      if(incFlag){
        decFlag = true;
      } else {
        return false;
      }
    } else {
      // equal heights
      return false;
    }
  }
  return decFlag;
};

console.log(validMountainArray([5,4,3,1])) //false
console.log(validMountainArray([2,1])) //false
console.log(validMountainArray([3,5,5])) //false
console.log(validMountainArray([5,4,3,1])) //false
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9])) //false
console.log(validMountainArray([0,3,2,1])) //true
console.log(validMountainArray([4,5,2,1])) //true
console.log(validMountainArray([4,5,4,3])) //true