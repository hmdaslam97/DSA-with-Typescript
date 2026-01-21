/*
Permutations
Given an array nums of distinct integers, return all the possible permutations. you can return the answer in any order.
3! = 3*2*1 => 6
[1,2,3] => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

i		j
0		0, 1, 2
1		1, 2
2		2
						         										[1,2,3]
								/swap(0,0)	              | swap(0,1)					s\swap(0,2)
    				[1,2,3]										[2,1,3]									[3,2,1]
  /swap(1,1)     \swap(1,2)   					/	\												/       \
[1,2,3]		[1,3,2]	                  [2,1,3] [2,3,1]	  			   [3,2,1]  [3,1,2]

Runtime 3ms Beats 45.27% O(n * n!)
Memory 59.96MB Beats 61.37% O(n)
 */


function permute(nums:number[]):number[][]{
	let res:typeof nums[]=[];
	const n=nums.length;

	function helper(i:number){
		// base case
		// when i === n-1 then push the array to result
		if(i===n-1) {
			res.push([...nums]);
			return;
		}
		// recursive case
		for(let j=i; j<n;j++){
			[nums[i],nums[j]] = [nums[j],nums[i]]// swap
			helper(i+1);
			[nums[i],nums[j]] = [nums[j],nums[i]]// revert

		}
	}
	helper(0)
	return res;
}
// console.log(permute([]))
// console.log(permute([1]))
console.log(permute([1,2,3]))