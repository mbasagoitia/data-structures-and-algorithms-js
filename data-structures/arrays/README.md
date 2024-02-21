# Arrays

## Features and Functionality
Arrays are data structures that store elements in a particular memory location or index. They can contain a mix of different data types and are resizeable. Insertion order is maintained.

Can be declared with the Array constructor:
const array = new Array()

or using array literal notation:
const array = [];

Have a variety of array methods available used for modifying and looping through the array
for... of loop

## Array Operations
In the exercises in the corresponding folder, I am implementing common array operations to solve problems without using built-in array methods.

Using loops, conditionals, and variables to perform the operation.

## Built-In Array Methods

- push/pop
- unshift/shift
- map
- filter
- foreach
- reduce
- concat
- slice
- splice

## Time Complexity of Built-in Array Methods

With arrays, it is very important to maintain the proper index any time we perform an operation.

- Insert/remove from end: O(1) (constant)
- Insert/remove from beginning: O(n) (linear) because index must be reset for every element in the array
- Access: O(1)
- Search: O(n)

So,

- push/pop: O(1)
- shift/unshift/concat/slice/splice: O(n)
- forEach, map, filter, reduce: O(n)