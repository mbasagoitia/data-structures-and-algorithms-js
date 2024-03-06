class Node {
    constructor(value) {
        this.value = value;
        // Left and right child nodes, which upon instantiation point to null
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        // When the tree is empty, the root points at null
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    search(root, value) {
        if (this.isEmpty()) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        // Use the optimized queue implementation.
        // For simplicity's sake, we are using an array here.
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {
        // Do NOT call this.isEmpty() because you want to know if the current root (could be any node) is null, not just the main root of the tree
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // We have found the value that is equal to the passed in value
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            // If both of these checks fail, the node has two child nodes
            // The in order successor is the node in the right sub tree with the smallest value
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}