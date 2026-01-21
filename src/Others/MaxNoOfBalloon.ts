/* 
1189. Maximum Number of Balloons
Easy
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0

Constraints:
1 <= text.length <= 104
text consists of lower case English letters only.
Note: This question is the same as 2287: Rearrange Characters to Make Target String.

Runtime 6ms Beats 72.17% Memory 52.41MB Beats 86.96%
 */
function maxNumberOfBalloons(text: string): number {
	/* 
	Steps
	1, get the wordHash
	2, get the textHash based on wordHash
	3, check how many wordHash are present in textHash by substracting each time.
 */
	let count: number = 0,textHash:any={"b":0,"a":0,"l":0,"o":0,"n":0}, word:any={"b":1,"a":1,"l":2,"o":2,"n":1};
	
		for (let i: number = 0;i < text.length;i++){
			if (text[i] in textHash) {
				textHash[text[i]]++;
			}
		}
	
	while (true) {
		// get minimum
		for (let char in word) {
			if (textHash[char] < word[char]) {
				return count;
			} else {
				textHash[char]-= word[char]
			}
		}
		count++;
	}
};
console.log(maxNumberOfBalloons("nlaebolko"))//1
console.log(maxNumberOfBalloons("nlebolk"))//0
console.log(maxNumberOfBalloons("loonbalxballpoon"))//2