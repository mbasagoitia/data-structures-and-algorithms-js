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
