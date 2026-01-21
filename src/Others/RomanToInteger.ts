/* 
13. Roman to Integer
Easy
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

Runtime 11ms Beats 22.30% Memory 56.54MB Beats 81.99%
 */
function romanToInt(s: string): number {
	/* 
	Steps
	1, define romanNum object as below
	2, loop through s roman number string from reverse order from last 2nd 
	3, check if current value in number < previous value in number 
		then substract result with current value
	4, other wise simply add current value to result.
 */
	let romanNum: any = {
		'I': 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000
	},res: number = 0,sLen:number = s.length;;
	
	// base condition
	if (sLen === 0) return 0;
	if (sLen === 1) return romanNum[s];
	if (sLen > 1) {
		for (let i: number = s.length - 1;i >= 0;i--){
			if (romanNum[s[i]] < romanNum[s[i + 1]]) {
				res-=romanNum[s[i]]
			}
			else {
				res+=romanNum[s[i]]
			}
		}
	}
	return res;
};

console.log(romanToInt("III"))//3
console.log(romanToInt("LVIII"))//58 L = 50, V= 5, III = 3.
console.log(romanToInt("MCMXCIV"))//M CM XC IV => 1994  M = 1000, CM = 900, XC = 90 and IV = 4.
