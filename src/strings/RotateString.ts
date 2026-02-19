/*
796. Rotate String
Easy
Topics
premium lock icon
Companies
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

Example 1:
Input: s = "abcde", goal = "cdeab"
Output: true

Example 2:
Input: s = "abcde", goal = "abced"
Output: false

Constraints:
1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.

Time Complexity
The function performs the following operations for each iteration of the loop:

s.slice(1)

• Creates a new substring of length n-1

• Time complexity: O(n)

s.charAt(0) Constant time: O(1)

Concatenation: s.slice(1) + s.charAt(0)

• Creates a new string of length n

• Time complexity: O(n)
Comparison
s === goal

• Compares two strings of length n
• Worst case: O(n)

These operations happen inside a loop that runs n times, where
n = s.length.

So total time:
• Each iteration ≈ O(n)
• Loop runs n times → O(n²)
Final Time Complexity: O(n²)

Space Complexity
Inside the loop:
•
s.slice(1) + s.charAt(0)
creates a new string of length n every iteration.
• JavaScript strings are immutable, so each rotated version of s takes new memory.

However, only one such string exists at a time (previous one is discarded by reassignment).
Thus, auxiliary space usage is proportional to n.
Final Space Complexity: O(n)

Summary
Time Complexity: O(n²)
Space Complexity: O(n)

Runtime 0 ms Beats 100.00%  Memory 55.52 MB Beats 42.24%

 */

function rotateString(s: string, goal: string): boolean {
  // first get goal's first letter's index from s string

  for(let i=0; i<s.length; i++){
    s = s.slice(1) + s.charAt(0)
    if(s===goal) return true;
  }
  return false;

  //O(n) solution
  //if (s.length !== goal.length) return false;
  //return (s + s).includes(goal);
};

//console.log(rotateString("abcde", "cdeab"))//true
//console.log(rotateString("abcde", "abced"))//false
console.log(rotateString("defdefdefabcabc", "defdefabcabcdef"))//true