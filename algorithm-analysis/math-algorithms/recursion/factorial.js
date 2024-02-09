// Given an integer n, find the factorial of that integer
// The factorial is the product of all positive integers less than or equal to n
// Factorial of 0 = 1

// My solution (iterative)

function factorial(n) {
    let product = 1;
    // Could also use an incrementing loop starting at 2 and ending at i <= n
    for (let i = n; i > 0; i--) {
        product *= i;
    }
    return product;
}

// Big-O: O(n) (linear)

// My solution (recursive)

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// factorial(1) returns 1 according to the base case
// factorial(2) returns 2 (2 * return value from factorial(1) which is 1)
// factorial(3) returns 6 (3 * return value from factorial(2) which is 2)

//Big-O: O(n) (linear)

