const Node = require('./Node');
const LinkedList = require('./LinkedList');

const myList = new LinkedList();

myList.addToHead('Node 1');
myList.addToHead('Node 2');
myList.addToHead('Node 3');
myList.addToHead('Node 4');

// Add checkpoint 3 code below:
const myNodeRecursive4 = myList.findNodeRecursively('Node 4');
console.log(myNodeRecursive4);

const myNodeRecursive2 = myList.findNodeRecursively('Node 2');
console.log(myNodeRecursive2);


