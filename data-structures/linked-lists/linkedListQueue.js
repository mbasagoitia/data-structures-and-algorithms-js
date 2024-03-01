// A queue can be implemented as a linked list, which is shown here

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
}

class LinkedListQueue {
    constructor () {
        this.list = new LinkedList();
    }
    // Inserts an element at the rear end (tail) of the queue or linked list
    enqueue(value) {
        this.list.append(value);
    }
    // Removes an element from the front (head) of the queue or linked list
    dequeue(){
        return this.list.removeFromFront();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
}

// Example usage

const queue = new LinkedListQueue();

console.log(queue.isEmpty()); // returns true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.getSize()); // returns 3

queue.print(); // returns 10 20 30

console.log(queue.dequeue()); // returns 10
queue.print(); // returns 20 30

queue.peek(); // returns 20
