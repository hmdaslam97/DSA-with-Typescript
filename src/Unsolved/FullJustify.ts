/*
Text Justification: Hard
Given an array of strings words and a width maxWidth, format the text such that
each line has exactly maxWidth characters and is fully (left and right) justified.
You should pack your words in a greedy approach; that is, pack as many words as
you can in each line. Pad extra spaces ' ' when necessary so that each line has
exactly maxWidth characters.
Extra spaces between words should be distributed as evenly as possible. If the
number of spaces on a line does not divide evenly between words, the empty slots
on the left will be assigned more spaces than the slots on the right.
For the last line of text, it should be left-justified, and no extra space is
inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.

Example 1:
Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
"This    is    an",
"example  of text",
"justification.  "
]

Example 2:
Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
"What   must   be",
"acknowledgment  ",
"shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.

Example 3:
Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
"Science  is  what we",
"understand      well",
"enough to explain to",
"a  computer.  Art is",
"everything  else  we",
"do                  "
]

Constraints:
1 <= words.length <= 300
1 <= words[i].length <= 20
words[i] consists of only English letters and symbols.
1 <= maxWidth <= 100
words[i].length <= maxWidth

maxWidth
|                   |
j=0, arr=[], k=0
for 0 to words.length
  lengths += words[i].length
  if(lengths + (i) >= maxWidth )
    arr[j].push(giveSentence(k, i))
    j++;
    k=i;
return arr;
 */

function fullJustify(words: string[], maxWidth: number): string[] {
  let j = 0, arr: string[] = [], k = 0, lengths = 0;

  function giveSentence(start: number, stop: number): string {
    const lineWords = words.slice(start, stop);
    const totalChars = lineWords.reduce((sum, word) => sum + word.length, 0);
    const totalSpaces = maxWidth - totalChars;
    const gaps = lineWords.length - 1;

    if (gaps === 0) {
      return lineWords[0] + " ".repeat(totalSpaces);
    }

    const spacesPerGap = Math.floor(totalSpaces / gaps);
    const extraSpaces = totalSpaces % gaps;

    let result = "";
    for (let i = 0; i < lineWords.length - 1; i++) {
      result += lineWords[i] + " ".repeat(spacesPerGap + (i < extraSpaces ? 1 : 0));
    }
    result += lineWords[lineWords.length - 1];
    return result;
  }

  for (let i = 0; i < words.length; i++) {
    lengths += words[i].length;

    if (lengths + i - k > maxWidth) {
      arr[j] = giveSentence(k, i);
      j++;
      lengths = words[i].length;
      k = i;
    }
  }

  arr[j] = giveSentence(k, words.length);
  return arr;
};

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))
//[
//"This    is    an",
//"example  of text",
//"justification.  "
//]