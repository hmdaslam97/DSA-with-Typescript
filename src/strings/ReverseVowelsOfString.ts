/*
345. Reverse Vowels of a String
Easy
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.

Runtime 5 ms Beats 85.61% O(n)
Memory 60.22 MB Beats 96.80% O(n)
 */
function reverseVowels(s: string): string {
  const sArr = s.split(""),
        l = s.length,
        vowels = new Set(["a", "e", "i","o", "u", "A", "E", "I","O", "U"]);
  let lI = 0, rI = l-1;

  while(lI <rI) {
    if(vowels.has(sArr[lI])) {
    // Got a vowel from left hand side

      while(rI >lI){
        if(vowels.has(sArr[rI])){
          // Got a vowel from right hand side

          if(sArr[lI]!==sArr[rI]) {
            // Swapping unmatched vowel from left with vowel from right.
            const temp = sArr[rI];
            sArr[rI] = sArr[lI];
            sArr[lI] = temp;

            rI--;
            break;
          } else {
            // for matching words just skipping.
            rI--;
            break;
          }
        }
        rI--;
      }
    }
    lI++;
  }

  return sArr.join("")
};

console.log(reverseVowels("IceCreAm"))// AceCreIm
console.log(reverseVowels("leetcode"))// leotcede
console.log(reverseVowels(" apG0i4maAs::sA0m4i0Gp0"))// " ipG0A4mAas::si0m4a0Gp0"