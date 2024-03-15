const TreeNode = require('./TreeNode');
const tree = new TreeNode(1);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
    tree.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        tree.children[i].addChild(randomize());
    }
}

// add third-level children
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
            tree.children[i].children[j].addChild(randomize());
        }
    }
}

// pretty-print the tree
tree.print();
console.log("root", tree.data);
console.log("level 1", tree.children[0].data);
console.log("level 2", tree.children[0].children[0].data);
console.log("level 3", tree.children[0].children[0].children[0].data);




