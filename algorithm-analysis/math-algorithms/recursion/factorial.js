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

//Big-O: O(n) (linear)

