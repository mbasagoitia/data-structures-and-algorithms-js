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