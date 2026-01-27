/*
Sliding window technique to compute maximum subarray problem

Time Complexity: O(n)
Initial window calculation: O(k)
Loop iteration: O(n - k)
Each loop operation (subtraction, addition, Math.max): O(1)
Overall: O(k) + O(n - k) = O(n) where n is the array length
Space Complexity: O(1)
Only uses a constant amount of extra space for variables: tempSum, maxSum, i, j
No additional data structures that scale with input size
Does it satisfy Sliding Window Technique? ✅ YES
This program is a textbook example of the sliding window technique:

Fixed Window Size: Window of size k slides through the array
Efficient Reuse: Instead of recalculating the sum for each window from scratch (which would be O(n*k)), it:
Computes the sum of the first window once: O(k)
Removes the leftmost element when sliding: tempSum - ar[i]
Adds the new rightmost element: + ar[j]
Single Pass: Iterates through the array once with two pointers (i and j)
Key advantage: Reduces time complexity from O(n*k) (brute force) to O(n) (sliding window)
 */
function maxSum(ar:number[], k:number):number{
  //base case
  if(k>=ar.length){
    return ar.reduce(function(pre, curr, idx){
     return pre+curr;
    });
  }


  //Sliding window technique
  // compute sum of first window
  let tempSum = ar.slice(0,k).reduce((pre,curr)=>pre+curr),
      // initialize maximum sum to be temporary sum value computed
      maxSum = tempSum;

  // Read i from 0 to n-k and j from k to n
  for(let i=0, j=k; i<=ar.length-k, j<ar.length; i++, j++){
    // Compute new temporary sum by substrating left index and adding right index items.
    tempSum = tempSum-ar[i]+ar[j];
    // Compute the max sum by comparision.
    maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum;
}
// Driver Code
const arr = [5, 2, -1, 0, 3];
const k = 3;
console.log(maxSum(arr, k));