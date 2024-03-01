// Given a natural number n, determine if the number is prime or not

// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    // If n is divisible by any numbers smaller than it, the function will return false
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    // If the loop is finished and hasn't returned false, it returns true (n was not divisible by any values of i)
    return true;
}

// Big-O: O(n) (linear)

// More optimized solution
// When you check factors, you only need to check up to (and including) the square root.
// If a number has no factors up to its square root, it won't have any factors beyond that either

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Big-O: O(sqrt(n))