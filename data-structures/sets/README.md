# Sets

A set is a data structure that can hold a collection of values. These values must be unique.

Sets can contain a mix of different data types.

Sets are dynamically sized and you do not have to declar the size of a set before creating it. 

Unlike arrays, sets do not maintain an insertion order.

Sets are iterable and can be used with a for ... of loop.

## Sets vs Arrays

- Arrays can contain duplicate values. Sets cannot.
- Insertion order is maintained in arrays, but not in sets.
- Searching and deleting an element in a set is faster than in arrays.

## Creating a New Set

const set = new Set()

The constructor optionally accepts an array as an argument, for example:

const mySet = new Set([1, 2, 3]);

Using a for ... of loop:

for (let value of set) {
    console.log(value);
}

## Adding Values

mySet.add(4)

If you try to add a duplicate value, the set will ignore it.

## Check if Value Exists

mySet.has(4) // logs true

## Delete Value

mySet.delete(3)

## Check set size

mySet.size // returns 3

## Delete all Values

mySet.clear()

