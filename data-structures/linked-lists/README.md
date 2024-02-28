# Linked Lists

Linked lists are a linear data structure that includes a series of connected nodes.

Elements are not stored in a particular memory location.

Each element (called a node) contains data and a link to the next node. Each list contains a head (reference to the first node) and tail (last node whose reference is null).

## About Linked Lists

In JavaScript, linked lists are not a built-in data structure like arrays, but you can simulate them using objects. Adding and removing nodes does not reorganize the entire data structure, as in an array. Search operations are slow, and nodes are accessed sequentially starting from the first node. They also use more memory than arrays.

Supports three main operations:

- Insertion (add an element at the beginning, end, or at a specific index)
- Deletion (remove an item given its index or value)
- Search (find an element given its value)

## Usage

All applications of stacks and queues are applications of linked lists

- Image viewer/slideshow

## Types of Linked Lists

Singly Linked Lists: Each node contains only one pointer to the next node.

Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.

Circular Linked Lists: Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.