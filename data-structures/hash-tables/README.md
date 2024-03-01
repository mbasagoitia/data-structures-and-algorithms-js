# Hash Table (Hash Map)

Data structure used to store key-value pairs.

The JavaScript object is a special implementation of a hash table.
The Object class adds its own inherited default keys and properties, which may conflict with or be overwritten by keys you add.

The JavaScript map, introduced in 2015, was created to address this issue. You should generally use maps when needed.

However, writing your own hash tables is also important, and we will cover how to do that in this repo.

## Implementing a Hash Table

Key-value pairs are stored in a fixed-sized array, which has a numeric index.

We use a hashing function to convert the string key we provide into a hash code that maps the key to a numeric index within the array. Using that index, we store the value.

The same hashing function is reused to retrieve the value given a key.

Supports three main operations:

- Set (store a key-value pair)
- Get (retrieve a value given its key)
- Remove (delete a key-value pair)

## Usage

Implemented when constant time lookup and insertion are required

- Database indexing
- Caches