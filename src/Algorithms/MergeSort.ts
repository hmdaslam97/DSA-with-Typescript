/*
Merge sort

Merge sort is an efficient, divide-and-conquer sorting algorithm that is
implemented in JavaScript using two main functions: a recursive function to split
the array into halves and a helper function to merge the sorted sub-arrays.

The algorithm requires a mergeSort function (for splitting) and a merge helper function (for combining).

How Merge Sort Works
1, Divide: The original unsorted array is recursively split into smaller sub-arrays
until each sub-array contains only one element. A single-element array is
considered sorted by definition.

2, Conquer (Sort): The single-element sub-arrays are then merged back together
in sorted order. Elements from two adjacent sorted sub-arrays are compared, and
the smaller one is placed into a new, larger sorted array.

3, Combine: This merging process continues, combining larger and larger sorted
arrays until the entire array is sorted.

Complexity Analysis
Time Complexity: Merge Sort has a consistent time complexity of O(n log n) for
best, average, and worst cases, making it very efficient for large datasets.
Space Complexity: It typically requires O(n) auxiliary space because temporary
arrays are needed during the merging process, a potential drawback compared to
in-place algorithms like Quicksort.
Stability: Merge Sort is a stable sorting algorithm, meaning it preserves the
relative order of equal elements in the original array.

 */
function mergeHalf(left:number[], right:number[]): number[] {
    let resultArray:number[] = [],
        leftIndex = 0,
        rightIndex = 0;

    // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // Move to the next element in the `left` array
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // Move to the next element in the `right` array
        }
    }

    // Concatenate the remaining elements from either `left` or `right` (if any)
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

function mergeSort(array:number[]): number[] {
    // Base case: If the array has only one element, return it (already sorted)
    if (array.length === 1) {
        return array;
    }

    // Divide the array into two halves
    const middle = Math.floor(array.length / 2); // Find the middle index
    const left = array.slice(0, middle); // Split the array into left half
    const right = array.slice(middle); // Split the array into right half

    // Recursively call mergeSort on the left and right halves
    return mergeHalf(
        mergeSort(left), // Recursively sort the left half
        mergeSort(right) // Recursively sort the right half
    );
}

//console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
console.log(mergeSort([1,3,2,4]));