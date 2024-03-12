
// Node class to hold the data and links between nodes
// LinkedList class to handle external operations on the list, like adding and removing nodes
// Instance of list, and using our .printList() method to track the changes we made

const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

seasons.removeHead();
seasons.printList();
