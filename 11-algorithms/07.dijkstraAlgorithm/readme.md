## Dijkstra’s Algorithm computes the shortest distance from a given vertex to the rest of the vertices in a graph.
1.   Instantiate a dictionary that will eventually map vertices to their distance from the start vertex
2.   Assign the start vertex a distance of 0 in a min heap
3.   Assign every other vertex a distance of infinity in a min heap
4.   Remove the vertex with the smallest distance from the min heap and set that to the current vertex
5.   For the current vertex, consider all of its adjacent vertices and calculate the distance to them as (distance to the current vertex) + (edge weight of current vertex to adjacent vertex).
6.   If this new distance is less than the current distance, replace the current distance.
7.   Repeat 4 and 5 until the heap is empty
8.   After the heap is empty, return the distances

## In JS
-   Evaluate the distances between the starting vertex and its neighbors
-   If the new distance to the neighbor is lower than the previous distance, record it, and queue up the neighbor
-   Dequeue the next vertex to evaluate
-   Repeat steps 2 - 3 until there are no more vertices left in the queue.

### Setup

1. To begin, we need to provision our dijkstras() function with two parameters: graph and startingVertex. graph is the actual data structure instance. startingVertex indicates the starting point from which we will construct the paths.  
In the dijkstras() function, specify the graph as the first parameter and startingVertex as the second parameter.
2. We will want to keep track of the total distances for the shortest paths to each vertex. In the dijkstras() function, create a distances variable and set it to an empty object. distances will be used to map each vertex to the distance of its path to the starting vertex.  
Before we can start evaluating the paths, we also need to initialize each vertex’s distance to Infinity. Any connection will be shorter than Infinity, no matter how large the weight is. As long as there is a connection between two vertices, the connection will always be recognized as part of the shortest path over Infinity.  
Iterate through the graph’s vertices using .forEach(). In the distances object, assign each vertex’s data to Infinity. We want the key to be the vertex’s data property and not the vertex itself to make it easier to read and access.
3. The last thing we want to track is the shortest paths to each vertex. Instead of recording the full path to every vertex, we just need the previous vertex. This is because we are guaranteed that the vertices leading up to the previous vertex are also the shortest distance, and we can reconstruct the full path by tracing through each vertex’s previous vertex.  
After distances is created, create a variable, previous, and set it equal to an empty object. This will be a map of every vertex to its corresponding previous vertex.  
We will also need to initialize the vertices in the previous object. In the iterator and after the distances are initialized, map each vertex’s data in the previous object to null. This accounts for situations where the graph is disconnected, or there are vertices that do not have edges leading to them.
4. Now, you may be wondering, “but the distance from the starting vertex to the starting vertex is 0, not Infinity!” Let’s resolve this by adjusting the initial distance for the starting vertex.  
After we finish iterating through the graph’s vertices, set the distance of the startingVertex.data in distances to 0.
5. Great! Now we want to return the results of our evaluations in distances and previous. This allows for the user who makes a call to our function to use these computed values.  
You can return both values by returning an object with distances and previous keys set to their respective variables.
6. Let’s go ahead and check our output for dijkstras() to make sure we set up our distances and previous paths correctly.  
After the dijkstras() function, we have already set up a call to the function with the testGraph and the first vertex in the graph, A, as the starting vertex. The output is stored in results.  
Print out the results. In the distances, we should see A with a distance of 0 and the remaining vertices in the graph mapped to Infinity. In previous, we should see every vertex in the graph mapped to null.

### Evaluate Paths to Starting Vertex’s Neighbors

We have all of our records set up, so we can start traversing through the graph and evaluating the distances from the starting vertex to its neighbors.  
In the evaluation of each neighbor, we compare the distance of the new path to the distance of the previous path. If the distance of the new path is shorter, we will update our records of distances and previous vertices with the new path.  
Every time we evaluate an edge between a vertex and its neighbor, the if condition ensures that the record will always maintain the shortest path among the evaluations so far. This is why we can use the previously recorded distance for comparison in our evaluation.
1. Let’s start evaluating the distances to the starting vertex’s neighbors by iterating through its list of edges.  
Right before we return the recorded results, create a const variable, vertex, and set it to startingVertex. Then use a .forEach() iterator to go through the vertex’s list of edges. We will use the edge argument for this iterator.
2. On each iteration through the edges, we are evaluating an alternate path to a different neighbor. The distance of the new path is the sum of the distance from the vertex to the neighbor and the distance from the starting vertex to the vertex.  
Inside the .forEach() iterator, create a const variable, alternate, and set it to the sum of the edge’s weight and the value of the vertex’s distance in distances.
3. Now we can compare the distance of the new alternate path to the distance of the last recorded path to the neighbor. The distance of the neighbor’s last recorded path is in the distances object at the neighbor’s data.  
Let’s use a variable to hold the key that we will use to access the neighbor’s distance in distances. This will help with code readability.  
Still in the .forEach(), create a const variable, neighborValue, and set it to the data property of the neighbor, which is located in the end property of the edge.  
Set up an if condition that checks if the alternate distance is shorter than the value at neighborValue in distances.
4. If the condition is satisfied, then we have found a shorter path and should update the neighbor’s recorded distance and previous vertex.  
If the alternate path is shorter, set distances at the neighborValue to the new alternate cost. We also want to set the previous vertex at the neighborValue to vertex.
5. When we evaluate the distances, we are determining if the path from the starting vertex to the neighbor is shorter than the previously evaluated distance. Since we have not evaluated any paths to the neighbors yet, the previously recorded distances to all of the neighbors is Infinity.  
Run the code and look at the output of the function. The shortest paths evaluated so far should be the paths from the starting vertex to its neighbors. In distances we should see the starting vertex with a distance of 0, its neighbors set to the evaluated distances, and all other vertices with Infinity distances. In previous, we should see the neighbors with the starting vertex as their previous vertex, and all other vertices with null.  


