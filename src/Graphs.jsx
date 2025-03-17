const Graphs = `Graphs Complete Revision Guide
1. Introduction to Graphs
A graph is a collection of **nodes (vertices)** and **edges** connecting them. Graphs are widely used in network routing, social networks, recommendation systems, and more.

Key Features of Graphs:
- **Vertices (Nodes)**: Represent entities.
- **Edges**: Represent connections between nodes.
- **Directed Graph**: Edges have a direction (A → B).
- **Undirected Graph**: Edges have no direction (A - B).
- **Weighted Graph**: Each edge has a weight (cost).
- **Unweighted Graph**: All edges are equal.
- **Sparse Graph**: Few edges.
- **Dense Graph**: Many edges.

Graph Representation:
1. **Adjacency Matrix (O(V²) space, good for dense graphs)**
2. **Adjacency List (O(V+E) space, good for sparse graphs)**

\`\`\`c
// Adjacency List Representation
struct Graph {
    int vertices;
    vector<int> adjList[];
};
\`\`\`

2. Graph Traversal Techniques
### Depth First Search (DFS)
DFS explores as far as possible before backtracking.

\`\`\`c
void DFS(int node, vector<int> adj[], vector<bool> &visited) {
    visited[node] = true;
    printf("%d ", node);
    for (int neighbor : adj[node])
        if (!visited[neighbor])
            DFS(neighbor, adj, visited);
}
\`\`\`

### Breadth First Search (BFS)
BFS explores all neighbors first before moving deeper.

\`\`\`c
void BFS(int start, vector<int> adj[], int V) {
    vector<bool> visited(V, false);
    queue<int> q;
    q.push(start);
    visited[start] = true;

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        printf("%d ", node);
        for (int neighbor : adj[node])
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
    }
}
\`\`\`

3. Shortest Path Algorithms
### Dijkstra’s Algorithm (Single-Source Shortest Path)
Used for graphs with **non-negative** weights.

\`\`\`c
void dijkstra(int src, vector<pair<int, int>> adj[], int V) {
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;
    pq.push({0, src});

    while (!pq.empty()) {
        int node = pq.top().second;
        pq.pop();
        for (auto [weight, neighbor] : adj[node])
            if (dist[node] + weight < dist[neighbor]) {
                dist[neighbor] = dist[node] + weight;
                pq.push({dist[neighbor], neighbor});
            }
    }
}
\`\`\`

### Bellman-Ford Algorithm (Handles negative weights)
Used for graphs with **negative** weight edges.

\`\`\`c
void bellmanFord(int src, vector<vector<int>> &edges, int V) {
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;
    for (int i = 1; i < V; i++)
        for (auto edge : edges)
            if (dist[edge[0]] != INT_MAX && dist[edge[0]] + edge[2] < dist[edge[1]])
                dist[edge[1]] = dist[edge[0]] + edge[2];
}
\`\`\`

4. Minimum Spanning Tree (MST) Algorithms
Used to find the smallest subset of edges that connects all nodes.

### Prim’s Algorithm (Greedy)
- **Used for dense graphs** (Adjacency matrix).
- **Time Complexity: O(V²) or O(E log V) using min-heap**.

\`\`\`c
void primsMST(int V, vector<pair<int, int>> adj[]) {
    vector<bool> inMST(V, false);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, 0});
    int cost = 0;

    while (!pq.empty()) {
        int node = pq.top().second;
        int weight = pq.top().first;
        pq.pop();

        if (inMST[node]) continue;
        inMST[node] = true;
        cost += weight;

        for (auto [w, neighbor] : adj[node])
            if (!inMST[neighbor]) pq.push({w, neighbor});
    }
    printf("Minimum Spanning Tree Cost: %d", cost);
}
\`\`\`

### Kruskal’s Algorithm (Disjoint Set)
- **Used for sparse graphs** (Edge list).
- **Time Complexity: O(E log E) (Sorting + Union-Find).**

\`\`\`c
void kruskal(int V, vector<vector<int>> &edges) {
    sort(edges.begin(), edges.end(), [](auto &a, auto &b) { return a[2] < b[2]; });
    vector<int> parent(V);
    iota(parent.begin(), parent.end(), 0);

    function<int(int)> find = [&](int node) {
        return parent[node] == node ? node : parent[node] = find(parent[node]);
    };

    int cost = 0;
    for (auto &edge : edges) {
        int u = find(edge[0]), v = find(edge[1]), w = edge[2];
        if (u != v) {
            parent[u] = v;
            cost += w;
        }
    }
    printf("Minimum Spanning Tree Cost: %d", cost);
}
\`\`\`

5. Cycle Detection in Graphs
- **Undirected Graph (Using DFS)**
\`\`\`c
bool detectCycle(int node, int parent, vector<int> adj[], vector<bool> &visited) {
    visited[node] = true;
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            if (detectCycle(neighbor, node, adj, visited)) return true;
        } else if (neighbor != parent) return true;
    }
    return false;
}
\`\`\`

- **Directed Graph (Using DFS – Detect Back Edge)**
\`\`\`c
bool detectCycleDFS(int node, vector<int> adj[], vector<int> &visited) {
    visited[node] = 1;
    for (int neighbor : adj[node]) {
        if (visited[neighbor] == 1) return true;
        if (visited[neighbor] == 0 && detectCycleDFS(neighbor, adj, visited)) return true;
    }
    visited[node] = 2;
    return false;
}
\`\`\`

6. Topological Sorting (DAG Only)
Used for **task scheduling problems**.

### Kahn’s Algorithm (BFS)
\`\`\`c
void topologicalSort(int V, vector<int> adj[]) {
    vector<int> inDegree(V, 0);
    for (int i = 0; i < V; i++)
        for (int neighbor : adj[i])
            inDegree[neighbor]++;

    queue<int> q;
    for (int i = 0; i < V; i++)
        if (inDegree[i] == 0) q.push(i);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        printf("%d ", node);
        for (int neighbor : adj[node])
            if (--inDegree[neighbor] == 0) q.push(neighbor);
    }
}
\`\`\`

7. Advanced Graph Topics
- **Bridges and Articulation Points** (Tarjan’s Algorithm)
- **Strongly Connected Components (SCCs)** (Kosaraju’s Algorithm)
- **Floyd-Warshall Algorithm** (All-Pairs Shortest Paths)
- **Eulerian Path & Hamiltonian Path** (Graph Traversal Problems)

8. Graph Interview Questions & Competitive Programming Topics
- **Find shortest path in an unweighted graph (BFS)**
- **Find cycle in a directed/undirected graph**
- **Implement Kruskal’s and Prim’s algorithms**
- **Check if a graph is bipartite**
- **Find strongly connected components (SCCs)**

This guide covers all key concepts, operations, and common problems related to graphs. 🌐🚀`;

export default Graphs;
