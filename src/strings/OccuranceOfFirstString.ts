/*
Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.


Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

Runtime 0 ms Beats 100.00%
Memory 55.32 MB Beats 59.83%
 */

function strStr(haystack: string, needle: string): number {
  const nLen = needle.length, hLen = haystack.length;
  if(hLen === nLen) {
    if(haystack===needle){
      return 0;
    } else{
      return -1;
    }
  }
  for(let i=0; i<=hLen- nLen; i++) {
    if(haystack.slice(i, i+nLen) === needle){
      return i;
    }
  }
  return -1;
};

//console.log(strStr("sadbutsad", "sad"))//0
//console.log(strStr("leetcode", "leeto"))//-1
//console.log(strStr("hello", "ll"))//2
//console.log(strStr("a", "a"))//0
console.log(strStr("abc", "c"))//2