/*
383. Ransom Note
Easy
Topics
premium lock icon
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true


Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

Runtime 18 ms Beats 50.60%
Memory 56.03 MB Beats 99.07%
O(n) = 2n
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
	const mgHash:any = {};
	for(let i=0; i<magazine.length;i++){
		if(mgHash[magazine.charAt(i)]) {
			mgHash[magazine.charAt(i)] += 1;
		} else {
			mgHash[magazine.charAt(i)] = 1;
		}
	}
	for(let j=0; j<ransomNote.length; j++){
		if(mgHash[ransomNote.charAt(j)]) {
			mgHash[ransomNote.charAt(j)]-=1;
		} else {
			return false;
		}
	}
	return true;
};

//console.log(canConstruct("aa", "aab"))//true
console.log(canConstruct("aaa", "aab"))//false