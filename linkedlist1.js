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

let Nodes = 10;
let list = new LinkedList();

for (let i = 1; i <= Nodes; i++) {
  let node = new Node(i);
  if (list.head === null) {
    list.head = node;
    list.tail = node;
  } else {
    list.tail.next = node;
    list.tail = node;
  }

  console.log(list.tail.data);
} */

//console.log("Linked List:", list);

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

/* function findvalue(list, value) {
  let current = list.head;
  while (current) {
    if (current.data === value) {
      return true;
    }
    current = current.next;
  }
  return false;
}
let list = createList(10);
console.log(findvalue(list, 5)); */

function removevalue(list, value) {
  let current = list.head;

  while (current) {
    if (current.next.data === value) {
      current.next = current.next.next;
      return list;
    }
    current = current.next;
  }
  return false;
}

let list = createList(3);
console.log(list);
console.log(removevalue(list, 1));
