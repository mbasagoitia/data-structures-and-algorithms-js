// To reverse a linked list, follow these steps:

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
    
    // Other methods to add and remove nodes as needed

    reverse() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }
        // 1. Create temporary variables previous and current and assign them to the start of the list
        let previous = null;
        let current = this.head;
        // 2. Traverse the list while current is not null
        while (current) {
            // 3. Hold the next value temporarily so we can keep traversing the list later
            let next = current.next;
            // 4. Point the current node's next value to the previous node, effectively reversing its direction
            current.next = previous;
            // 5. Increment the previous and current value to continue traversing the list
            previous = current;
            current = next;
        }
        // 6. Once the loop fails, current is null and the previous value points to the last node
        // So, update the new head to the old last node.
        this.head = previous;
    }
}