# Stacks

A stack is a sequential collection of elements that follows the last in first out (LIFO) principle.

The last element to be inserted into the stack is the first element to be removed.

A stack is an abstract data type and is defined by its behavior rather than being a mathematical model. In other words, it is a list, but what makes it a stack is how it behaves.

Supports two main operations:
- Push (adds an element to the collection)
- Pop (removes the most recently added element from the collection)

## When a Stack is Used

- Browser history tracking (back and forward buttons)
- Undo operation when typing
- Expression conversions
- Call stack in JavaScript runtime

See stack.js in this folder for a simple implementation of a stack.

# Queues

A queue is a sequential of elements that follows the first in, first out (FIFO) principle.

The first element inserted is the first element to be removed.

Similar to a stack, the queue is an abstract data type that is defined by its behavior.

Supports two main operations:

- Enqueue (adds an element to the tail of the collection)
- Dequeue (removes an element from the head of the collection)

## When a Queue is Used

Queues are useful when you need to process data in a specific order

- Printers printing multiple documents
- CPU task scheduling
- Callback queue in JavaScript runtime

## Circular Queues

Extended version of a regular queue. 

The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.

Also referred to as circular buffer or ring buffer and follows the FIFO principle.

A circular queue will reuse the empty block created during the dequeue operation. 

When working with queues of a fixed maximum size, a circular queue is a great choice.

Supports two main operations: 

- Enqueue
- Dequeue

Usage examples:

- Clock
- Streaming data
- Traffic lights