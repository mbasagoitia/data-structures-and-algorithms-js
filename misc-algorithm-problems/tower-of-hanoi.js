// Puzzle with three rods and a number of disks n with varying diameters.
// You must move the entire stack to the last rod, obeying the following rules:

// Only one disk may be moved at a time.

// Each move will involve taking the upper disk from one of the stacks and placing it on top
// of another stack or an empty rod.

// You may only place a disk on top of a larger disk.

// With two disks (n = 2)

// Shift n-1 disks from A to B, using C when required
// Shift last disk from A to C
// Shift n-1 disks from B to C, using A when required

function towerOfHanoi (n, fromRod, toRod, usingRod) {
    // Base case: move last disk from A or B to C
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    // Shift n-1 disks from A to B, using C when required
    towerOfHanoi(n-1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    // Shift n-1 disks from B to C, using A when required
    towerOfHanoi(n-1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

// Big-O: O(2^n)

// Without comments

function towerOfHanoi (n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

// Summary of logic

// Move the top n-1 disks from fromRod to usingRod, using toRod as an auxiliary rod.
// Move the remaining single disk (n) from fromRod to toRod.
// Move the n-1 disks from usingRod to toRod, using fromRod as an auxiliary rod.

// First, move the top smaller disks from the source rod to the auxiliary rod.
// Then, move the largest remaining disk to the destination rod.
// Finally, move the smaller disks from the auxiliary rod to the destination rod.