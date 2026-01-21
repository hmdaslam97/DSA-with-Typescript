/* 
66. Plus One

You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's. 

RESULT
1,Using inbuilt functions
Runtime 0ms Beats 100.00%
Memory 51.98MB Beats 7.00%

2,Using recursion
Runtime 0ms Beats 100.00%
Memory 51.65MB Beats 23.22%
*/

function plusOne(digits: number[]): number[] {
/* Steps 
	1, convert steps to string using join()
	2, convert string to number and add 1
	3, convert number to string and back to array using split()
*/
	// let num: bigint = BigInt(digits.join(""));
	// num += 1n;
	// return String(num).split("").map(n =>Number(n));
	
	/* Steps 
	1, check if lsb is not 9 then directly increment lsb to lsb+1
	2, else (lsb is 9) then pass last index of digits & reminder=1 to helper
		a,check for base condition whether i<0 if so return the finished digits array
		b,check if rem is 1 
			i,check if current digit is 9
			ii, then assign current digit with 0
			iii,check for index reached msb or msb was 9
					1,if so then reassign digits array having 1 added in begining
					2,else assign reminder with value 1
			iv, else simply increment current digit and make reminder to 0
*/
	const lsb:number = digits[digits.length - 1];
	if (lsb !== 9) { //lsb is 9
		digits[digits.length - 1] = lsb + 1;
		return digits;
	} else {
		function helper(i:number,rem:number) {
			// base condition to terminate
			if (i < 0) {
				return digits
			}
			
			if (rem) {
				if (digits[i] === 9) {
					// 9
					digits[i] = 0;
					
					if (i === 0) {//msb is 9 here 
						digits=[1, ...digits]
					} else {
						rem = 1;
					}
				} else {
					// non 9
					digits[i] += 1;
					rem = 0;
				}
			}
			// console.log(digits,rem);
			helper(i-1, rem)
		}
		helper(digits.length - 1, 1)
	}
	return digits;
};

// console.log(plusOne([1,2,3]))//[1,2,4]
console.log(plusOne([9,9,9]))//[1,0,0,0]
console.log(plusOne([7,5,9,9]))//[7,6,0,0]
// console.log(plusOne([4,3,2,1]))//[4,3,2,2]
// console.log(plusOne([9]))//[1,0]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))//[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]