/*
20. Valid Parentheses
Easy
Topics
premium lock icon
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

Runtime 4 ms Beats 60.68%
Memory 58.18 MB Beats 47.51%
 */

function isValid(s: string): boolean {

	// 1, Initialize a stack
	// 2, Iterate through the string s and get each brackets
	// 3, Check if an bracket is of type opening else return false
	//    i, if so then store the bracket in stack
	// 4, if bracket is of type closed then check if popping at item from stack
	//    returns its corresponding opening bracket.
	//    ii, if not then return false.
	// 5, finally check if stack is empty then return true;
	//     i, else return false.

	const stack:string[]=[];
	for(let i=0; i<s.length; i++){
		if(s[i] === "{" || s[i] === "[" || s[i] === "(") {
			stack.push(s[i]);
		} else {//closing brackets
			switch(s[i]) {
			case "}": if(stack.pop()!=="{"){
									return false;
								}
								break;
			case ")": if(stack.pop()!=="("){
									return false;
								}
								break;
			case "]": if(stack.pop()!=="["){
									return false;
								}
								break;
			}
		}
	}

  return stack.length ? false: true;
};

console.log(isValid("([)]"));//false;
console.log(isValid("(]"));//false;
console.log(isValid("{[()]}"));//true;
console.log(isValid("()[]{}"));//true;
console.log(isValid("([])"));//true;
console.log(isValid("{}"));//true;