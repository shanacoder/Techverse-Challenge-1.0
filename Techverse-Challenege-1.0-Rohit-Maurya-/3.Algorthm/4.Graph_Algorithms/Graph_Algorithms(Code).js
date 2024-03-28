// Graph representation using adjacency list
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add edge between two vertices
    addEdge(vertex1, vertex2) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }

    // Breadth-First Search (BFS) algorithm
    breadthFirstSearch(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        const result = [];

        visited.add(startVertex);
        while (queue.length > 0) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            const neighbors = this.adjacencyList.get(currentVertex);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    // Depth-First Search (DFS) algorithm
    depthFirstSearch(startVertex) {
        const visited = new Set();
        const result = [];

        function dfs(vertex) {
            visited.add(vertex);
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs.call(this, neighbor);
                }
            }
        }

        dfs.call(this, startVertex);

        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
console.log("BFS:", graph.breadthFirstSearch('A')); // Output: BFS: [ 'A', 'B', 'C', 'D' ]
console.log("DFS:", graph.depthFirstSearch('A')); // Output: DFS: [ 'A', 'B', 'D', 'C' ]
