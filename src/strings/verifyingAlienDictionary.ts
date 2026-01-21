/* 
953. Verifying an Alien Dictionary : Easy
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

Constraints:
1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.

Runtime 3ms Beats 23.46% Memory 51.73MB Beats 46.34%
Runtime 1ms Beats 53.09% Memory 51.89MB Beats 32.93%

 */
function isAlienSorted(words: string[],order: string): boolean {
  /* 
  >Hash the order string to a variable in the format like {h:0, l:1, a:2, ...}
  >Run a forEach loop and find word that is largest.
  >return false if index of largest word is not words.length-1
  >if current < previous return false
 */
  const orderHash: any = {}
  for (let i = 0;i < order.length;i++) {
    orderHash[order[i]] = i;
  }
  for (let i = 0;i < words.length-1;i++){//0 to last second word
    for (let j = 0;j < words[i].length;j++){
      if (orderHash[words[i][j]] > orderHash[words[i + 1][j]] || //current > next
          orderHash[words[i + 1][j]] === undefined) { //next is undefined
        return false;
      } else if (orderHash[words[i][j]] < orderHash[words[i + 1][j]]) {
        break;
      }
    }
  }
  return true;  
};

console.log(isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz"))//true
console.log(isAlienSorted(["kuvp","q"], "ngxlkthsjuoqcpavbfdermiywz"))//true
console.log(isAlienSorted(["ord","world"], "worldabcefghijkmnpqstuvxyz"))//false
console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"))//false
console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"))//false
console.log(isAlienSorted(["app","apple", "appla"], "abcdefghijklmnopqrstuvwxyz"))//false
console.log(isAlienSorted(["app","apple", "applf"], "abcdefghijklmnopqrstuvwxyz"))//true