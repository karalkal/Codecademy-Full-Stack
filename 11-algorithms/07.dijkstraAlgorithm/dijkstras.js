const testGraph = require("./testGraph.js");

const dijkstras = (graph, startingVertex) => {
    const distances = {};
    /*
  track is the shortest paths to each vertex. Instead of recording the full path to every vertex, we just need the previous vertex. This is because we are guaranteed that the vertices leading up to the previous vertex are also the shortest distance, and we can reconstruct the full path by tracing through each vertex’s previous vertex.
  */

    const previous = {};

    graph.vertices.forEach((vertex) => {
        distances[vertex.data] = Infinity;
        previous[vertex.data] = null;
    });
    //apart from first one
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
/*  */
