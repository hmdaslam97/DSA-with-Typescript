/* Zigzag Conversion Medium
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of
rows like this: (you may want to display this pattern in a fixed font for better legibility)
1 row => current item + 3 => 3^i
2nd row => every odd numbers index items => i+(3-1)
3rd row => 2,6,10,14 => current item +4 => ((3+1)^i)-i
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

1st row => 4^i
Example 3:

Input: s = "A", numRows = 1
Output: "A"
*/

function convert(s: string, numRows: number): string {
  const arr = new Array(numRows).fill("");
  let goDown = false, index=0;

  // base case: if num of rows to be formed is same as string length or 1 row?
  if(numRows ===1 ||numRows >= s.length) {
    return s;
  }

  for(let i=0; i<s.length; i++) {
    if(index ===0 || index===(numRows-1)){ // if index is same as 0 or numRows-1
      goDown = ! goDown; // change direction
    }

    arr[index]+=s[i]; // keep adding each char in respective rows

    if(goDown){
      index++;
    } else{
      index--;
    }
  }

  return arr.join("");
};

//console.log(convert("PAYPALISHIRING", 3))//PAHNAPLSIIGYIR
//console.log(convert("PAYPALISHIRING", 4))//PINALSIGYAHRPI
console.log(convert("AB", 1))//AB
