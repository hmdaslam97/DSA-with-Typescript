/*
Permutation 2: Find the permutation of number array and return only unique permutations only.
eg, [1,1,2] => [[1,1,2],[1,2,1],[2,1,1]]
Permuation => Backtracking => two pointers => use object to get unique element

					[1,1,2]
			/			|				\
swap(0,0)	swap(0,1) swap(0,2)
[1,1,2]		[1,1,2] 		[2,1,1]
	/\
swap(1,1)swap(1,2) swap(1,1)swap(1,2) swap(1,1)swap(1,2)
[1,1,2]	[1,2,1]		 [1,1,2] [1,2,1]			[2,1,1] [2,1,1]

uniques[1,1,2],[1,2,1][2,1,1]

i j
0	0,1,2
1 1,2
2 2

Runtime 4 ms Beats 65.07%  O(n * n!)
Memory 62.09 MB Beats 37.13% O(n)

 */

function UniquePerm(num:number[]):number[][]{
	const res:number[][]=[];

	function helper(i:number){
		// base condition
		if(i===num.length-1) {
			res.push([...num])
			return
		}

		// backtracking case
		const hash:any = {}
		for(let j:number=i; j<num.length; j++) {
			if(!hash[num[j]]){
				hash[num[j]]=true;
				[num[i],num[j]] = [num[j],num[i]];
				helper(i+1);
				[num[i],num[j]] = [num[j],num[i]];
			}
		}
	}
	helper(0)

	return res
}

console.log(UniquePerm([1,2,3]))//[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(UniquePerm([1,1,2]))//[[1,1,2],[1,2,1],[2,1,1]]