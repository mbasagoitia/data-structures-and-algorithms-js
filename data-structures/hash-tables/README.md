# Hash Table (Hash Map)

Data structure used to store key-value pairs.

The JavaScript object is a special implementation of a hash table.

The Object class adds its own inherited default keys and properties, which may conflict with or be overwritten by keys you add.

The JavaScript map, introduced in 2015, was created to address this issue. You should generally use maps when needed.

However, writing your own hash tables is also important, and we will cover how to do that in this repo.

## Implementing a Hash Table

Key-value pairs are stored in a fixed-sized array, which has a numeric index.

We use a hashing function to convert the string key we provide into a hash code that maps the key to a numeric index within the array. Using that index, we store the value. To avoid collisions (see below), we can instead of storing a single value at each index, store an array of key-value pairs.

The same hashing function is reused to retrieve the value given a key.

Supports three main operations:

- Set (store a key-value pair)
- Get (retrieve a value given its key)
- Remove (delete a key-value pair)

## Usage

Implemented when constant time lookup and insertion are required

- Database indexing
- Caches

## Collision Handling

A collision occurs when the hashing function assigns different keys to the same index in the hash table, which can result in the overwriting of data.

In the implementation of the hashing function in this example, this could occur with keys that have the same letters in a different order (mane and name). The hashing function will generate the same index.

One method to handle this is to, instead of storing a single value at the given index, store arrays of key-value pairs at that index.

## Hashing Functions

