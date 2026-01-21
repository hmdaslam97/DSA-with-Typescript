
/*
70. Climbing Stairs
Easy

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps.
In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Example 3:
Input: n = 4
Output: 5  =>[1,1,1,1] [1,2,1] [1,1,2] [2,1,1] [2,2]
Constraints:
1 <= n <= 45

												3
										-1/   \-2
										2				1
								-1/  \-2     \-1
								1			0				0
						-1/
						0

  */

// Recursive solution with memoization
// Time O(n) Space O(n)
// Runtime 0 ms Beats 100.00% Memory 53.64 MB Beats 96.34%
// function climbStairs(steps: number, memo:{[key : number]:number}={}): number {
// 	/*
// 	Steps
// 	base condition: if 0 is reached then return;
//  */
// 	if (steps in memo) return memo[steps];

//   if (steps < 3) return steps;
//   //1 => climb 1 step, 2=> climb 1,1 (or) 2 directly;
//   memo[steps]= climbStairs(steps - 1,memo) + climbStairs(steps - 2,memo);
//   return memo[steps];
// };

// Iterative solution with space optimized.
// Time O(n) Space O(K)
// Runtime 0 ms Beats 100.00% Memory 54.79 MB Beats 77.62%
type hashType = {prev:number, curr:number, next:number, count:number}

function climbStairs(steps: number): number{
	const hash:hashType ={prev:2,curr:3,next:0, count:3}
	if(steps <=3) {
		return steps;
	}

	while(hash.count++<steps){
		hash.next = hash.prev + hash.curr;
		hash.prev = hash.curr;
		hash.curr = hash.next;
	}

	return hash.next;
}

console.log(climbStairs(0))//0
console.log(climbStairs(1))//1
console.log(climbStairs(2))//2
console.log(climbStairs(3))//c(2)+c(1) 3
console.log(climbStairs(4))//c(3)+c(2) 5
console.log(climbStairs(1000))//memoized solution= 7.0330367711422765e+208