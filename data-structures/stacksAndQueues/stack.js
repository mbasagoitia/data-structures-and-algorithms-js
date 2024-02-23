class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push: Adds an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop: Removes and returns the element from the top of the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Peek: Returns the element at the top of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // isEmpty: Returns true if the stack is empty, false otherwise
    isEmpty() {
      return this.items.length === 0;
    }
  
    // size: Returns the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // print: Prints the elements of the stack
    print() {
      console.log(this.items.join(' '));
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Stack elements:", stack.print()); // Output: 1 2 3
  
  console.log("Pop:", stack.pop()); // Output: 3
  
  console.log("Peek:", stack.peek()); // Output: 2
  
  console.log("Is empty:", stack.isEmpty()); // Output: false
  
  console.log("Stack size:", stack.size()); // Output: 2
  