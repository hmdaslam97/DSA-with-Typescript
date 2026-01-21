function* iteratorFun(arr:number[]){
	for(let num of arr){
		yield num;
	}
}
const myIterator = iteratorFun([1,2,3]);

console.log(myIterator.next())
console.log(myIterator.next())
console.log(myIterator.next())