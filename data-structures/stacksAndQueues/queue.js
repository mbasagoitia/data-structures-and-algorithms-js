class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue: Adds an element to the tail of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue: Removes and returns the element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Peek: Returns the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }
    
    // isEmpty: Returns true if the queue is empty, false otherwise
    isEmpty() {
        return this.items.length === 0;
    }
    
    // size: Returns the number of elements in the queue
    size() {
        return this.items.length;
    }

    // print: Prints the elements of the queue
    print() {
        console.log(this.items.join(' '));
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Enqueue elements:", queue.print()); // Output: 1 2 3

console.log("Dequeue:", queue.dequeue()); // Output: 1

console.log("Peek:", queue.peek()); // Output: 2

console.log("Is empty:", queue.isEmpty()); // Output: false

console.log("Queue size:", queue.size()); // Output: 2

// Optimized implementation of the queue data structure
// Remember that the shift method has a linear time complexity. We will use an object instead of an array
// to have a constant time complexity when dequeuing items.

class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    isEmpty() {
        return this.rear - this.front === 0;
    }
    peek() {
        return this.items[this.front];
    }
    size() {
        return this.rear - this.front;
    }
    print() {
        console.log(this.items);
    }
}