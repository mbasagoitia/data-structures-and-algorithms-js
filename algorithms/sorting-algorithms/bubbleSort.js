// This is a poor sorting algorithm and should generally not be used in
// a real-world situation.

// Bubble sort compares adjacent elements in the array and swaps their positions
// if they are not in the intended order.

// If at least one swap has occurred, the process will repeat until the entire array is sorted.
// The large number "bubbles" to the top, hence the name.

// Use of a temporary variable "temp" is useful for swapping array indices

// Make sure to have the swapped = false in the correct place (right at the beginning
// of the do...while loop, not at the beginning of each iteration of the for loop).

// The for loop only needs to compare up to arr.length - 1 because we always check the next index, so the
// last element is already covered.

function bubbleSort (arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

// Instead of using the temporary variable to swap arr[i] and arr[i + 1],
// you can use destructuring syntax: [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

// Big-O: O(n^2) (quadratic)