/*
2705. Compact Object
Medium
Given an object or array obj, return a compact object.
A compact object is the same as the original object, except with keys containing
falsy values removed. This operation applies to the object and any nested objects.
Arrays are considered objects where the indices are keys. A value is considered
falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

Example 1:
Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.

Example 2:
Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Example 3:
Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.


Constraints:
obj is a valid JSON object
2 <= JSON.stringify(obj).length <= 106

Runtime 53 ms   Beats 99.07%
Memory 65.29 MB Beats 91.16%
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  function checkFalsy(val:JSONValue):Boolean{
    return Boolean(val);
  }

  function helper(item:Obj):Obj {
    if (item instanceof Array) {
      let res:Array<JSONValue> =[]
      item.forEach((element)=>{
        if(!(element instanceof Array) && !(element instanceof Object)){
          if(checkFalsy(element)){ // add only truthy value
            res.push(element)
          }
        } else {  // object
          res.push(helper(element))
        }
      })
      return res;
    } else { // Object
      let resObj:Record<string, JSONValue> = {}
      Object.keys(item).forEach((key)=>{
        const val = item[key]
        if(!(val instanceof Array) && !(val instanceof Object)){
          if(checkFalsy(val)){ // add only truthy value
            resObj[key]=val;
          }
        } else {  // object
          resObj[key] = helper(val)
        }
      })
      return resObj;
    }
  }
  return helper(obj)
};
console.log(compactObject([null, 0, false, 1]))//[1]
console.log(compactObject({"a": null, "b": [false, 1]}))//{"b": [1]}
console.log(compactObject([null, 0, 5, [0], [false, 16]]))//[5, [], [16]]