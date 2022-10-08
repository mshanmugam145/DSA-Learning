class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacencyList[vertex2].add(vertex1)
        this.adjacencyList[vertex1].add(vertex2)
    }

    hasEdge(vertex1, vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex2].delete(vertex1);
        this.adjacencyList[vertex1].delete(vertex2);
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    display(){
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
        }
    }

    bfs(source){
        const visited = {};
        const level = {};
        const parent = {};
        const bfsTraversalOutput = [];
        const queue = [];

        for (const key in this.adjacencyList) {
            visited[key] = false;
            parent[key] = null;
            level[key] = -1;
        }

        visited[source] = true;
        level[source] = 0;
        queue.push(source);
        while(queue.length) {
            let ele = queue.shift();
            // console.log(ele);
            bfsTraversalOutput.push(ele);
            for (const v of this.adjacencyList[ele]) {
               if(!visited[v]) {
                    visited[v] = true;
                    parent[v] = ele;
                    level[v] = level[ele] + 1;
                    queue.push(v);
               }
            }
        }
        return {visited, level, parent, bfsTraversalOutput}
        // console.log(bfsTraversalOutput);
        // if(destination) {
        //     console.log(level[destination]);
        // }
    }

    calculateShortDistance(source, destination){
        const bfs = this.bfs(source);
        return bfs.level[destination];
    }

    calculateShortPath(source, destination){
        const bfs = this.bfs(source);
        const path = [];
        while (destination) {
            path.push(destination);
            destination = bfs.parent[destination];
        }
        return path.reverse();
    }
    
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');

graph.addEdge('A', 'B');
graph.addEdge('C', 'B');
graph.addEdge('C', 'D');
graph.addEdge('A', 'D');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('F', 'G');
graph.addEdge('A', 'E');

// graph.display();
// console.log(graph.hasEdge('A', 'B')); 
// // graph.removeEdge('A', 'B');
// graph.removeVertex('B');
// graph.display();

//BFS 
// const bfss = graph.bfs("A");
// console.log(bfss.level);
// console.log(bfss.bfsTraversalOutput);
// console.log(bfss.visited);
// console.log(bfss.parent);
// console.log(graph.calculateShortDistance("A","G"));
console.log(graph.calculateShortPath("A","G"));