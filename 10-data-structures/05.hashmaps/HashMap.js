const LinkedList = require('./LinkedList');
const Node = require('./Node');
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null)
      .map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    /*
    If there are already values stored in nodes at an index, we need to loop over each node in the list in order to determine how to proceed.    
    The two possibilities we’ll encounter while looping are:    
        The key we are looking for and the key of the current node is the same, so we should overwrite the value
        No node in the linked list matches the key, so we should add the key-value pair to the list as the tail node
    */
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.next) {
        current.next = new Node({ key, value });
        break;
      }
      current = current.next;
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    let current = this.hashmap[arrayIndex].head;
    while (current) {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.next;
    }
    return null;
  }
}

module.exports = HashMap;

