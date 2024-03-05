class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    // Hashing function used to get, set, and remove data
    // The key is a string
    hash(key) {
        // Generates a numeric value that is the combination of the character codes of all the string values
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        // Ensures that the total is within the bounds of the array size
        return total % this.size;
    }

    set(key, value) {
        // Generate the index where the key needs to be stored determined by the hashing function
        const index = this.hash(key);
        // Store a reference to this index, which holds an array, which we will call bucket
        const bucket = this.table[index];
        if (!bucket) {
            // Creates a bucket and sets its first key-value pair
            this.table[index] = [[key, value]];
        } else {
            // This scenario essentially overwrites any value that was already set for this key previously.
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                // This sets a new key-value pair where a bucket already exists
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                bucket.splice(bucket[sameKeyItem], 1);
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(50);

// Big-O: linear for all methods
// Average-case: constant

// Time complexity can be improved with better hashing functions

// Check this practice implementation

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }
        this.size++;
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
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
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return removedNode.value;
            }
            return null;
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let current = this.head;
        let i = 0;
        while (current) {
            if (current.value === value) {
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let current = this.head;
            let listValues = "";
            while (current) {
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log(listValues);
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key, value) {
        const index = hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            bucket = [[key, value]];
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }
    get(key) {
        const index = hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }
    remove(key) {
        const index = hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                bucket.splice(bucket[sameKeyItem], 1);
            }
        }
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`${i}: ${this.table[i]}`);
            }
        }
    }
}