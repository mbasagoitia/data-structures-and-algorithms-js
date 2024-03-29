# Big-O Notation

Represents the worst-case complexity of an algorithm

Expressed in terms of input

## Time Complexity

Time complexity is expressed as the number of times the algorithm runs based on input size (n);
Big-O notation does not get caught up in the smaller details of an algorithm not affected by input size, such as the return statement, for example. So, any extra steps like this can be omitted from the calculation.

O(n): Linear time complexity: As the size of the input increases, the time complexity also increases.
Generally, if there is a loop in your algorithm, the time complexity is at least linear.

O(1): Constant time complexity: Regardless of the input (n), one iteration occurs.

O(n*2): Quadratic time complexity: Occurs when there are two nested loops and the time complexity increases exponentially as n increases.

O(n*3): Cubic time complexity (three nested loops)

O(logn): Logarithmic time complexity: Input size reduces by half every iteration.

## Space Complexity

O(1): Constant space complexity: Memory needed does not depend on input size. Sorting algorithms that sort the same array without using additional arrays have O(1) space complexity.

O(n): Linear space complexity: Extra space needed grows as input size grows.

O(logn): Logarithmic space complexity: Extra space needed grows, but not at the same rate as input size (n).

Try to avoid quadratic space complexity.

## Big-O with Objects

Actions and their Big-O time-complexity:

Insert, Remove, Access: 0(1)
Search, Object.keys(), Object.values(), Object.entries(): O(n)

## Big-O with Arrays

Actions and their Big-O time-complexity:

Insert/remove at end (push(), pop()): O(1)
Insert/remove at beginning(shift(), unshift()): O(n) (because index has to be updated for every remaining element)

Access: O(1)
Search: O(n)

concat(), slice(), splice(): O(n)

forEach(), map(), filter(), reduce(): O(n)

Note that if your solution using a method like forEach or map uses a for loop inside of it, the time complexity will become quadratic.