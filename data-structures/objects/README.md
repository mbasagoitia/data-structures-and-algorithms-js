# Objects

Unordered collection of key-value pairs. The key must either be a string or symbol data type, and the value can be any data type.

A value can be retrieved by using dot or bracket notation with its corresponding key.

An object is not iterable and you can not use a for ... of loop with it.

Dot or bracket notation can also be used to add key-value pairs to an existing object.

You can also use the delete operator to delete a key-value pair:

delete obj.name

Functions can be values on objects, known as methods. For example,

const obj = {
    name: "Sam",
    age: 25,
    sayHello: function () {
        console.log("Hello")
    },
    sayName: function () {
        console.log(this.name)
    }
}

In this case, the 'this' keyword refers to the object itself.

Common object methods:

- Object.keys() returns an array of all keys on the object
- Object.values() array of all values
- Object.entries() array of all key-value pairs

## Big-O Time-Complexity of Common Object Methods

- Insert/remove key-value pair: O(1) (constant)
- Access property: O(1)
- Search for a value: O(n) (linear)
- Object.keys(), values(), entries(): O(n)