// Identify the pivot element in the array (can be first, last, median, random element)
// We will use the last element as the pivot in this solution

// Traverse the entire array and put everything that is smaller than the pivot
// into a "left" array and everything greater than the pivot into a "right" array

// Repeat the process for the individual left and right arrays until you have an array of length 1
// which is sorted by definition

// Repeatedly concatenate the left array, pivot, and right array until you have one sorted array

// This solution is good if you don't have any space constraints, as it does take up extra memory

function quickSort (arr) {
    // Base case
    if (arr.length < 2) {
        return arr;
    }
    // Identify pivot and make two arrays to hold elements you'll compare against the pivot
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    // We go up to but not including arr.length - 1 because that is the pivot and
    // is already accounted for
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // This will repeat until the base case is reached (arr of length 1)
    // The array that quickSort is called on gets shorter because left and right will get
    // split into smaller and smaller arrays

    // Finally, return one array with the values from the sorted left array, the pivot, and the sorted right array
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Big-O:
// Worst case: O(n^2) (quadratic) (sorted array)
// Average case: O(nlog(n)) (Logarithmic) (unsorted array)

// To better understand the recursive nature of the quickSort algorithm, I will break it down into smaller
// pieces, starting with one full array

function quickSort (arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// First call: quickSort([6, 5, 2, 1, 8, 9, 3, 4])
// Base case is skipped
// Splits into two arrays, [2, 1, 3] and [6, 5, 8, 9]
// Returns [...quickSort([2, 1, 3]), 4, ...quickSort([6, 5, 8, 9])]
// Let's dive into the left half of the problem

// quickSort([2, 1, 3])
// Base case is skipped
// 3 is new pivot
// Splits into two arrays, [2, 1] and []
// Returns [...quickSort([2, 1]), 3, ...quickSort([])]
// Again, we will look at the left side

// quickSort([2, 1])
// Base case is skipped
// 2 is new pivot
// Splits into two arrays, [1] and []
// Returns [...quickSort([1]), 2, quickSort([])]
// Look at left side again

// quickSort([1])
// Base case is reached, returns [1]

// Now this return value "bubbles up" the call stack

// At the next level up, quickSort([2, 1]) returns [...[1], 2, ...[]] or [1, 2]
// Next level up, quickSort([2, 1, 3]) returns [...[1], 2, ...[]], 3, [...[]] or [1, 2, 3]

// We now know the return value of quickSort([2, 1, 3]) and would plug that in and 
// concatenate that with 4 (original pivot) and the return value from quickSort([6, 5, 8, 9])
