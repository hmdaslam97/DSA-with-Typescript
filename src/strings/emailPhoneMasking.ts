/*
831. Masking Personal Information
Medium
Topics
Companies
You are given a personal information string s, representing either an email address or a phone number. Return the masked personal information using the below rules.

Email address:

An email address is:

A name consisting of uppercase and lowercase English letters, followed by
The '@' symbol, followed by
The domain consisting of uppercase and lowercase English letters with a dot '.' somewhere in the middle (not the first or last character).
To mask an email:

The uppercase letters in the name and domain must be converted to lowercase letters.
The middle letters of the name (i.e., all but the first and last letters) must be replaced by 5 asterisks "*****".
Phone number:

A phone number is formatted as follows:

The phone number contains 10-13 digits.
The last 10 digits make up the local number.
The remaining 0-3 digits, in the beginning, make up the country code.
Separation characters from the set {'+', '-', '(', ')', ' '} separate the above digits in some way.
To mask a phone number:

Remove all separation characters.
The masked phone number should have the form:
"***-***-XXXX" if the country code has 0 digits.
"+*-***-***-XXXX" if the country code has 1 digit.
"+**-***-***-XXXX" if the country code has 2 digits.
"+***-***-***-XXXX" if the country code has 3 digits.
"XXXX" is the last 4 digits of the local number.


Example 1:

Input: s = "LeetCode@LeetCode.com"
Output: "l*****e@leetcode.com"
Explanation: s is an email address.
The name and domain are converted to lowercase, and the middle of the name is replaced by 5 asterisks.
Example 2:

Input: s = "AB@qq.com"
Output: "a*****b@qq.com"
Explanation: s is an email address.
The name and domain are converted to lowercase, and the middle of the name is replaced by 5 asterisks.
Note that even though "ab" is 2 characters, it still must have 5 asterisks in the middle.
Example 3:

Input: s = "1(234)567-890"
Output: "***-***-7890"
Explanation: s is a phone number.
There are 10 digits, so the local number is 10 digits and the country code is 0 digits.
Thus, the resulting masked number is "***-***-7890".


Constraints:

s is either a valid email or a phone number.
If s is an email:
8 <= s.length <= 40
s consists of uppercase and lowercase English letters and exactly one '@' symbol and '.' symbol.
If s is a phone number:
10 <= s.length <= 20
s consists of digits, spaces, and the symbols '(', ')', '-', and '+'.

Runtime 0 ms Beats 100.00%
Memory 55.36 MB Beats 75.00%
 */

function maskPII(s: string): string {

	// check if s is email or number based on @
	if(s.includes('@')){
		// email
		const eId:string[]=s.split("@");
		return eId[0][0].toLowerCase() + "*****" + eId[0][eId[0].length-1].toLowerCase() + "@" + eId[1].toLowerCase()
	}
	else {

		// phone number
		// check for country code
		let numbers="";
		s.split("").forEach((char)=>{
			if(Number(char)>=0 && Number(char)<=9 && char!=" ") {
				console.log(char)
				numbers+=char
			}
		})
		console.log(numbers)
		switch(numbers.length){
			case 10:return "***-***-"+numbers.slice(-4)
			case 11:return "+*-***-***-"+numbers.slice(-4)
			case 12:return "+**-***-***-"+numbers.slice(-4)
			default: return "+***-***-***-"+numbers.slice(-4);
		}
	}
};

// console.log(maskPII("LeetCode@LeetCode.com"))//l*****e@leetcode.com
// console.log(maskPII("AB@qq.com"))//a*****b@qq.com
// console.log(maskPII("JackAndJill@Gmail.Com"))//"j*****l@gmail.com"
// console.log(maskPII("1(234)567-890"))//***-***-7890
// console.log(maskPII("1(234)561234"))//***-***-7890
// console.log(maskPII("86-(10)12345678"))//***-***-7890
// console.log(maskPII("+86(88)1513-7-74"))//"+*-***-***-3774"
// console.log(maskPII("+86(88)1513-7-74"))//"+*-***-***-3774"
console.log(maskPII("(3906)2 07143 711"))//"+***-***-***-3711"