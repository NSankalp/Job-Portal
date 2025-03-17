const Queues = `Queues Complete Revision Guide

1. Introduction to Queues
A **queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle.  
Example: A queue of people waiting at a ticket counter – the first person to join is the first to be served.

Key Operations:
- **Enqueue(x)** → Inserts element x at the end.
- **Dequeue()** → Removes and returns the front element.
- **Front() / Peek()** → Returns the front element without removing it.
- **isEmpty()** → Checks if the queue is empty.

### 2. Queue Implementation
#### Using Arrays (Fixed size, O(1) operations)
\`\`\`c
struct Queue {
    int arr[1000], front = 0, rear = -1, size = 0;
    void enqueue(int x) { if (size < 1000) arr[++rear] = x, size++; }
    int dequeue() { return size > 0 ? (size--, arr[front++]) : -1; }
    int peek() { return size > 0 ? arr[front] : -1; }
    bool isEmpty() { return size == 0; }
};
\`\`\`

#### Using Linked List (Dynamic size, O(1) operations)
\`\`\`c
struct Node {
    int data;
    Node* next;
};
struct Queue {
    Node *front = NULL, *rear = NULL;
    void enqueue(int x) {
        Node* newNode = new Node{x, NULL};
        if (!rear) front = rear = newNode;
        else rear->next = newNode, rear = newNode;
    }
    int dequeue() {
        if (!front) return -1;
        int val = front->data;
        Node* temp = front;
        front = front->next;
        if (!front) rear = NULL;
        delete temp;
        return val;
    }
    int peek() { return front ? front->data : -1; }
    bool isEmpty() { return front == NULL; }
};
\`\`\`

### 3. Applications of Queue
- **CPU Scheduling (Round-Robin Scheduling)**
- **Breadth-First Search (BFS) in Graphs**
- **Handling requests (Print Queue, Web Server Requests)**
- **Caching (Least Recently Used - LRU Cache)**
- **Task Scheduling**
- **Tree Traversals (Level Order Traversal in Trees)**

### 4. Problems on Queues

#### 1. **Implement Stack using Queues**
Use two queues to implement a stack.

\`\`\`c
struct StackUsingQueue {
    queue<int> q;
    void push(int x) {
        q.push(x);
        for (int i = 0; i < q.size() - 1; i++) {
            q.push(q.front());
            q.pop();
        }
    }
    int pop() { int val = q.front(); q.pop(); return val; }
    int top() { return q.front(); }
    bool isEmpty() { return q.empty(); }
};
\`\`\`

#### 2. **First Non-Repeating Character in a Stream**
Find the first non-repeating character in a stream of characters.

\`\`\`c
string firstNonRepeating(string s) {
    queue<char> q;
    unordered_map<char, int> freq;
    string res = "";
    
    for (char c : s) {
        freq[c]++;
        q.push(c);
        while (!q.empty() && freq[q.front()] > 1) q.pop();
        res += q.empty() ? '#' : q.front();
    }
    return res;
}
\`\`\`

#### 3. **Generate Binary Numbers from 1 to N**
Generate binary representations of numbers from 1 to N using a queue.

\`\`\`c
vector<string> generateBinary(int N) {
    vector<string> res;
    queue<string> q;
    q.push("1");
    while (N--) {
        string s = q.front();
        q.pop();
        res.push_back(s);
        q.push(s + "0");
        q.push(s + "1");
    }
    return res;
}
\`\`\`

#### 4. **LRU Cache Implementation**
Implement an LRU Cache using a queue and a hash map.

\`\`\`c
class LRUCache {
    int cap;
    list<int> dq;
    unordered_map<int, pair<int, list<int>::iterator>> cache;
    
public:
    LRUCache(int capacity) : cap(capacity) {}
    
    int get(int key) {
        if (cache.find(key) == cache.end()) return -1;
        dq.erase(cache[key].second);
        dq.push_front(key);
        cache[key].second = dq.begin();
        return cache[key].first;
    }
    
    void put(int key, int value) {
        if (cache.find(key) != cache.end()) dq.erase(cache[key].second);
        else if (dq.size() == cap) {
            cache.erase(dq.back());
            dq.pop_back();
        }
        dq.push_front(key);
        cache[key] = {value, dq.begin()};
    }
};
\`\`\`

### 5. Advanced Queue Problems
#### **5.1 Circular Queue Implementation**
A circular queue efficiently utilizes space.

\`\`\`c
struct CircularQueue {
    vector<int> arr;
    int front = -1, rear = -1, size;
    
    CircularQueue(int k) : arr(k), size(k) {}
    
    bool enqueue(int x) {
        if ((rear + 1) % size == front) return false;
        if (front == -1) front = 0;
        rear = (rear + 1) % size;
        arr[rear] = x;
        return true;
    }
    
    int dequeue() {
        if (front == -1) return -1;
        int val = arr[front];
        if (front == rear) front = rear = -1;
        else front = (front + 1) % size;
        return val;
    }
    
    int peek() { return front != -1 ? arr[front] : -1; }
    bool isEmpty() { return front == -1; }
};
\`\`\`

#### **5.2 Sliding Window Maximum**
Find the maximum in every window of size k.

\`\`\`c
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq;
    vector<int> res;
    
    for (int i = 0; i < nums.size(); i++) {
        while (!dq.empty() && dq.front() < i - k + 1) dq.pop_front();
        while (!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back();
        dq.push_back(i);
        if (i >= k - 1) res.push_back(nums[dq.front()]);
    }
    return res;
}
\`\`\`

#### **5.3 Rotten Oranges Problem**
Find the minimum time required to rot all oranges.

\`\`\`c
int orangesRotting(vector<vector<int>>& grid) {
    int rows = grid.size(), cols = grid[0].size(), fresh = 0, time = 0;
    queue<pair<int, int>> q;
    
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            if (grid[i][j] == 2) q.push({i, j});
            else if (grid[i][j] == 1) fresh++;
    
    vector<int> dir = {-1, 0, 1, 0, -1};
    
    while (!q.empty() && fresh) {
        int sz = q.size();
        while (sz--) {
            auto [x, y] = q.front(); q.pop();
            for (int d = 0; d < 4; d++) {
                int nx = x + dir[d], ny = y + dir[d + 1];
                if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny] == 1) {
                    grid[nx][ny] = 2;
                    q.push({nx, ny});
                    fresh--;
                }
            }
        }
        time++;
    }
    return fresh ? -1 : time;
}
\`\`\`

### 6. Queue in Competitive Programming
- **Sliding Window Maximum**
- **BFS in Graphs**
- **Task Scheduling**
- **Shortest Path in Unweighted Graph**
- **Rotting Oranges problem**
- **First Unique Character in a Stream**

### 7. Important Queue Interview Questions
- **Reverse a Queue using Recursion**
- **Find the first non-repeating character in a stream**
- **Circular Queue implementation**
- **Implement a Deque (Double-ended Queue)**
- **Design an efficient task scheduler**

This guide covers all essential concepts, problems, and implementations for queues. 📚🚀`;

export default Queues;
