class Node {
  constructor(elem) {
    this.data = elem;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  append(elem) {
    let node = new Node(elem);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  prepend(elem) {
    let node = new Node(elem);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  removeAtHead() {
    if (this.isEmpty()) {
      return null;
    }
    let value = this.head.data;
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
    return value;
  }
  removeAtTail() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }
  reverse() {
    if (this.isEmpty) {
      return null;
    }
    let curr = this.head;
    let temp = null;
    while (curr) {
      let next = curr.next;
      curr.next = temp;
      temp = curr;
      temp.prev = curr.next;
      temp.next = curr.prev;
      curr = next;
    }
    this.head = temp;
  }
  print() {
    let str = "";
    let curr = this.head;
    while (curr) {
      str += `${curr.data} `;
      curr = curr.next;
    }
    return str;
  }
}
let l1 = new DoublyLinkedList();
l1.append(10);
l1.append(20);
l1.append(30);
l1.append(40);
l1.prepend(50);
// console.log(l1.removeAtHead());
// l1.removeAtTail()
l1.reverse();
console.log(l1.print());
