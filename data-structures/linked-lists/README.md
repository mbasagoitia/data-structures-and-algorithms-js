# Linked Lists

Linked lists are a linear data structure, but elements are not stored in a particular memory location. Each element is a separate object that contains a pointer or a link to the next object in the list. Each element (called a node) contains data and a link to the next node. Each list contains a head (reference to the first node) and tail (last node whose reference is null).

## About Linked Lists

In JavaScript, linked lists are not a built-in data structure like arrays, but you can simulate them using objects. Adding and removing nodes does not reorganize the entire data structure, as in an array. Search operations are slow, and nodes are accessed sequentially starting from the first node. They also use more memory than arrays.

## Types of Linked Lists

Singly Linked Lists: Each node contains only one pointer to the next node.

Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.

Circular Linked Lists: Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.

## Structure of Nodes and Linked Lists in JavaScript

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

## Creating Nodes and a Linked List from our Classes

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

## Representation of a Linked List

const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }

## Common Methods and their Implementations

size(): represents number of nodes present in the list

size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

clear(): empties the list

clear() {
    this.head = null;
}

getLast(): gets the last node of the list

getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}

getFirst(): gets the first node of the list

getFirst() {
    return this.head;
}