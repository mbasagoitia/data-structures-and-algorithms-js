// Given a sorted array of n elements and a target element t, 
// find the index of t in the array.
// Return -1 if the target element is not found.

function binarySearch (arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

// Big-O: O(logn) (logarithmic)

// Recursive solution

function binarySearchRecursive (arr, target) {
    return search (arr, target, 0, arr.length - 1)
}

function search (arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
        return middleIndex;
    }
    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}

// Big-O: O(logn) (logarithmic)