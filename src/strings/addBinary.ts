/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

Runtime 2 ms Beats 51.95%  Memory 55.84 MB Beats 88.22%
 */

function addBinary(a: string, b: string): string {

  let result:string[] = [];

  let carry = 0;
  for(let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    const num1 = parseInt(a[i] ?? "0");
    const num2 = parseInt(b[j] ?? "0");
    const sum = num1 + num2 + carry;

    carry = sum > 1 ? 1 : 0;
    result.push(sum % 2 === 1 ? "1" : "0");
  }
  if(carry){
    result.push("1")
  }
  return result.reverse().join("");
};

//console.log(addBinary("11", "1"))//"100"
console.log(addBinary("01", "01"))//"10"
//console.log(addBinary("1010", "1011"))//"10101"