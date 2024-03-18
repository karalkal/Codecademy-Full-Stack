const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const nextNode = new Node(data);
        const currentHead = this.head;
        this.head = nextNode;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let lastNode = this.head;
        if (!lastNode) {
            this.head = new Node(data);
        } else {
            let temp = this.head;
            while (temp.getNextNode() !== null) {
                temp = temp.getNextNode();
            }
            temp.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        if (removedHead.next) {
            this.head = removedHead.next;
        }
        return removedHead.data;
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.next;
        }
        output = output.concat("<tail>");
        console.log(output);
    }

    findNodeIteratively(data) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    // data is basically the Node data property, in this case 'Node 1', 'Node 2'...
    // this.head as the default argument for currentNode
    // because, if you call findNodeRecursively() with only a data argument, 
    // the method will traverse the entire linked list beginning from its head.
    findNodeRecursively(data, currentNode = this.head) {
        // Base case 1 – return null if the end of the linked list is reached
        if (currentNode === null) {
            return null
        }
        // Base case 2 – return the current node if its data matches the data argument, (if found)
        else if (currentNode.data === data) {
            return currentNode
        }
        // otherwise, recursive case, call function again with next Node
        else {
            return this.findNodeRecursively(data, currentNode.getNextNode())      //Pass data and the next node as arguments.
        }

    }
}

module.exports = LinkedList;
