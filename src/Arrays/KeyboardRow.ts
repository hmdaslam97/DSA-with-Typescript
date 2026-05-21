/*
500. Keyboard Row
Easy
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]

Output: ["Alaska","Dad"]

Explanation:

Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

Example 2:
Input: words = ["omk"]

Output: []

Example 3:
Input: words = ["adsdf","sfd"]

Output: ["adsdf","sfd"]

Constraints:
1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase).

Runtime 0 ms Beats 100.00%
Memory 55.57 MB Beats 31.08%
 */

function findWords(words: string[]): string[] {
  const row1 = {"q":true, "w":true, "e":true, "r":true, "t":true, "y":true, "u":true, "i":true, "o":true, "p":true},
        row2 = {"a":true, "s":true, "d":true, "f":true, "g":true, "h":true, "j":true, "k":true, "l":true},
        row3 = {"z":true, "x":true, "c":true, "v":true, "b":true, "n":true, "m":true},
        checkInRow = function(word:string, row:Record<string,boolean>):boolean{
          for(let i=0; i<word.length; i++){
            if(!(word[i] in row)){
              return false;
            }
          }
          return true;
        };

  let res= [];
  for(let i=0; i<words.length; i++){
    const word = words[i], lowerWord = word.toLocaleLowerCase();
    if(checkInRow(lowerWord, row1)) {
      res.push(word)
    } else if(checkInRow(lowerWord, row2)) {
      res.push(word)
    } else if(checkInRow(lowerWord, row3)) {
      res.push(word)
    }
  }

  return res
};

console.log(findWords(["Hello","Alaska","Dad","Peace"])) //["Alaska","Dad"]
console.log(findWords(["omk"])) //[]
console.log(findWords(["adsdf","sfd"])) //["adsdf","sfd"]
console.log(findWords(['a', 'b'])) //['a', 'b']