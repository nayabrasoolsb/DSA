class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(elem) {
    this.items[this.rear] = elem;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

let q1 = new Queue();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.enqueue(40);
q1.enqueue(50);

console.log(q1.isEmpty());
// console.log(q1.dequeue());
// console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.enqueue(10));
console.log(q1.peek());
console.log(q1.size());
// console.log(q1.peek());
// console.log(q1.size());
// console.log(q1.isEmpty());
q1.print();
