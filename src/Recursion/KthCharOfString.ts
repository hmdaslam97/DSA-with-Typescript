/*
	3304. Find the K-th Character in String Game I
Solved Easy

Alice and Bob are playing a game. Initially, Alice has a string word = "a".
You are given a positive integer k.
Now Bob will ask Alice to perform the following operation forever:
Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word.
For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".
Return the value of the kth character in word, after enough operations have been done for word to have at least k characters.
Note that the character 'z' can be changed to 'a' in the operation.

Example 1:
Input: k = 5
Output: "b"

Explanation:
Initially, word = "a". We need to do the operation three times:
Generated string is "b", word becomes "ab".
Generated string is "bc", word becomes "abbc".
Generated string is "bccd", word becomes "abbcbccd".

Example 2:
Input: k = 10
Output: "c"

Constraints:
1 <= k <= 500

Runtime 5 ms Beats 69.14%
Memory 60.58MB Beats 11.11%
 */

function kthCharacter(k: number): string {
	function getNextChar(c:string):string{
		if (c!=="z") {
			return String.fromCharCode(c.charCodeAt(0)+1)
		} else {
			return "a";
		}
	}

	function genWord(w:string):string{
		let temp:string="";
		for(let i:number=0;i<w.length;i++){
			temp+=getNextChar(w[i]);
		}
		return temp;
	}

	function buildWord(w:string):string{
		if(w.length>=k) {
			return w;
		}

		return buildWord(w+genWord(w))
	}


  return buildWord("a").charAt(k-1);
};

console.log(kthCharacter(5))
console.log(kthCharacter(10))
console.log(kthCharacter(500))
