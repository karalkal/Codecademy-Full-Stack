const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {   //if empty
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {    // if anything remains
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {   //if empty
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {    // if anything remains
      this.tail.setNextNode(null);
    }
    // If the removed tail was also the head of the list (meaning there was only one element in the list), call .removeHead() to make the necessary changes to the head of the list

    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }


  /*
      Iterate through the list to find the matching node
      If there is no matching element in the list:
      Return null
      If there is a matching node, we will then check to see if it is the head or tail of the list:
      If so, call the corresponding .removeHead() or .removeTail() method
      If not, that means the node was somewhere in the middle of the list. In that case:
      Remove it by resetting the pointers of its previous and next nodes
      Finally, return the node
  */

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    // Continue your .removeByData() method below:
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }



  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLinkedList;
