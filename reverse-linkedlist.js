function createList(Nodes) {
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

  for (let i = 1; i <= Nodes; i++) {
    let node = new Node(i);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      node.next = list.head;
      list.head = node;
    }
  }
  return list;
}

let list = createList(5);
console.log("Linked List:", list);

function reverseList(list) {
  let previous = null;
  let current = list.head;
  let nextNode = null;

  while (current) {
    nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }

  // list.head = previous;

  return list;
}

console.log(reverseList(list));
