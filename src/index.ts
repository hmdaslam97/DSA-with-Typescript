/*
171. Excel Sheet Column Number
Easy
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...

Example 1:
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701


Constraints:

1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].

//my solution
Runtime 0 ms Beats 100.00%
Memory 57.82 MB Beats 38.46%

optimized ai solution
Runtime 1 ms Beats 61.54%
Memory 56.85 MB Beats 83.08%
 */

function titleToNumber(columnTitle: string): number {
  if(columnTitle==="") return 0;

  if(columnTitle.toUpperCase()!==columnTitle) {
    columnTitle = columnTitle.toUpperCase()
  }

  const hash: Record<string, number> = {"A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,"I":9,"J":10,"K":11,"L":12,"M":13,"N":14,"O":15,"P":16,"Q":17,"R":18,"S":19,"T":20,"U":21,"V":22,"W":23,"X":24,"Y":25,"Z":26}
  let resNum = 0;
  for(let i=0; i<columnTitle.length; i++){
    if(i===columnTitle.length-1) {
      resNum += hash[columnTitle[i]];
    } else {
      resNum += hash[columnTitle[i]]*Math.pow(26, columnTitle.length-i-1);
    }
  }
  return resNum;
};

console.log(titleToNumber(""))//0
console.log(titleToNumber("A"))//1
console.log(titleToNumber("AB"))//28
console.log(titleToNumber("ZY"))//701
console.log(titleToNumber("ABC"))//731
console.log(titleToNumber("FXSHRXW"))//2147483647