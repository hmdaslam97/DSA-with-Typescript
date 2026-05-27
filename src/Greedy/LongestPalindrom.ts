/*
409. Longest Palindrome
Easy
Topics
premium lock icon
Companies
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.



Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.

Runtime 4 ms Beats 68.18%
Memory 55.78 MB Beats 94.06%
 */

function longestPalindrome(s: string): number {
  const hash:Record<string,number> = {}
  for(let i=0; i<s.length; i++){
    if(s[i] in hash){
      hash[s[i]]++;
    } else {
      hash[s[i]]=1;
    }
  }
  let count = 0, hasOdd = false;
  for(let str in hash) {
    if(hash[str] % 2 !== 0){ //odd
      count += hash[str] - 1; // use the odd's largest even portion
      hasOdd = true;
    } else {//evens
      count += hash[str];
    }
  }
  return hasOdd ? count + 1 : count; //add the odd count with 1
};
console.log(longestPalindrome("abccccdd"))//7 dccaccd
console.log(longestPalindrome("a"))//1
console.log(longestPalindrome("bananas"))//5 anana