// bubble sorting
function bubbleSort(arr:number[]):number[] {
	for(let i=0;i<arr.length; i++){
		for(let j=0;j<arr.length-i-1;j++){
			if(arr[j+1]<arr[j]){
				[arr[j+1], arr[j]]=[arr[j], arr[j+1]]
			}
		}
	}
	return arr
}

console.log(bubbleSort([3,2, 5, 8, 4, 1]))