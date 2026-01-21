function fib(n: number): number {
	/*
	base condition: n===0 return 0, n===1 return 1
	recursive contion return fib(n-1)+fib(n-2)
 */
	function helper(num:number, memo:any={}):number{
		if(num in memo) {
			return memo[num];
		}

		if(num===0 || num ===1) return num;

		memo[num] = helper(num-1, memo)+helper(num-2, memo);
		return memo[num];
	}
	return helper(n)
};

// console.log(fib(0))
// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(4))
// console.log(fib(5))
// console.log(fib(10))
console.log(fib(50))//12586269025 possible by memoizing solution.