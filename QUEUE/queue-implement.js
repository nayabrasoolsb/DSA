
class Queue {
    constructor() {
        this.items = [];

    }

    enqueue(elem) {
        this.items.push(elem);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}


let q1 = new Queue();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.enqueue(40);
q1.enqueue(50);

// console.log(q1.dequeue());
console.log(q1.peek());
console.log(q1.size());
console.log(q1.isEmpty());
q1.print();
