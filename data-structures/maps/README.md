# Maps

A map is an ordered collection of key-value pairs.
Both keys and values can be of any data type.

You can use the corresponding key to retrieve a value.

Maps are iterable and can be used with a for ... of loop

## Maps vs Objects

- Objects are unordered whereas maps are ordered
- Keys in objects can only be strings or symbols, but map keys can be any data type
- An object has a prototype and some default keys, whereas a map does not have any default keys
- Objects are not iterable, whereas maps are
- The number of items in an object must be determined manually, but is readily available in maps with the size property
- You can attach functionality to an object (methods) whereas maps are restricted to just storing data

## Creating a New Map

const map = new Map()

The constructor optionally accepts ONE SINGLE array of arrays with length of 2 (key-value pairs) as arguments.

const myMap = new Map([['a', 1], ['b', 2]])

## Using a For...of Loop With Maps

for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

## Add a New Value

myMap.set('c', 3)

## Check if Key Exists

myMap.has('a') // returns true

## Delete Key/Value Pair

myMap.delete('c')

## Determine Number of Key/Value Pairs

myMap.size // returns 2

## Delete All Key/Value Pairs from Map

myMap.clear()