/* 
205. Isomorphic Strings
Easy
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation:
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

Example 2:
Input: s = "foo", t = "bar"
Output: false
Explanation:
The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.
Example 3:
Input: s = "paper", t = "title"
Output: true
 
Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

Runtime 3ms Beats 97.10% Memory 54.85MB Beats 12.70%
 */

function isIsomorphic(s: string,t: string): boolean {
	/* 
	Steps:
	1, if length of both s, t are not same then return false
	2, check if patterns below doesnot get satified
 */
	// base case
	if (s.length !== t.length) {
		return false;
	}
	for (let i = 0;i < s.length - 1;i++) {
		if (s[i] === s[i + 1] && t[i] !== t[i + 1]) {
			return false;
		} else if (s[i] !== s[i + 1] && t[i]===t[i+1]) {
			return false;
		} else if (s.lastIndexOf(s[i]) !== t.lastIndexOf(t[i])) {
			return false;
		}
	}
  return true;
};
// console.log(isIsomorphic("egg","add"))//true
// console.log(isIsomorphic("foo","bar"))//false
// console.log(isIsomorphic("paper","title"))//true
console.log(isIsomorphic("badc","baba"))//false