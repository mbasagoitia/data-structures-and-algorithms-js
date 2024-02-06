// Rotate left

function rotateLeft (arr, n) {
    const rotations = n % arr.length
    for (let i = 1; i <= rotations; i++) {
        let first = arr.shift();
        arr.push(first);
    }
    return arr;
}

// Rotate right

function rotateRight (arr, n) {
    const rotations = n % arr.length
    for (let i = 1; i <= rotations; i++) {
        let first = arr.pop();
        arr.unshift(first);
    }
    return arr;
}

// Alternate solution

function rotateLeftInPlace(arr, n) {
    const rotations = n % arr.length;
  
    // Reverse the first part of the array
    reverseArray(arr, 0, rotations - 1);
  
    // Reverse the remaining part of the array
    reverseArray(arr, rotations, arr.length - 1);
  
    // Reverse the entire array
    reverseArray(arr, 0, arr.length - 1);
  
    return arr;
  }
  
  function reverseArray(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
