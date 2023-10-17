class Stack {
  constructor() {
    this.items = [];
  }

  push(elem) {
    this.items.push(elem);
  }

  pop() {
    return this.items.pop();
  }
  peek() {
    // to print the top element
    return this.items.at(-1);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items.toString();
  }
}

let stack1 = new Stack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(40);

// console.log(stack1.size());
// console.log(stack1.isEmpty());

// console.log(stack1.pop());

console.log(stack1.peek());
console.log(stack1.print());
