//Create a LL

// Definition for singly-linked list.
// Simple Linked List Creation
// function ListNode(val) {
//   this.data = val;
//   this.next = null;
// }

// function LinkedListNode() {
//   const node1 = new ListNode(1);
//   const node2 = new ListNode(2);
//   const node3 = new ListNode(3);

//   node1.next = node2;
//   node2.next = node3;
// }
// LinkedListNode();

//checking end of the LL
// if(node1.next == null)

// Linked list with template code.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // adding node at the end of the LL
  add(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  //Print/travesal into LL
  printAll() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  // TC: O(N)
  // SC: O(1)

  //Length
  lengthOfLL() {
    let count;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.printAll();

// # ------------------------------------
// Q-1:[Google] traversal on Linked List
function traversal(head) {
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
// TC: O(N)
// SC: O(1)

// Q-2:[Amazon] Length of the LL
function lengthOfLL(head) {
  let count;
  let current = head;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
}
// TC: O(N)
// SC: O(1)

// Q-3:[Adobe] Search in the LL
function search(head, value) {
  let current = head;
  while (current !== null) {
    if (current.data == value) {
      return true;
    }
    current = current.next;
  }
  return false;
}
// TC: O(N)
// SC: O(1)

// Q-3:[MS] Kth node from the beginning
function kthNodeFromBeginning(head, k) {
  let current = head;
  while (current !== null) {
    if (current.data == value) {
      return true;
    }
    current = current.next;
  }
  return false;
}
// TC: O(N)
// SC: O(1)
