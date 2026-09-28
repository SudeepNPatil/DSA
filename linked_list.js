/* class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

let list = new LinkedList();

let nodes = 5;

for (let i = nodes; i >= 1; i--) {
  let node = new Node(i);
  if (list.head === null) {
    list.head = node;
    list.tail = node;
  } else {
    node.next = list.head;
    list.head = node;
  }
}

console.log("Linked List:", list);
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

let list = new LinkedList();

let nodes = 5;

for (let i = 1; i <= nodes; i++) {
  let node = new Node(i);
  if (list.tail === null) {
    list.head = node;
    list.tail = node;
  } else {
    list.tail.next = node;
    list.tail = node;
  }
}

console.log("Linked List:", list);
