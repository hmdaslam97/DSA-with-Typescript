/* 
118. Pascal's Triangle
Easy
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:
1 <= numRows <= 30

Runtime 1ms Beats 50.43% Memory 52.33MB Beats 82.05%
 */

function generate(numRows: number): number[][] {
	let res:any = [];
	for (let i: number = 1;i <= numRows;i++){//1 to 5
		let arr: number[] = new Array(i)
		for (let j: number = 0;j < i;j++){//0 to i
			if (j===0 || i === (j + 1)) {
				arr[j] = 1;
			} else {
				arr[j]=res[i-2][j-1]+res[i-2][j]
			}
		}
		res.push(arr)
	}
  return res
};
console.log(generate(5))//[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1))//[[1]]
console.log(generate(2))//[[1],[1,1]]