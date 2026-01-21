/*
1, Check if array length is greater than or equal to k. else return -1;
2, get the k no of nums whose sum is smallest compared with all other combinations.
3, add these k no of nums and keep it the first place of this k no of nums and remove next 2 places
4, also save the merged number into cost variable by adding to its previous value.
5, do all this untill or array length becomes 1.
 */

function getCostOfPiles(stones:number[],k:number):number{
	let  merged:number, cost=0;
	while(stones.length!==1){
		//base case
		if(stones.length < k){
		  	return -1;
		}

		const mergerData = getSmallestKSum(stones,k);
		const idx = mergerData[1], mergerArr = mergerData[0];

		merged = mergerArr.reduce((acc:any,curr:any)=>acc+curr, 0)
		cost += merged;

		stones.splice(idx, k, merged);
	}

	function getSmallestKSum(arr:number[],k:number):any{
		let sumHash:any = {}, index;
		for(let i=0; i<arr.length-k+1; i++){
			sumHash[i] = arr.slice(i,i+k).reduce((acc, curr)=>acc+curr, 0);
		}

		index = getSmallest(sumHash);
		return [arr.slice(index, index+k), index]
	}

	function getSmallest(sumHash:any):number{
		let smallest = Infinity, index=-1;

		for(let key in sumHash){
			if(smallest > sumHash[key]){
				smallest = sumHash[key];
				index = Number(key);
			}
		}
		return index;
	}

	return cost;
}

//console.log(getCostOfPiles([3,2,4,1],2))//20
//console.log(getCostOfPiles([3,2,4,1],3))//-1
//console.log(getCostOfPiles([3,5,1,2,6],3))//25
console.log(getCostOfPiles([6,4,4,6],2))//40 8+14+20


//const getCost= (arr:number[])=>{
//	//1, First sort the array [9,8,2]
//	//2, Read last 2 elements [8,2] and merge [10] it into one by adding it back to
//	//   last second position and decrement the length of the array.
//	//3, Also push this merged number into a cost variable by adding its previous vals.
//	//4, now our arr looks like [9,10] then repeat step 1 & 2 to get 19 and also step 3
//	let cost =0;
//	while(arr.length!==1){
//		const l= arr.length;
//		arr.sort((a,b)=>b-a);
//		arr[l-2] = arr[l-2]+arr[l-1];
//		arr.length-=1;
//		cost+=arr[l-2];
//	}
//	return cost;
//}
////console.log(getCost([9,2,8]))//29
//console.log(getCost([5,2,5,3]))//35 5+10+15