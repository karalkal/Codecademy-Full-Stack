The start and end properties of Edge class mark the vertices that the edge connects. If the graph is directed, we can indicate the direction the edge points (towards the end vertex).  

We will create an .addEdge() method in the Vertex class that connects the vertices together by creating an Edge and adding it to the vertices’ list of edges. When the Edge is created, it expects the two Vertex instances, which is how the Edge tracks the connection between the two vertices.  

Then, we will use this method in the Graph‘s .addEdge() method to create edges going in both directions between the two given vertices. Even though this graph is undirected, we want to create two edges going in both directions so it is easier to traverse.  

We’re ready to connect vertices with edges through our Graph class.  

removeEdge works in a similar manner.   




