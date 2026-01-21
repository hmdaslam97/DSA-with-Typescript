/* 
12. Integer to Roman
Medium
Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I				1
V				5
X				10
L				50
C				100
D				500
M				1000
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. 

Converting a decimal place value into a Roman numeral has the following rules:
1, If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, 
append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.

2,If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, 
for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.

Example 1:

Input: num = 3749
Output: "MMMDCCXLIX" => MMM DCC XL IX

Explanation:
3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

Example 2:
Input: num = 58
Output: "LVIII"

Explanation:
50 = L
 8 = VIII
 
Example 3:
Input: num = 1994
Output: "MCMXCIV"
Explanation:
1000 = M
 900 = CM
  90 = XC
   4 = IV
 
Example 4:
4949 => MMMM CM XL IX

Example 5:
3999 => MMM CM XC IX

Constraints:
1 <= num <= 3999

Runtime 5ms Beats 81.06% Memory 58.57MB Beats 30.46%
 */

function intToRoman(num: number): string {
	/* 
	Steps
	1, get the reminder * its unit place
	2, check the relevent roman number in below object and uppend to result in reverse order
 */
	let numToRoman:any = {
		1     : "I",
		4			: "IV",
		5     : "V",
		9			: "IX",
		10    : "X",
		40		: "XL",
		50    : "L",
		90    : "XC",
		100   : "C",
		400   : "CD",
		500   : "D",
		900   : "CM",
		1000  : "M",
	},res:string="", i:number=1;
	
	while (num) {
		let temp: number = num % 10;
		num = Math.floor(num / 10)
		
		if (temp > 1 && temp < 4) {
			// range 2 to 3
			let count = temp;
			while(count){
				res=numToRoman[i]+res
				count--;
			}
			
		} else if (temp > 5 && temp < 9) {
			// range 6 to 8
			let count=temp-5
			while(count){
				res = numToRoman[i] + res;
				count--;
			}
			res = numToRoman[5 * i] + res;
		} else if(temp!==0){
			//1,4,5,9 multiples
			res = numToRoman[temp * i] + res;
		}
		
		i*=10;
	}
	
	return res;
};

// console.log(intToRoman(600))//600 -> DC 300->cc
// console.log(intToRoman(3749))//MMM DCC XL IX
// console.log(intToRoman(58))//LVIII
// console.log(intToRoman(1994))//M CM XC IV
// console.log(intToRoman(4949))//MMMM CM XL IX not required to run this as its beyond limit
console.log(intToRoman(3999))//MMM CM XC IX