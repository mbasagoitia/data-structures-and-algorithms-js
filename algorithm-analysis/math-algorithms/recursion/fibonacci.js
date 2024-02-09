// Given a number n, find the first n elements of the fibonacci sequence

// Fibonacci sequence: a sequence in which each number is the sum of the two preceding ones, 
// and the first two numbers of the sequence are 0 and 1
// So, fibonacci(2) = [0, 1]
// fibonacci(2) = [0, 1, 1]

// My solution (first try)

function fibonacci(n) {
    // First two numbers are always 0 and 1
    const sequence = [0, 1];
    // Initialize i to index 2 since we already have index 0 and 1
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i-2] + sequence[i-1];
    }
    return sequence;
}

// Alternative solution

function fibonacci(n) {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 2] + sequence[i - 1]);
        }
    }
    return sequence;
}

// Big-O: O(n) (linear)

// Recursive solution

function fibonacciRecursive(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const sequence = fibonacciRecursive(n - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return sequence;
    }
}

// Slightly different version
// Given a number n, find the nth element of the fibonacci sequence

// Iterative solution

function fibonacciIterative(n) {
    if (n <= 0) {
        return null;
    }
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }

    let prev = 0;
    let current = 1;

    for (let i = 3; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}

// Big-O: O(n) (linear)

// Recursive solution

function fibonacciRecursive(n) {
    // Base cases
    if (n <= 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    // Recursive case
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}


// It's necessary to remember the return value of each function call, because
// that is what will be used for the calculation in the next call

// fibonacciRecursive(1) returns 0 according to the first base case
// fibonacciRecursive(2) returns 1 according to the second base case
// fibonacciRecursive(3) returns 1 (1 + 0) (from previous two calls)
// fibonacciRecursive(4) returns 2 (return value from fibonacciRecursive(3) + 1)
// fibonacciRecursive(5) returns 3 (return value from fibonacciRecursive(4) + return value from fibonacciRecursive(3))

// Note that the below solution counts numbers of the sequences as indices (starting at 0 instead of 1)

function fibonacciRecursive(n) {
    // Base case
    if (n < 2) {
        return n;
    }
    // Recursive case
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Big-O: (2^n) (not optimal)
