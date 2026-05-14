/*
1108. Defanging an IP Address
Easy
Topics
premium lock icon
Companies
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".



Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"


Constraints:

The given address is a valid IPv4 address.
Runtime 35 ms Beats 91.86%
Memory 55.40 MB Beats 23.26%
*/

function defangIPaddr(address: string): string {

  let str = "";
  for(let i=0; i<address.length; i++){
    if(address[i] === "."){
      str += "[.]";
    } else {
      str += address[i]
    }
  }
  return str
};

console.log(defangIPaddr("1.1.1.1"))//"1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0"))//"255[.]100[.]50[.]0"