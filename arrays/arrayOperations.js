// Reverse an Array:
// Given an array, reverse the order of its elements. For example, [1, 2, 3] should become [3, 2, 1].

function reverseArray (arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      // Swap elements at start and end indices
      [arr[start], arr[end]] = [arr[end], arr[start]];
  
      // Move indices towards the center
      start++;
      end--;
    }
  
    return arr;
  }

// Find the Maximum and Minimum Elements:
// Write a function to find the maximum and minimum elements in an array.

function minMax (arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
  }
  

// Calculate the Sum of Elements:
// Sum all the elements in an array and return the result.

// Find the Average of Elements:
// Calculate the average of all elements in an array.

// Rotate an Array to the Left:
// Given an array and a number 'n', rotate the array to the left by 'n' positions.

// Check if an Array is Sorted:
// Write a function to check if the elements of an array are in ascending or descending order.

// Remove Duplicates from an Unsorted Array:
// Remove duplicate elements from an unsorted array without using built-in methods.

// Find the Second Largest Element:
// Write a function to find the second largest element in an array.

// Union of Two Arrays:
// Given two arrays, find their union (unique elements from both arrays).

// Intersection of Two Arrays:
// Given two arrays, find their intersection (common elements in both arrays).

// Find the Missing Number:
// Given an array containing 'n' distinct numbers taken from the range 0 to 'n', find the missing number.

// Move Zeros to the End:
// Given an array, move all zeros to the end without changing the order of non-zero elements.