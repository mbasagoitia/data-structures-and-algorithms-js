// Given two finite, non-empty sets, find their cartesian product
// The cartesian product of two sets A and B (AxB) is the set of all ordered pairs
// (a, b) where a is in A and b is in B

// const A = [1, 2]
// const B = [3, 4]
// AxB = [[1, 3], [1, 4], [2, 3], [2, 4]]

// So, traverse each set (array) and pair each element in the first array with each element in the second array

// My solution

function cartesianProduct (set1, set2) {
    const cp = [];
    for (let i = 0; i < set1.length; i++) {
        for (let j = 0; j < set2.length; j++) {
            cp.push([set1[i], set2[j]]);
        }
    }
    return cp;
}

// Big-O: O(m*n) dependent on length of both arrays. If both arrays are the same length, it would be O(n^2)