// Iterate through an array, storing the minimum value and updating it as needed
// Place the minimum value at the beginning of the array and store any value
// that was previously at that index where the current minimum was previously
// Loop through the array again as needed and place the new minimum value at the next index

function selectionSort (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}

// Big-O: O(n^2) (quadratic)