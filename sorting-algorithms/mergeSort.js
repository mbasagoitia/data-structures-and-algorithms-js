// Divide the array from its middle index into subarrays, each containing only one element

// Repeatedly merge subarrays to produce new sorted sub arrays until there is
// one sorted subarray remaining

// When merging subarrays, check to see if they are not empty. If they are not,
// check the first element in each array and push the smallest to a new temporary array
// Repeat this process if the arrays are still not empty

function mergeSort(arr) {
    // Base case
    if (arr.length < 2) {
        return arr;
    }
    // Calculate middle index and split into two subarrays
    const middleIdx = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIdx);
    const rightArr = arr.slice(middleIdx);
    // mergeSort will be called on each array until each contains only one
    // element, at which point those values will be passed to merge
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArr = [];
    // While the length on both arrays is positive (not zero)
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            // We use shift() instead of leftArr[0] because we also want to remove it from the left array
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    // When one of the arrays is empty, we merge the sorted array with whichever
    // array still contains the sorted elements
    return [...sortedArr, ...leftArr, ...rightArr];
}

// Big-O: O(nlog(n))

// Without comments

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middleIdx = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIdx);
    const rightArr = arr.slice(middleIdx);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}