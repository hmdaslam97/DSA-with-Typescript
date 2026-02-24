/*
119. Pascal's Triangle II
Easy
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]

Constraints:
0 <= rowIndex <= 33

       1
    1    1
   1   2   1
 1   3   3  1
1  4   6   4  1

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

Runtime 1 ms Beats 44.37% O(n)
Memory 55.46 MB Beats 55.63% O(n)
 */

function getRow(rowIndex: number): number[] {
  //base case
  if(rowIndex === 0) return [1]
  if(rowIndex === 1) return [1, 1]

  const tempArr:number[]=[], temp = getRow(rowIndex-1);
  if(rowIndex > 1) {
    tempArr[0] = 1;
    tempArr[rowIndex] = 1;
    for(let i=1; i<rowIndex; i++){
      // Addition of elements present in above row in order.
      tempArr[i] = temp[i-1] + temp[i];
    }
  }

  return tempArr
};

//console.log(getRow(0)) //[1]
//console.log(getRow(1)) //[1,1]
//console.log(getRow(2)) //[1,2,1]
//console.log(getRow(3)) //[1,3,3,1]
console.log(getRow(4)) //[1,4,6,4,1]