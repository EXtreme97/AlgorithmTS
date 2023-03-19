export default class Graph<T> {
  // 顶点
  private vertexes: T[] = [];
  // 邻接表
  private adjList: Map<T, T[]> = new Map();

  addVertex(vertex: T) {
    this.vertexes.push(vertex);

    this.adjList.set(vertex, []);
  }

  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2);
    this.adjList.get(v2)?.push(v1);
  }

  traverse() {
    console.log("Graph=>");
    this.vertexes.forEach((vertex) => {
      const edges = this.adjList.get(vertex);

      console.log(`${vertex}->${edges?.join(" ")}`);
    });
  }
  // 广度优先遍历
  bfs() {
    if (this.vertexes.length === 0) return;

    const queue: T[] = [];
    queue.push(this.vertexes[0]);

    const visited = new Set<T>();
    visited.add(this.vertexes[0]);

    while (queue.length) {
      const vertex = queue.shift()!;
      console.log(vertex);

      const neighbors = this.adjList.get(vertex);
      if (!neighbors) continue;
      for (const n of neighbors) {
        if (!visited.has(n)) {
          visited.add(n);
          queue.push(n);
        }
      }
    }
  }
  // 深度优先遍历
  dfs() {
    if (this.vertexes.length === 0) return;
    const stack: T[] = [];
    stack.push(this.vertexes[0]);

    const visited = new Set<T>();
    visited.add(this.vertexes[0]);

    while (stack.length) {
      const vertex = stack.pop()!;
      console.log(vertex);
      const neighbors = this.adjList.get(vertex);
      if (!neighbors) continue;
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const n = neighbors[i];
        if (!visited.has(n)) {
          visited.add(n);
          stack.push(n);
        }
      }
    }
  }
}
const g = new Graph<string>();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");
g.addVertex("H");
g.addVertex("I");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("C", "D");
g.addEdge("C", "G");
g.addEdge("D", "G");
g.addEdge("D", "H");
g.addEdge("B", "E");
g.addEdge("B", "F");
g.addEdge("E", "I");

// g.traverse();
// g.bfs();
g.dfs()
