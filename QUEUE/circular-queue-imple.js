class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength == this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(elem) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = elem;
      this.currentLength++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";

      // console.log(this.items)
      // console.log(this.front);
      // console.log(this.rear);

      // for(i=this.front; i!==this.rear; i= (i+1)%this.capacity) {
      //     str+=this.items[i] + " ";
      // }
      // str+=this.items[i];

      for (i = this.front; i <= this.rear; i++) {
        str += `${this.items[i]} `;
      }

      console.log(str);
    }
  }
}

let cq1 = new CircularQueue(5);

cq1.enqueue(10);
cq1.enqueue(20);
cq1.enqueue(30);

console.log(cq1.isEmpty());
console.log(cq1.isFull());
console.log(cq1.dequeue());
console.log(cq1.peek());
cq1.enqueue(60);
cq1.print();
