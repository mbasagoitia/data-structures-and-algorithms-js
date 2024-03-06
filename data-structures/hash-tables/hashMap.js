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