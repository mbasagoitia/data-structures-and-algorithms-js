// Virtually split the array into a sorted and unsorted part

// Assume that the first element is sorted and the rest are unsorted

// Select an unsorted element and compare with all elements in the sorted part

// If the elements in the sorted part are smaller than the selected element,
// proceed to the next unsorted element. Otherwise, shift larger elements in the 
// sort part to the right.

// Insert the selected element at the correct index

// Repeat until all unsorted elements are in their correct places

function insertionSort (arr) {
    // We start at index 1 because the first element is assumed to be sorted
    for (let i = 1; i < arr.length ; i++) {
        let numberToInsert = arr[i];
        // j is the index of the sorted element
        let j = i - 1;
        // Iterate back through the sorted part of the array until index 0
        while (j >= 0 && arr[j] > numberToInsert) {
            // All sorted elements greater than the NTI are shifted to the right by one index
            arr[j + 1] = arr[j];
            j--;
        }
        // arr[j] is where the insertion has to happen and where the while loop condition fails (arr[j] < NTI)
        // So, we insert NTI to the right of that number arr[j] at the position arr[j + 1]
        arr[j + 1] = numberToInsert;
    }
}

// Big-O: O(n^2) (quadratic)

// Solution without comments

function insertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = numberToInsert;
    }
}