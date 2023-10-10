class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(elem) {
    const node = new Node(elem);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(elem) {
    const node = new Node(elem);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    let value = this.head.data;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // let curr = this.head;
      // let prev = this.head;
      // while (curr.next) {
      //   prev = curr;
      //   curr = curr.next;
      // }
      // prev.next = null;
      // this.tail = prev;

      let prev = this.head;
      while (prev.next != this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = null;
    }
    this.size--;
  }
  insertAtPos(elem, pos) {
    if (pos > this.size || pos < 0 || !pos) {
      return null;
    }
    if (pos === 0) {
      this.prepend(elem);
      return;
    }
    let i = 0;
    if (pos === this.size) {
      this.append(elem);
    } else {
      let node = new Node(elem);
      let i = 0;
      let curr = this.head;
      while (i < pos - 1) {
        curr = curr.next;
        i++;
      }
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }
  removeAtPos(pos) {
    if (pos === 0) {
      this.removeFromFront();
      return;
    } else if (pos === this.size - 1) {
      this.removeFromEnd();
      return;
    }
    if (pos >= this.size || pos < 0 || !pos) {
      return null;
    }
    let i = 0;
    let curr = this.head;
    let prev;
    while (i < pos) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    prev.next = curr.next;
    this.size--;
  }
  reverse() {
    if (this.isEmpty()) {
      return;
    }
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      return "list is empty";
    }
    let str = "";
    let curr = this.head;
    while (curr) {
      str += `${curr.data} `;
      curr = curr.next;
    }
    return str;
  }
}

let l1 = new SinglyLinkedList();
l1.append(10);
l1.append(20);
l1.append(30);
l1.append(40);
l1.append(50);
l1.prepend(60);
// l1.removeFromEnd();
// l1.removeFromFront();
// l1.insertAtPos(70, 8);
// l1.removeAtPos(3);
l1.reverse();
console.log(l1.print(), "size is", l1.size);
