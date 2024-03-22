## Dijkstra’s Algorithm computes the shortest distance from a given vertex to the rest of the vertices in a graph

1. Instantiate a dictionary that will eventually map vertices to their distance from the start vertex
2. Assign the start vertex a distance of 0 in a min heap
3. Assign every other vertex a distance of infinity in a min heap
4. Remove the vertex with the smallest distance from the min heap and set that to the current vertex
5. For the current vertex, consider all of its adjacent vertices and calculate the distance to them as (distance to the current vertex) + (edge weight of current vertex to adjacent vertex).
6. If this new distance is less than the current distance, replace the current distance.
7. Repeat 4 and 5 until the heap is empty
8. After the heap is empty, return the distances

## In JS

### Setup

Dijkstra’s Algorithm is used for evaluating the shortest paths between vertices in a graph. The general strategy is to iterate through the vertices in such a way that will always allow us to only consider the shorter path at each vertex and maintain every possible shortest path as we go.  
We will first implement the algorithm to find the shortest distance to every vertex. Our implementation will take the following steps:  

- Evaluate the distances between the starting vertex and its neighbors
- If the new distance to the neighbor is lower than the previous distance, record it, and queue up the neighbor
- Dequeue the next vertex to evaluate
- Repeat steps 2 - 3 until there are no more vertices left in the queue.  
- In this exercise, we will set up the objects that will keep track of the shortest distances between the starting vertex and each other vertex, and the shortest paths.  

We will be using a priority queue, which is a specialized heap data structure, to maintain the vertices we need to evaluate next. We’ll explain in a later exercise exactly what it is and the reason for using it instead of a regular queue.
We have also set up a test graph for you in testGraph.js to test the output of the function as you complete the exercises

---

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

---

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

### Evaluate All Paths

Currently, we’re evaluating the distances to the neighbors of the starting vertex, but we want to expand this to every connected vertex in the graph. Every time we discover a shorter path to a neighbor, we should queue up the neighbor to explore its connections and evaluate them.  
This will accomplish two things:  

- Any paths that have not yet been explored will be explored
- For vertices that already have a path found, we will re-evaluate if the alternate path through the neighbor will result in a shorter distance.  

We are guaranteed that every vertex is evaluated because whenever a path is found to a vertex, then it will be queued up and its neighbors will be evaluated. The only way for a vertex to escape evaluation is if there are no connections to the vertex.  
For our queue, we will use a priority queue. A priority queue is a specialized form of a min-heap, where the priority of a piece of data is stored alongside data, and elements are popped based on the priority value. We have provided the MinHeap.js file for you in case you want a refresher on a basic heap data structure. In the meantime, take a look through PriorityQueue.js to familiarize yourself with the data structure. We mainly need the .add() method to queue up elements with a priority, and the .popMin() method to grab the element with the lowest priority.  
This priority queue is better than a regular queue since it allows us to evaluate the vertices with the shortest distances first. This way we can avoid unnecessarily re-evaluating paths later in the queue since it is less likely that a longer path will result in a shorter distance.

1. First, let’s set up the Priority Queue that we will use to hold the vertices we will evaluate as we traverse through the graph.  
Right after the previous object is instantiated, create a const variable, queue, and set it to a new instance of a PriorityQueue.  
The first vertex we want to evaluate is the starting vertex. After instantiating the queue, make a call to .add() the starting vertex to the queue. Pass in an object with the vertex property set to the startingVertex, and the priority property set to 0. The priority is the vertex’s distance to the starting vertex.

2. Currently, we are iterating through the startingVertex’s edges and calculating the distance of the alternate path using the startingVertex’s distance. Now, we want to shift to evaluate the vertices in the queue.  
Instead of setting the vertex variable to the starting vertex, we want to set it to the vertex with the smallest priority in the queue, which will initially be the starting vertex. Dequeue the vertex with the smallest priority from the queue by calling the .popMin() method and declare the vertex variable by destructuring it from the resulting object.

3. For now, we only have the startingVertex queued up for evaluation. However, we also want to queue up any neighbors where a shorter distance from the vertex to the neighbor is found. This is because other paths that go through this neighbor could be shorter than what was previously recorded.  
If the alternate path to the neighbor is shorter than the previously recorded distance, .add() the vertex’s neighbor to the queue where the vertex property is set to the neighbor, and the priority is the new neighborValue in distances.

4. Great! Our queue is running along, so we just need to set up a loop to go through all of the vertices in the queue. As long as there are vertices left in the queue, we should continue evaluating alternate paths.  
After the distance of startingVertex is set to 0, set up a while loop that continues to evaluate the distances as long as the queue is not empty. You can call .isEmpty() on queue to check if it is empty or not. This should come right before the vertices are popped from the queue and end right after we iterate through the neighbors.
Checkpoint 5 Step instruction is unavailable until previous steps are completed

5. Awesome job! We’ve gotten through the basis of Dijkstra’s. Run the function on the test graph and print out the result, you should see the following shortest distances:

A: 0  
B: 3  
C: 7  
D: 4  
E: 12  
F: 22  
G: -38  

These should be the following previous vertices:

A: null  
B: A  
C: D  
D: A  
E: D  
F: E  
G: E  

### Shortest Path to a Target Vertex

Our current implementation of Dijkstra’s returns the shortest paths for all of the vertices in the graph. We can build upon this to create a function in shortestPath.js that reconstructs the full path to one vertex.  
We will need to make a call to dijkstras() to get the map of distances and previous vertices. From there we can grab the target vertex’s shortest distance from distances and build the entire path using the previous vertices.  
We cannot do this while dijkstras() continues to calculate the paths, because we cannot guarantee that the first encounter of the target vertex is the shortest path. Doing it after all the paths have been evaluated covers the possibility that an alternate path later in the queue will be shorter than the first one, particularly when there are negative distances.  

1. We should first supply our shortestPathBetween() function with the graph, starting vertex, and target vertex.  
Add 3 parameters to the shortestPathBetween() function: graph, startingVertex, and targetVertex.

2. Now we should make a call to dijkstras() to retrieve the shortest distances and previous vertices.  
Call dijkstras() and pass the given graph and startingVertex as arguments. Destructure distances and previous from the resulting output.

3. We will want to return the shortest distance from the starting vertex to the target vertex. We can access this in distances using the targetVertex’s data.  
After the call to dijkstras(), create a distance variable and set it to the target vertex’s shortest distance in distances.  
Then, return the distance in an object with the distance property set to distance.

4. We also want to construct the path and return it back. Since each entry in previous is a reference to the previous vertex in the shortest path, we can walk backwards through the previous vertices and store the vertex in our path. This is similar to a linked list traversal, just in reverse.  
After the distance is created, create another variable, path, and set it to an empty array. Go ahead and add the path to the return object.  
Then create a temporary variable, vertex, and set it to the targetVertex. This is the end of the path where we will start our backwards traversal.

5. We will add the vertex into the path, set the next vertex to the previous vertex, and repeat until there are no vertices left in the path. To do this, we will set up a while loop to control the iterations.  
When there are no vertices left, then the vertex will be null. After the temporary vertex is initialized, set up a while loop that continues to run as long as vertex is not null.  
Inside the loop, .unshift() the vertex into the path. This will allow the vertex to be inserted at the beginning of the array instead of the end.  
We will also want to update the vertex to be the previous vertex so it can get added in. Set vertex to the vertex’s data in previous.
Checkpoint 6 Passed

6. All that’s left is to print out our results of calling shortestPathBetween() on vertices A and G. Add in a statement to print out results. We should see the distance is -38 and the path is A, D, E, and G.
