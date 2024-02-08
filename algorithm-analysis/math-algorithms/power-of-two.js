// Given a positive integer n, determine if the number is a power of two or not
// It is a power of two if an integer x exists where n === 2^x

function isPowerOfTwo (n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n /= 2;
    }
    // No remainders other than 0 were found and n is now 1, which is a power of two
    return true;
}

// Big-O: O(log(n)) (logarithmic)

// More optimized solution

function isPowerOfTwoBitwise (n) {
    if (n < 1) {
        return false;
    }
    return (n & (n-1)) === 0;
}

// Big-O: O(1) (constant)