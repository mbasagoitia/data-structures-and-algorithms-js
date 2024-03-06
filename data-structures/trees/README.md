# Trees

A tree is a hierarchical data structure that consists of nodes connected by edges. Each node stores a data value.

A tree is a nonlinear data structure, unlike arrays, linked lists, stacks, and queues.

Trees, since they are nonlinear, allow quicker and easier access to data.

A tree will not contain any loops or cycles.

## Usage

- File systems for directory structure
- A family tree
- An organization tree
- The DOM
- Chat bots
- Abstract syntax trees

## Terminology

- Parent/child nodes: A node that is an immediate predecessor of any node is called a parent node. A node that is an immediate succcessor of any node is called a child node.
- Root node: The node from which the tree originates. It does not have a parent node.
- Leaf nodes: Nodes that do not have any child nodes.
- Siblings: Nodes with the same parent.
- Ancestors: Nodes may have ancestor nodes, such as the parent of a parent.
- Path: The sequence of nodes and edges from one node to another.
- Distance: The number of edges along the shortest path between two nodes.

## Terminology Specific to Nodes

- Degree: The total number of child nodes that a node has. The degree of a tree is the maximum degree of a node in the tree.
- Depth: The number of edges from a root to that node. The depth of the root node is always 0.
- Height: The number of edges from the deepest leaf to that node. The height of the root node is also the height of the tree.

## Binary Tree

A binary tree is a tree in which each node has at most two children (left child and right child).

## Binary Search Tree

A binary search tree is a binary tree with the following two properties:

- The value of each left node must be smaller than the parent node
- The value of each right node must be greater than the parent node

Binary search trees support the following operations:

- Insertion (add a node to the tree)
- Search (find a node given its value)
- Depth-first search (DFS) and breadth-first search (BFS): visit all nodes in the tree
- Deletion: remove a node given its value

## Binary Search Tree Usage

- Searching
- Sorting
- Implementing abstract data types such as lookup tables and priority queues

## Methods

Below is a list of the methods we will be implementing on the binary search tree in this exercise.

- isEmpty: checks if the tree is empty (root points to null)
- insert/insertNode: inserts a node at the correct place in the tree following the principles of the BST. Uses recursion to search the left or right side of the tree, updating the root node as you move along.
- search: returns true/false depending upon if a value exists in the tree. Also uses recursion, updating the root to the left or right node as needed.

- Tree traversal

Depth-first search: starts at the root node and explores as far as possible along each branch before backtracking.

3 types: 

- Preorder: 
1) read the data of the node
2) visit the left subtree
3) visit the right subtree

- Inorder:
1) visit the left subtree
2) read the data of the node
3) visit the right subtree

- Postorder
1) visit the left subtree
2) visit the right subtree
3) read the data of the node

Breadth-first search: explore all nodes at the present depth before moving on to nodes at the next depth level

1) create a queue
2) enqueue the root node
3) as long as a node exists in the queue, dequeue the node, read the node's value, enqueue the node's left child (if it exists), enqueue the node's right child (if it exists)

-minMax: find the minimum and maximum values present in a BST (necessary for deleting a node based on implementation)
-delete: delete a node from the tree given its value. There are 3 possible scenarios: the node has no children (remove the node from the tree); the node has one child (remove the node and replace it with its child); the node has two children (copy the value of the in order successor to the node and delete it, then replace the node to be deleted with the value you copied)

