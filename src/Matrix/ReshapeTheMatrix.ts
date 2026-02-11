/*
566. Reshape the Matrix
Easy
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix
into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number
of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix
in the same row-traversing order as they were.
If the reshape operation with given parameters is possible and legal, output the
new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

Example 2:
Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]

Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300

Runtime 0 ms Beats 100.00%
Memory 59.36 MB Beats 92.41%

Time Complexity: O(m × n)
mat.flat() → O(m×n) - traverses all m×n elements
Loop iteration: (m×n)/c iterations
Each slice(i, i+c) → O(c) time
Total loop: ((m×n)/c) × O(c) = O(m×n)
Overall: O(m×n) - required to generate all output elements

Space Complexity: O(m × n)
flatMat array → O(m×n) auxiliary space
res output array → O(m×n) space
Total: O(m×n)
 */

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length, //rows
        n = mat[0]?.length, //columns
        res = []; // Result Array

  // Base case
  if(r*c !== m*n || // if products of both matrices are not same.
     (r===m && c===n)) {// if rows and columns of both matrices are same
    return mat; // then we directly return the orginal matrix as it is.
  }
  else { // products of both matrices are same!
    const flatMat = mat.flat() // Flattening the orginal array to 1D array.
    for (let i=0; i<flatMat.length; i=i+c) { //Reading Flattened array in segments of columns c.
      res.push(flatMat.slice(i, i+c)) // Pushing each of the segments from flatMat array into the result array.
    }
  }
  return res // Returning the final result.
};

//console.log(matrixReshape([[1,2],[3,4]], 1, 4))//[[1,2,3,4]]
//console.log(matrixReshape([[1,2],[3,4]], 4, 1))//[[1],[2],[3],[4]]
//console.log(matrixReshape([[1,2],[3,4]], 2, 4))//[[1,2],[3,4]]
//console.log(matrixReshape([[1,2],[3,4]], 2, 2))//[[1,2],[3,4]]
//console.log(matrixReshape([[1,2, 3,4]], 2, 2))//[[1,2],[3,4]]

////[[1,2],[3,4],[5,6],[7,8],[9,10]]
console.log(matrixReshape([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]], 5, 2))

//[[1,2,3,4,5], [6,7,8,9,10]]
console.log(matrixReshape([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]], 2, 5))