// Reverse an Array:
// Given an array, reverse the order of its elements. For example, [1, 2, 3] should become [3, 2, 1].

// My solution

function reverseArray (arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Alternative solution

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

// My solution

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

// Alternative solution

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
  }
  

// Calculate the Sum of Elements:
// Sum all the elements in an array and return the result.

function sumArr (arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Using the reduce method is also a good solution, but the constraint here
// Is to not use built-in array methods

// Find the Average of Elements:
// Calculate the average of all elements in an array.

function avg (arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

// Rotate an Array to the Left:
// Given an array and a number 'n', rotate the array to the left by 'n' positions.

// My solution

function rotateLeft (arr, n) {
    let firstNums = arr.slice(0, n);
    let rotated = arr.slice(n, arr.length);
    return [...rotated, ...firstNums];
}

// Alternative solution

// Remove the first element from the array and add it to the end of the array. This creates a left shift.
// Repeat n times.

function rotateLeft(arr, n) {
    for (let i = 1; i <= n; i++) {
      const firstNum = arr.shift();
      arr.push(firstNum);
    }
    return arr;
  }
  

// Check if an Array is Sorted:
// Write a function to check if the elements of an array are in ascending or descending order.

// My solution

function isSorted (arr) {
    let sortedAsc = true;
    let sortedDesc = true;

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if (arr.length <= 1) {
        return "invalid array";
    }

    while (rightIdx > 0 && leftIdx < arr.length - 1) {
        (arr[leftIdx] <= arr[leftIdx + 1]) ? leftIdx ++ : sortedAsc = false;
        (arr[rightIdx] <= arr[rightIdx - 1]) ? rightIdx -- : sortedDesc = false;
        if (!sortedAsc && !sortedDesc) {
            return "not sorted";
        }
    }
    return sortedAsc ? "sorted in ascending order" : "sorted in descending order";
}

// Remove Duplicates from an Unsorted Array:
// Remove duplicate elements from an unsorted array without using built-in methods.

// My solution

function removeDuplicates(arr) {
    const keyCount = {};
    const uniqueArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      keyCount.hasOwnProperty(arr[i]) ? keyCount[arr[i]]++ : (keyCount[arr[i]] = 1);
  
      if (keyCount[arr[i]] === 1) {
        uniqueArr.push(arr[i]);
      }
    }
  
    return uniqueArr;
  }

  // Solution using sets

  function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    const uniqueArr = [...uniqueSet];
  
    return uniqueArr;
  }
  
  

// Find the Second Largest Element:
// Write a function to find the second largest element in an array.

// My solution

function secondLargest (arr) {
    if (arr.length < 2) {
        return "inavlid array";
      }

    let largestIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[largestIdx] < arr[i]) {
            largestIdx = i;
        }
    }
    arr.splice(largestIdx, 1);
    return Math.max(...arr);
}

// Alternative solution

function secondLargest(arr) {
    if (arr.length < 2) {
      return "Invalid array. Not enough elements to find the second largest.";
    }
  
    let largest = arr[0];
    let secondLargest = arr[1];
  
    // Ensure largest and secondLargest are correctly initialized
    if (secondLargest > largest) {
      [largest, secondLargest] = [secondLargest, largest];
    }
  
    // Iterate through the array to find the largest and second-largest
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  

// Union of Two Arrays:
// Given two arrays, find their union (unique elements from both arrays).

// My solutions

function union (arr1, arr2) {
    let combined = [...arr1, ...arr2];
    // then repeat steps above for removeDuplicates function
}

function union (arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]));
}

// Alternate solution

function union(arr1, arr2) {
    const unionSet = new Set(arr1);
  
    for (let element of arr2) {
      unionSet.add(element);
    }
  
    return Array.from(unionSet);
  }
  

// Intersection of Two Arrays:
// Given two arrays, find their intersection (common elements in both arrays).

// My solution

function intersection(arr1, arr2) {
    const keyCount = {};
    const intersectionArr = [];

    for (let element of arr1) {
      keyCount[element] = (keyCount[element] || 0) + 1;
    }

    for (const element of arr2) {
      if (keyCount[element]) {
        intersectionArr.push(element);
        // Some solutions included this line, not sure why
        keyCount[element]--;
      }
    }
    return Array.from(new Set(intersectionArr));
  }
    
  // Alternate solution

  function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersectionSet = new Set();
  
    for (let element of arr2) {
      if (set1.has(element)) {
        intersectionSet.add(element);
      }
    }
  
    return Array.from(intersectionSet);
  }
  
// Find the Missing Number:
// Given an array containing 'n' distinct numbers taken from the range 0 to 'n', find the missing number.

// n is the length of the given array and last number of the expected array

function missingNum (arr) {
    // calculate actual sum
    // const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    // But since our constraint is to not use built-in array methods...
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    const n = arr.length;
    // calculate expected sum
    let expectedSum = 0;
    for (let i = 0; i <= n; i++) {
        expectedSum += i;
    }
    let missingNum = expectedSum - actualSum;
    return missingNum;
}

// Alternate solution

function missingNum(arr) {
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
      actualSum += arr[i];
    }
  
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
  
    let missingNum = expectedSum - actualSum;
    return missingNum;
  }

  // Iterative solution

  function missingNum(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      if (arr[i + 1] - arr[i] !== 1) {
        return arr[i] + 1;
      }
    }
  
    return arr[n - 1] === n ? 0 : n;
  }
  

// Move Zeros to the End:
// Given an array, move all zeros to the end without changing the order of non-zero elements.

