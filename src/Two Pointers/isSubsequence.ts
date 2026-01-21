/*
Is Subsequence
Easy
Topics
premium lock icon
Companies
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false


Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
Runtime 1 ms Beats 71.70%
Memory 56.21 MB Beats 29.95%
 */
function isSubsequence(s: string, t: string): boolean {
    /*
    1, Take two points ps, pt and initialize it to 0 index.
    2, First get each of chars of string s by doing s[ps]
    3, for loop through t string using pt index and check if s[ps] === t[pt]
    4,    if so then increment ps and continue;
    5,    else at the end return false;
     */
  let ps = 0, pt = 0;
  if(s.length === 0) {
    return true;
  }
  while(pt < t.length && ps < s.length) {

   if(t[pt] === s[ps]) { // if chars match found then increment index of s
    ps++;
   }

   pt++; // incrementing index of t for loop to run.
  }

  if(ps === s.length) { // checking if all chars of s and present in t subseq.
    return true;
   }

  return false;
};
console.log(isSubsequence("abc", "ahbgdc")) // true
console.log(isSubsequence("axc", "ahbgdc")) // false
console.log(isSubsequence("b", "c")) // false