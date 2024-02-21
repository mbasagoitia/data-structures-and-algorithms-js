// Given a staircase of n steps, count the number of distinct ways to climb to the top.
// You can either climb 1 or 2 steps at a time.

// n = 1: 1 way (1)
// n = 2: 2 ways (1, 1) or (2)

// You can only reach a stair from either n-1 or n-2
// Calculate the ways we can climb to n-1 and n-2 and add the two
// climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)

// This looks VERY similar to the fibonacci sequence!

// Recursive solution

function climbingStaircase (n) {
    if (n <= 2) {
        return n;
    }
    return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}

// Iterative solution

function climbingStaircase (n) {
    const count = [1, 2];
    for (let i = 2;i <= n; i++) {
        count[i] = count[i - 1] + count[i - 2];
    }
    return count[n - 1];
}