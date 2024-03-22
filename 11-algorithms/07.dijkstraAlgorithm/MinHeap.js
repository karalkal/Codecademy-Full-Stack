const PriorityQueue = require('./PriorityQueue.js');
const testGraph = require('./testGraph.js');

const dijkstras = (graph, startingVertex) => {
    const distances = {};
    const previous = {};

    graph.vertices.forEach((vertex) => {
        distances[vertex.data] = Infinity;
        previous[vertex.data] = null;
    });

    distances[startingVertex.data] = 0;

    const vertex = startingVertex;

    vertex.edges.forEach((edge) => {
        const alternate = edge.weight + distances[vertex.data];
        const neighborValue = edge.end.data;

        if (alternate < distances[neighborValue]) {
            distances[neighborValue] = alternate;
            previous[neighborValue] = vertex;
        }
    })
    return { distances, previous };
};

const results = dijkstras(testGraph, testGraph.vertices[0]);
console.log(results);

module.exports = dijkstras;
