class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
    // Add an element to the start of the list
    prepend(value) {
        const node = new Node(value);
        if (!this.isEmpty()) {
            // New node points to current head
            node.next = this.head;
        }
        // Current head is updated to the new node
        this.head = node;
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            // Traverse the entire list starting from the head and print the value of each node
            let current = this.head;
            let listValues = "";
            // We will update the current pointer to the current.next property
            // While the next value is truthy (not pointing to null), we will add the value to listValues
            while (current) {
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log(listValues);
        }
    }
    // Add an element to the end of the list
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            // Make the current last node point to the newly created node
            let previous = this.head;
            while (previous.next) {
                previous = previous.next;
            }
            previous.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            // Increment up to the node before where you want to insert the new node
            for (let i = 0; i < index - 1; i++) {
                // Traverse through the list starting from the head
                prev = prev.next;
            }
            // Make the current node's pointer the previous node's pointer
            node.next = prev.next;
            // Make the previous node point to the current node
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            // While there are still nodes left in the list and the next node doesn't contain the passed in value
            // (the loop condition will fail when it finds the passed in value)
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                const removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            // If the pointer reaches the end of the list without finding the passed in value
            return null;
        }        
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }
}

// Big-O time complexity:

// Prepend: O(1) (constant)
// Append: O(n) (linear) requires you traverse the entire list to get to the last node
// Remove head: constant
// Remove node that is not head: linear