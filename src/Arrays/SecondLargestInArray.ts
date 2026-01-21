/* Find the second largest element in array
	eg 1, [5, 6, 2, 3, 1, 8] => 6
	eg 2, [10, 5, 10] => 5
 */


function secondLargest(numArr:number[]) :number{
	// 1, Time complexity = O(n)Array.from + O(n)new Set + O(n logn) sort() +O(1) returning number => O(n logn)
	// 		Space complexity = O(n)
	// const sortedUniqueArr = Array.from(new Set(numArr)).sort((a:number,b:number):number=>b-a);
	// return sortedUniqueArr.length >=2 ? sortedUniqueArr[1] : -1;

	// 2, Time complexity = O(n) forEach loop
	// 		Space complexity = O(2) space complexity.
	let largest = Number.NEGATIVE_INFINITY,
			secLargest = Number.NEGATIVE_INFINITY;
	numArr.forEach((num:number)=>{
		if(num > largest){
			secLargest = largest;
			largest = num;
		}
		else if(num > secLargest && num < largest){
			secLargest = num;
		}
	})
	return secLargest > Number.NEGATIVE_INFINITY ? secLargest : -1;
}

console.log(secondLargest([5, 6, 2, 3, 1, 8, 6]))//6
console.log(secondLargest([5, 6, 2, 3, 1, 8]))//6
console.log(secondLargest([5, 2, 3, 1, 8, 6, 4]))//6
console.log(secondLargest([10, 5, 10]))//5
console.log(secondLargest([12, 35, 1, 10, 34, 1]))//34
console.log(secondLargest([10, 10, 10]))//-1
console.log(secondLargest([5, 0, -10, 5, -1]))//0
console.log(secondLargest([-1, -5, -10]))//-5

