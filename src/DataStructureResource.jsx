import React from "react";

const DataStructureResource = () => {
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#2C3E50",
    },
    section: {
      marginBottom: "30px",
    },
    sectionHeading: {
      fontSize: "2rem",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#34495E",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#333",
      marginBottom: "15px",
    },
    codeBlock: {
      backgroundColor: "#F4F4F4",
      padding: "15px",
      borderRadius: "8px",
      overflowX: "auto",
      marginBottom: "20px",
      fontFamily: "monospace",
      fontSize: "0.9rem",
    },
    list: {
      marginLeft: "20px",
      marginBottom: "15px",
    },
    listItem: {
      marginBottom: "8px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Data Structures</h1>

      {/* Introduction */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>
          1. Introduction to Data Structures
        </h2>
        <p style={styles.paragraph}>
          A Data Structure is a method of organizing and storing data in a way
          that enables efficient access and modification. They provide a means
          to manage large amounts of data for various operations such as
          searching, sorting, and more.
        </p>
      </section>

      {/* Classification of Data Structures */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>
          2. Classification of Data Structures
        </h2>
        <p style={styles.paragraph}>
          Data Structures are broadly classified into:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Primitive Data Structures:</strong> Basic data types
            provided by programming languages, such as:
            <ul style={styles.list}>
              <li style={styles.listItem}>Integer (int)</li>
              <li style={styles.listItem}>Float (float)</li>
              <li style={styles.listItem}>Character (char)</li>
              <li style={styles.listItem}>Boolean (bool)</li>
            </ul>
          </li>
          <li style={styles.listItem}>
            <strong>Non-Primitive Data Structures:</strong> More complex data
            structures derived from primitive data structures.
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Linear Data Structures:</strong> Elements are arranged
                sequentially (e.g., Arrays, Linked Lists, Stacks, Queues).
              </li>
              <li style={styles.listItem}>
                <strong>Non-Linear Data Structures:</strong> Elements are not
                arranged sequentially (e.g., Trees, Graphs).
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Arrays */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>3. Arrays</h2>
        <p style={styles.paragraph}>
          An Array is a collection of elements of the same data type stored in
          contiguous memory locations.
        </p>
        <p style={styles.paragraph}>
          <strong>Operations on Arrays:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Insertion: Add an element at a specific index.
          </li>
          <li style={styles.listItem}>
            Deletion: Remove an element from a specific index.
          </li>
          <li style={styles.listItem}>
            Traversal: Access each element of the array.
          </li>
          <li style={styles.listItem}>
            Searching: Find an element (Linear Search, Binary Search).
          </li>
          <li style={styles.listItem}>
            Sorting: Arrange elements (Bubble Sort, Selection Sort, Merge Sort).
          </li>
        </ul>
        <pre style={styles.codeBlock}>
          {`// Example of an array in C++
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    
    // Traversal
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // Insertion
    int pos = 2, newElement = 25;
    for (int i = 4; i >= pos; i--) {
        arr[i + 1] = arr[i];
    }
    arr[pos] = newElement;
    
    // After Insertion
    for (int i = 0; i < 6; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // Deletion
    pos = 3;
    for (int i = pos; i < 5; i++) {
        arr[i] = arr[i + 1];
    }
    
    // After Deletion
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`}
        </pre>
      </section>

      {/* Linked Lists */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>4. Linked Lists</h2>
        <p style={styles.paragraph}>
          A Linked List is a linear data structure where elements are stored in
          nodes, with each node containing data and a reference to the next
          node.
        </p>
        <p style={styles.paragraph}>
          <strong>Types of Linked Lists:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Singly Linked List</li>
          <li style={styles.listItem}>Doubly Linked List</li>
          <li style={styles.listItem}>Circular Linked List</li>
          <li style={styles.listItem}>Circular Doubly Linked List</li>
        </ul>
        <pre style={styles.codeBlock}>
          {`// Example of a Singly Linked List in C++
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void insert(Node** head, int data) {
    Node* newNode = new Node();
    newNode->data = data;
    newNode->next = *head;
    *head = newNode;
}

void display(Node* node) {
    while (node != NULL) {
        cout << node->data << " ";
        node = node->next;
    }
    cout << endl;
}

int main() {
    Node* head = NULL;
    insert(&head, 10);
    insert(&head, 20);
    insert(&head, 30);
    
    display(head);
    
    return 0;
}`}
        </pre>
      </section>

      {/* Stacks */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>5. Stacks</h2>
        <p style={styles.paragraph}>
          A Stack is a linear data structure that follows the Last-In-First-Out
          (LIFO) principle. Elements are added and removed only from the top of
          the stack.
        </p>
        <p style={styles.paragraph}>
          <strong>Key Operations:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Push: Add an element to the top.</li>
          <li style={styles.listItem}>Pop: Remove the top element.</li>
          <li style={styles.listItem}>
            Peek/Top: View the top element without removing it.
          </li>
          <li style={styles.listItem}>isEmpty: Check if the stack is empty.</li>
          <li style={styles.listItem}>
            isFull: Check if the stack is full (in case of a static stack).
          </li>
        </ul>
        <pre style={styles.codeBlock}>
          {`// Example of Stack Implementation in C++
#include <iostream>
using namespace std;

#define SIZE 5

class Stack {
    int top;
    int arr[SIZE];
    
public:
    Stack() { top = -1; }
    
    bool isFull() { return top == SIZE - 1; }
    bool isEmpty() { return top == -1; }
    
    void push(int value) {
        if (isFull()) {
            cout << "Stack Overflow\n";
            return;
        }
        arr[++top] = value;
        cout << value << " pushed to stack\n";
    }
    
    int pop() {
        if (isEmpty()) {
            cout << "Stack Underflow\n";
            return -1;
        }
        return arr[top--];
    }
    
    int peek() {
        if (isEmpty()) {
            cout << "Stack is empty\n";
            return -1;
        }
        return arr[top];
    }
    
    void display() {
        if (isEmpty()) {
            cout << "Stack is empty\n";
            return;
        }
        cout << "Stack elements: ";
        for (int i = top; i >= 0; i--) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Stack stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.display();
    
    cout << "Popped element: " << stack.pop() << endl;
    stack.display();
    
    cout << "Top element: " << stack.peek() << endl;
    
    return 0;
}`}
        </pre>
      </section>

      {/* Queues */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>6. Queues</h2>
        <p style={styles.paragraph}>
          A Queue is a linear data structure that follows the First-In-First-Out
          (FIFO) principle. Elements are added at the rear and removed from the
          front.
        </p>
        <p style={styles.paragraph}>
          <strong>Types of Queues:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Simple Queue: Standard FIFO behavior.</li>
          <li style={styles.listItem}>
            Circular Queue: Connects the rear end back to the front to utilize
            unused space.
          </li>
          <li style={styles.listItem}>
            Priority Queue: Elements are added with priority, and higher
            priority elements are removed first.
          </li>
          <li style={styles.listItem}>
            Deque (Double-Ended Queue): Insertion and deletion can happen at
            both ends.
          </li>
        </ul>
        <pre style={styles.codeBlock}>
          {`// Example of Simple Queue Implementation in C++
#include <iostream>
using namespace std;

#define SIZE 5

class Queue {
    int front, rear;
    int arr[SIZE];
    
public:
    Queue() {
        front = -1;
        rear = -1;
    }
    
    bool isFull() { return rear == SIZE - 1; }
    bool isEmpty() { return front == -1 || front > rear; }
    
    void enqueue(int value) {
        if (isFull()) {
            cout << "Queue Overflow\n";
            return;
        }
        if (front == -1) front = 0;
        arr[++rear] = value;
        cout << value << " enqueued to queue\n";
    }
    
    int dequeue() {
        if (isEmpty()) {
            cout << "Queue Underflow\n";
            return -1;
        }
        return arr[front++];
    }
    
    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty\n";
            return -1;
        }
        return arr[front];
    }
    
    void display() {
        if (isEmpty()) {
            cout << "Queue is empty\n";
            return;
        }
        cout << "Queue elements: ";
        for (int i = front; i <= rear; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Queue queue;
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.display();
    
    cout << "Dequeued element: " << queue.dequeue() << endl;
    queue.display();
    
    cout << "Front element: " << queue.peek() << endl;
    
    return 0;
}`}
        </pre>
      </section>

      {/* Trees */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>7. Trees</h2>
        <p style={styles.paragraph}>
          A Tree is a non-linear data structure consisting of nodes connected by
          edges. It has a hierarchical structure with a root node and child
          nodes.
        </p>
        <p style={styles.paragraph}>
          <strong>Types of Trees:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Binary Tree: Each node has at most 2 children.
          </li>
          <li style={styles.listItem}>
            Binary Search Tree (BST): A binary tree with ordered nodes.
          </li>
          <li style={styles.listItem}>AVL Tree: A self-balancing BST.</li>
          <li style={styles.listItem}>
            B-Tree: A generalized binary search tree for databases.
          </li>
          <li style={styles.listItem}>
            Red-Black Tree: A balanced binary tree with coloring rules.
          </li>
          <li style={styles.listItem}>
            N-ary Tree: A tree where each node can have at most N children.
          </li>
        </ul>
        <pre style={styles.codeBlock}>
          {`// Example of Binary Search Tree (BST) Implementation in C++
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
    
    Node(int value) {
        data = value;
        left = right = NULL;
    }
};

Node* insert(Node* root, int data) {
    if (root == NULL) return new Node(data);
    if (data < root->data)
        root->left = insert(root->left, data);
    else
        root->right = insert(root->right, data);
    return root;
}

void inorderTraversal(Node* root) {
    if (root != NULL) {
        inorderTraversal(root->left);
        cout << root->data << " ";
        inorderTraversal(root->right);
    }
}

int main() {
    Node* root = NULL;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 70);
    insert(root, 20);
    insert(root, 40);
    insert(root, 60);
    insert(root, 80);
    
    cout << "Inorder Traversal: ";
    inorderTraversal(root);
    cout << endl;
    
    return 0;
}`}
        </pre>
      </section>

      {/* Graphs */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>8. Graphs</h2>
        <p style={styles.paragraph}>
          A Graph is a non-linear data structure consisting of vertices (nodes)
          and edges (connections) between them. Graphs can represent complex
          relationships, such as social networks, maps, and network topologies.
        </p>
        <p style={styles.paragraph}>
          <strong>Types of Graphs:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Directed Graph (Digraph): Edges have a direction (one-way
            connection).
          </li>
          <li style={styles.listItem}>
            Undirected Graph: Edges are bidirectional.
          </li>
          <li style={styles.listItem}>
            Weighted Graph: Edges have weights (costs associated with
            connections).
          </li>
          <li style={styles.listItem}>
            Unweighted Graph: All edges have the same weight.
          </li>
        </ul>
        <pre style={styles.codeBlock}>
          {`// Example of Graph Implementation using Adjacency List in C++
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Graph {
    int vertices;
    vector<vector<int>> adjList;

public:
    Graph(int v) {
        vertices = v;
        adjList.resize(v);
    }

    void addEdge(int src, int dest) {
        adjList[src].push_back(dest);
        adjList[dest].push_back(src); // For undirected graph
    }

    // Breadth-First Search (BFS)
    void bfs(int start) {
        vector<bool> visited(vertices, false);
        queue<int> q;
        
        visited[start] = true;
        q.push(start);
        
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            cout << node << " ";
            
            for (int neighbor : adjList[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
                }
            }
        }
        cout << endl;
    }

    // Depth-First Search (DFS)
    void dfsUtil(int node, vector<bool>& visited) {
        visited[node] = true;
        cout << node << " ";
        
        for (int neighbor : adjList[node]) {
            if (!visited[neighbor]) {
                dfsUtil(neighbor, visited);
            }
        }
    }

    void dfs(int start) {
        vector<bool> visited(vertices, false);
        dfsUtil(start, visited);
        cout << endl;
    }
};

int main() {
    Graph g(5);
    g.addEdge(0, 1);
    g.addEdge(0, 4);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);
    
    cout << "BFS starting from vertex 0: ";
    g.bfs(0);
    
    cout << "DFS starting from vertex 0: ";
    g.dfs(0);
    
    return 0;
}`}
        </pre>
      </section>

      {/* Hashing */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>9. Hashing</h2>
        <p style={styles.paragraph}>
          Hashing is a technique used to map data to a specific location within
          a data structure called a Hash Table. The position is determined by a
          Hash Function.
        </p>
        <p style={styles.paragraph}>
          <strong>Key Concepts:</strong>
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Hash Table: An array-like data structure that stores elements based
            on hash values.
          </li>
          <li style={styles.listItem}>
            Hash Function: Converts input (e.g., a key) into an index for the
            hash table.
          </li>
          <li style={styles.listItem}>
            Collision: When two keys produce the same hash index.
          </li>
        </ul>
        <pre style={styles.codeBlock}>
          {`// Example of Hash Table with Chaining in C++
#include <iostream>
#include <list>
using namespace std;

class HashTable {
    int size;
    list<int>* table;

public:
    HashTable(int s) {
        size = s;
        table = new list<int>[size];
    }

    int hashFunction(int key) {
        return key % size;
    }

    void insert(int key) {
        int index = hashFunction(key);
        table[index].push_back(key);
    }

    void remove(int key) {
        int index = hashFunction(key);
        table[index].remove(key);
    }

    void display() {
        for (int i = 0; i < size; i++) {
            cout << i;
            for (auto x : table[i])
                cout << " --> " << x;
            cout << endl;
        }
    }
};

int main() {
    HashTable ht(7);
    ht.insert(10);
    ht.insert(20);
    ht.insert(15);
    ht.insert(7);
    ht.insert(22);
    ht.insert(35);
    
    cout << "Hash Table:\n";
    ht.display();
    
    ht.remove(15);
    cout << "\nAfter Deletion:\n";
    ht.display();
    
    return 0;
}`}
        </pre>
      </section>

      {/* Heaps */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>10. Heaps</h2>
        <p style={styles.paragraph}>
          A Heap is a special Complete Binary Tree where:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Min-Heap: The value of each node is less than or equal to its
            children.
          </li>
          <li style={styles.listItem}>
            Max-Heap: The value of each node is greater than or equal to its
            children.
          </li>
        </ul>
        <pre style={styles.codeBlock}>
          {`// Example of Min-Heap Implementation in C++
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class MinHeap {
    vector<int> heap;
    
public:
    void insert(int val) {
        heap.push_back(val);
        int i = heap.size() - 1;
        while (i != 0 && heap[(i - 1) / 2] > heap[i]) {
            swap(heap[i], heap[(i - 1) / 2]);
            i = (i - 1) / 2;
        }
    }

    void heapify(int i) {
        int smallest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        
        if (left < heap.size() && heap[left] < heap[smallest])
            smallest = left;
        if (right < heap.size() && heap[right] < heap[smallest])
            smallest = right;
        if (smallest != i) {
            swap(heap[i], heap[smallest]);
            heapify(smallest);
        }
    }

    int extractMin() {
        if (heap.size() == 0) return -1;
        if (heap.size() == 1) {
            int min = heap[0];
            heap.pop_back();
            return min;
        }
        
        int min = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        heapify(0);
        
        return min;
    }

    void display() {
        for (int i : heap)
            cout << i << " ";
        cout << endl;
    }
};

int main() {
    MinHeap mh;
    mh.insert(3);
    mh.insert(2);
    mh.insert(15);
    mh.insert(5);
    mh.insert(4);
    mh.insert(45);
    
    cout << "Min-Heap: ";
    mh.display();
    
    cout << "Extracted Min: " << mh.extractMin() << endl;
    
    cout << "Min-Heap after extraction: ";
    mh.display();
    
    return 0;
}`}
        </pre>
      </section>

      {/* Tries */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>11. Tries (Prefix Trees)</h2>
        <p style={styles.paragraph}>
          A Trie is a special type of tree data structure used to efficiently
          store and search strings, especially for autocomplete and dictionary
          word search applications.
        </p>
        <pre style={styles.codeBlock}>
          {`// Example of Trie Implementation in C++
#include <iostream>
#include <unordered_map>
using namespace std;

// Trie Node
struct TrieNode {
    unordered_map<char, TrieNode*> children;
    bool isEndOfWord = false;
};

class Trie {
    TrieNode* root;

public:
    Trie() {
        root = new TrieNode();
    }

    // Insert a word into the Trie
    void insert(string word) {
        TrieNode* current = root;
        for (char ch : word) {
            if (current->children.find(ch) == current->children.end()) {
                current->children[ch] = new TrieNode();
            }
            current = current->children[ch];
        }
        current->isEndOfWord = true;
    }

    // Search for a word in the Trie
    bool search(string word) {
        TrieNode* current = root;
        for (char ch : word) {
            if (current->children.find(ch) == current->children.end()) {
                return false;
            }
            current = current->children[ch];
        }
        return current->isEndOfWord;
    }

    // Check if a prefix exists in the Trie
    bool startsWith(string prefix) {
        TrieNode* current = root;
        for (char ch : prefix) {
            if (current->children.find(ch) == current->children.end()) {
                return false;
            }
            current = current->children[ch];
        }
        return true;
    }
};

int main() {
    Trie trie;
    trie.insert("hello");
    trie.insert("world");
    trie.insert("hi");
    
    cout << "Search 'hello': " << (trie.search("hello") ? "Found" : "Not Found") << endl;
    cout << "Search 'wor': " << (trie.startsWith("wor") ? "Prefix Found" : "Prefix Not Found") << endl;
    cout << "Search 'bye': " << (trie.search("bye") ? "Found" : "Not Found") << endl;
    
    return 0;
}`}
        </pre>
      </section>

      {/* Disjoint Set (Union-Find) */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>12. Disjoint Set (Union-Find)</h2>
        <p style={styles.paragraph}>
          A Disjoint Set, also known as Union-Find, is a data structure that
          keeps track of a set of elements partitioned into disjoint
          (non-overlapping) subsets. It is particularly useful for graph cycle
          detection and network connectivity problems.
        </p>
        <pre style={styles.codeBlock}>
          {`// Example of Disjoint Set Implementation in C++
#include <iostream>
#include <vector>
using namespace std;

class DisjointSet {
    vector<int> parent, rank;

public:
    DisjointSet(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }

    // Find with path compression
    int find(int u) {
        if (u != parent[u]) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }

    // Union by rank
    void unionSets(int u, int v) {
        int rootU = find(u);
        int rootV = find(v);
        
        if (rootU != rootV) {
            if (rank[rootU] > rank[rootV]) {
                parent[rootV] = rootU;
            } else if (rank[rootU] < rank[rootV]) {
                parent[rootU] = rootV;
            } else {
                parent[rootV] = rootU;
                rank[rootU]++;
            }
        }
    }
};

int main() {
    DisjointSet ds(5);
    
    ds.unionSets(0, 2);
    ds.unionSets(4, 2);
    ds.unionSets(3, 1);
    
    cout << "Find 4: " << ds.find(4) << endl;
    cout << "Find 3: " << ds.find(3) << endl;
    
    ds.unionSets(1, 2);
    cout << "Find 3 after union: " << ds.find(3) << endl;
    
    return 0;
}`}
        </pre>
      </section>

      {/* Advanced Data Structures */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>13. Advanced Data Structures</h2>
        <p style={styles.paragraph}>
          <strong>1. Segment Tree:</strong> Efficiently perform range queries
          and updates (e.g., sum, minimum, maximum) on an array.
        </p>
        <p style={styles.paragraph}>
          <strong>2. Fenwick Tree (Binary Indexed Tree):</strong> Another way to
          handle range queries with point updates.
        </p>
        <p style={styles.paragraph}>
          <strong>3. B-Trees and B+ Trees:</strong> Self-balancing search trees
          that maintain sorted data, ideal for databases and file systems.
        </p>
        <p style={styles.paragraph}>
          <strong>4. AVL Trees:</strong> A self-balancing binary search tree
          where the difference between the heights of the left and right
          subtrees cannot be more than one.
        </p>
        <p style={styles.paragraph}>
          <strong>5. Suffix Tree:</strong> A compressed trie of all suffixes of
          a given string.
        </p>
      </section>

      {/* Conclusion */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>14. Conclusion</h2>
        <p style={styles.paragraph}>
          Understanding and implementing various data structures is crucial for
          solving complex problems and optimizing algorithms. Mastery of data
          structures enhances problem-solving skills and improves code
          efficiency.
        </p>
      </section>
    </div>
  );
};

export default DataStructureResource;
