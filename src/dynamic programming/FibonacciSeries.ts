/*
Fibonacci series: 0, 1, 1, 2, 3, 5, 8 ...

1, Write the recursion solution (top down solution) and Memoize the solution
2, Tabulation ( Bottom up) approach with space optimisation
 */

function Fibonacci(num: number):number {
	console.time("timer")
	if(num===0) return 0;

	// Recursive Solution
	// Time O(n) for memoized solution otherwise 2^n
	// Space O(n)
	// Recursion: Runtime 60 ms Beats 35.13% Memory 55.82 MB Beats 18.94%
	// Memoized: Runtime 41 ms Beats 83.38%  Memory 55.40 MB Beats 49.47%
	// function helper(n:number, memo:{[key: number]: number}):number{
	// 	if(n<=2){
	// 		memo[n]=n-1;
	// 		return memo[n];
	// 	}
	// 	if(n in memo) return memo[n];
	// 	memo[n]= helper(n-1, memo) + helper(n-2, memo)
	// 	return memo[n]
	// }
	// console.timeEnd("timer")//0.003173828125 ms for 1000 = 2.686381002448534e+208
	// return helper(num, {})

	// Iterative approach
	// 1 2 3 4 5 6 7 ...
	// 0 1 1 2 3 5 8 ...
	// A, Create a new array and compute next = prev + curr elements and return last element in array.
	// Time O(n) space O(1)
	// Runtime 52 ms Beats 47.01% Memory 55.38 MB Beats 49.61%
	// const nums:number[] = new Array(num)
	// nums[0] = 0;
	// nums[1] = 1;
	// let count:number=2;
	// while(count<num){
	// 	nums[count]=nums[count-1]+nums[count-2];
	// 	count++;
	// }
	// console.timeEnd("timer")//0.201904296875 ms for 1000 = 2.686381002448534e+208
	// return nums[nums.length-1];

	// B, By using pointer without storing the elements in array
	// Time O(n) space O(1)
	// Without Hashing: Runtime 49 ms Beats 56.76% Memory 54.98 MB Beats 72.68%
	// With Hashing: Runtime 36 ms Beats 94.50%    Memory 54.88 MB Beats 76.25%
	type hashType = {prev:number, curr:number, next:number, count:number}
	const hash:hashType={prev:0, curr:1, next:1, count:3};
	// base case
	if(num === 1) return hash.prev;
	if(num === 2) return hash.curr;

	while(hash.count++<=num) {
		hash.next = hash.prev + hash.curr
		hash.prev = hash.curr;
		hash.curr = hash.next;
	}
	console.timeEnd("timer")// 0.2587890625 ms for 1000 = 2.686381002448534e+208
	return hash.next;
}

// console.log(Fibonacci(0))//0
// console.log(Fibonacci(3))//1
// console.log(Fibonacci(7))//8
// console.log(Fibonacci(20))//4181
// console.log(Fibonacci(50))//7778742049
console.log(Fibonacci(1000))//2.686381002448534e+208

