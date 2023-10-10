
/*


class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;

    }
    enqueue(elem) {
        this.items[this.rear] = elem;
        this.rear++;
    }
    dequeue() {
        if (this.front == this.rear) {
            return;
        }
        let elem = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return elem;
    }
    peek() {
        if(!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }
    size() {
        return this.rear - this.front;
    }
    isEmpty() {
        return this.rear == this.front;
    }
}

let q1 = new Queue();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.enqueue(40);
q1.enqueue(50);
q1.enqueue(60);
q1.enqueue(70);
q1.enqueue(80);

q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();

console.log(q1.front);
console.log(q1.rear);

q1.print();

*/

// let arr = [1, 3, 4, 5, 6, 7];
// arr[4] = null;
// console.log(arr);



// circular queue


class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currLength = 0;
        this.front = -1;
        this.rear = -1;
    }
    isEmpty() {
        return this.currLength == 0;
    }
    isFull() {
        return this.currLength == this.capacity;
    }
    enqueue(elem) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = elem;
            this.currLength++;
            if (this.front == -1) {
                this.front = this.rear;
            }
        }
    }
    dequeue() {
        if (!this.isEmpty()) {
            const value = this.items[this.front]
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.currLength--;
            if (this.isEmpty()) {
                this.front = -1;
                this.rear = -1;
            }
            return value;
        }
    }
    print() {
        let str = "";
        for (let i = this.front; i <= this.rear; i++) {
            str += `${this.items[i]} `;
        }
        console.log(str);
    }
}

let cq1 = new CircularQueue(5);
cq1.enqueue(10);
cq1.enqueue(20);
cq1.enqueue(30);
cq1.enqueue(40);

console.log(cq1.dequeue());
cq1.print();
// console.log(cq1.items);





