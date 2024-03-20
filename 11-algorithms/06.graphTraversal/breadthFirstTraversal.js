const testGraph = require("./testGraph.js");
const Queue = require('./Queue.js');

/*
As we iterate through the neighbors, we will add its connected vertices to the end of the queue, 
pull off the next neighbor from the queue, add its connected vertices, and so on. 
This way allows us to maintain the visiting order; we will visit the vertices across the same layer 
while queueing up the next layer. When there are no vertices left in the current layer, 
the vertices of the next layer are already queued up, so we move down and iterate across the next layer.
The queue holds all of the vertices that we have yet to iterate through. 
This means we want to continue iterating through these vertices as long as there are vertices left in the queue.
*/

const testGraph = require('./testGraph.js');
const Queue = require('./Queue.js');

const breadthFirstTraversal = (start) => {
    const visitedVertices = [start];
    const visitQueue = new Queue();
    visitQueue.enqueue(start);
    while (!visitQueue.isEmpty()) {
        const current = visitQueue.dequeue();
        console.log(current.data);
        current.edges.forEach((edge) => {
            const neighbor = edge.end;
            if (!visitedVertices.includes(neighbor)) {
                visitedVertices.push(neighbor);
                visitQueue.enqueue(neighbor);
            }
        })
    }

};

breadthFirstTraversal(testGraph.vertices[0]);

