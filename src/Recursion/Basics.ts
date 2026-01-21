/*
	print 1 to n in ascending order using recursion.
	lets try printing n to 1.
 */

const myFun  = (n:number)=>{
	// Iterative way with time complexity n and space complexity 1 for variable i.
	// for(let i=1;i<=n;i++){
	// 	console.log(i)
	// }

	// n to 1
	// if(n<1){
	// 	return
	// }
	// Printing in ascending phase.
	// console.log(n)
	// myFun(n-1)

	// 1 to n
	// if(n<1){
	// 	return
	// }
	// myFun(n-1)
	// Printing in descending phase
	// console.log(n)

	// n to 1
	// if(n<1){
	// 	return
	// }
	// Printing in ascending phase.
	// console.log(n)
	// myFun(n-1)

	// By passing initial value to a new function print from 1 to n
	// function myFun(base:number, n:number) {
	// 	console.log(base);
	// 	if(base === n){ //first invalid input
	// 		return;
	// 	}
	// 	myFun(base+1, n);
	// }
	// myFun(1,n)

	// 2
	// function myFun(base:number, n:number) {
	// 	if(base > n){ //last valid input
	// 		return;
	// 	}
	// 	console.log(base);
	// 	myFun(base+1, n);
	// }
	// myFun(1,n)
}

myFun(5);