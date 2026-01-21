/* 
58. Length of Last Word
Easy
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal 
substring
 consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 
Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
Runtime 0ms Beats 100.00% Memory 51.49MB Beats 51.12%
 */


function lengthOfLastWord(s: string): number {
	/* Steps
	1, loop the string from last to first
	2, check first occurace of letter and flag need to assigned with index;
	3, check if flag is true and letter is " " then return current to flag;
 */
	
	let res = s.trim().split(" ");
	return res[res.length-1].length;
};
console.log(lengthOfLastWord("Hello World"))//5 World
console.log(lengthOfLastWord("   fly me   to   the moon  "))//4 moon
console.log(lengthOfLastWord("luffy is still joyboy"))//6 joyboy