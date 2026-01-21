/*326. Power of Three
Attempted
Easy
Topics
premium lock icon
Companies
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.



Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
Example 2:

Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.
Example 3:

Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).


Constraints:

-231 <= n <= 231 - 1*/

function isPowerOfThree(n: number): boolean {
	//base case
	if(n<1){
		// negative numbers with 0 cannot be represented as +3^x so return false
		return false;
	}

	while(n>1){
		const rem = n%3; //reminder after dividing with 3
		if (rem !==0){ //if reminder is not 0 then n cannot be divided with 3
			return false;
		}
		n = n/3; // divide the number by 3
	}
	return true; // n is completely dividable by 3
};

console.log(isPowerOfThree(-1))//false
console.log(isPowerOfThree(0))//false
console.log(isPowerOfThree(9))//true 9 = 3^2
console.log(isPowerOfThree(18))//false