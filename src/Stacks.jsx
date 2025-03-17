const Stacks = `Stacks Complete Revision Guide

1. Introduction to Stacks
A **stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle.  
Example: A stack of plates – you add to the top, and remove from the top.

Key Operations:
- **Push(x)** → Inserts element x at the top.
- **Pop()** → Removes and returns the top element.
- **Peek() / Top()** → Returns the top element without removing it.
- **isEmpty()** → Checks if the stack is empty.

### 2. Stack Implementation
#### Using Arrays (Fixed size, O(1) operations)
\`\`\`c
struct Stack {
    int arr[1000], top = -1;
    void push(int x) { if (top < 999) arr[++top] = x; }
    int pop() { return (top >= 0) ? arr[top--] : -1; }
    int peek() { return (top >= 0) ? arr[top] : -1; }
    bool isEmpty() { return top == -1; }
};
\`\`\`

#### Using Linked List (Dynamic size, O(1) operations)
\`\`\`c
struct Node {
    int data;
    Node* next;
};
struct Stack {
    Node* top = NULL;
    void push(int x) {
        Node* newNode = new Node{x, top};
        top = newNode;
    }
    int pop() {
        if (!top) return -1;
        int val = top->data;
        Node* temp = top;
        top = top->next;
        delete temp;
        return val;
    }
    int peek() { return top ? top->data : -1; }
    bool isEmpty() { return top == NULL; }
};
\`\`\`

### 3. Applications of Stack
- **Function Calls (Recursion)**
- **Backtracking (Maze solving, N-Queens)**
- **Expression Evaluation (Postfix, Prefix)**
- **Undo/Redo in editors**
- **Browser History (Back/Forward Navigation)**
- **Parentheses Matching (Valid Parentheses problem)**

### 4. Problems on Stacks

#### 1. **Balanced Parentheses (Valid Parentheses)**
Check if a string of brackets is balanced.

\`\`\`c
bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') st.push(c);
        else {
            if (st.empty() || (st.top() == '(' && c != ')') || (st.top() == '{' && c != '}') || (st.top() == '[' && c != ']')) return false;
            st.pop();
        }
    }
    return st.empty();
}
\`\`\`

#### 2. **Next Greater Element**
Find the **next greater element** for each element in an array.

\`\`\`c
vector<int> nextGreaterElements(vector<int>& nums) {
    int n = nums.size();
    vector<int> res(n, -1);
    stack<int> st;
    for (int i = 2 * n - 1; i >= 0; i--) {
        while (!st.empty() && st.top() <= nums[i % n]) st.pop();
        if (i < n) res[i] = st.empty() ? -1 : st.top();
        st.push(nums[i % n]);
    }
    return res;
}
\`\`\`

#### 3. **Largest Rectangle in Histogram**
Find the **largest rectangular area** in a histogram.

\`\`\`c
int largestRectangleArea(vector<int>& heights) {
    stack<int> st;
    int maxArea = 0, n = heights.size();
    for (int i = 0; i <= n; i++) {
        while (!st.empty() && (i == n || heights[i] < heights[st.top()])) {
            int height = heights[st.top()];
            st.pop();
            int width = st.empty() ? i : i - st.top() - 1;
            maxArea = max(maxArea, height * width);
        }
        st.push(i);
    }
    return maxArea;
}
\`\`\`

#### 4. **Stock Span Problem**
Find how many consecutive days before today had a **lesser or equal price**.

\`\`\`c
vector<int> stockSpan(vector<int>& prices) {
    stack<int> st;
    vector<int> span(prices.size());
    for (int i = 0; i < prices.size(); i++) {
        while (!st.empty() && prices[st.top()] <= prices[i]) st.pop();
        span[i] = st.empty() ? i + 1 : i - st.top();
        st.push(i);
    }
    return span;
}
\`\`\`

### 5. Advanced Stack Problems
#### **5.1 Min Stack (O(1) min retrieval)**
Design a stack that supports push, pop, and retrieving the **minimum element** in O(1).

\`\`\`c
struct MinStack {
    stack<int> s, minS;
    void push(int x) {
        s.push(x);
        if (minS.empty() || x <= minS.top()) minS.push(x);
    }
    void pop() {
        if (s.top() == minS.top()) minS.pop();
        s.pop();
    }
    int top() { return s.top(); }
    int getMin() { return minS.top(); }
};
\`\`\`

#### **5.2 Implement Queue using Stacks**
Implement a queue using two stacks.

\`\`\`c
struct QueueUsingStack {
    stack<int> in, out;
    void push(int x) { in.push(x); }
    int pop() {
        if (out.empty())
            while (!in.empty()) { out.push(in.top()); in.pop(); }
        int val = out.top();
        out.pop();
        return val;
    }
};
\`\`\`

#### **5.3 Maximum Area of Binary Matrix**
Find the largest rectangle of 1s in a binary matrix.

1. Convert each row into a histogram.
2. Solve using **Largest Rectangle in Histogram**.

\`\`\`c
int maxRectangle(vector<vector<int>>& matrix) {
    if (matrix.empty()) return 0;
    int maxArea = 0, cols = matrix[0].size();
    vector<int> heights(cols, 0);

    for (auto& row : matrix) {
        for (int j = 0; j < cols; j++) heights[j] = row[j] ? heights[j] + 1 : 0;
        maxArea = max(maxArea, largestRectangleArea(heights));
    }
    return maxArea;
}
\`\`\`

### 6. Stack in Competitive Programming
- **Span problems** (Stock span, Previous/Next greater element)
- **Largest Rectangle in Histogram**
- **Evaluate Postfix, Prefix expressions**
- **Balanced Parentheses validation**
- **Finding Minimum/Maximum in constant time (Min Stack, Max Stack)**
- **Monotonic Stack for solving range problems efficiently**

### 7. Important Stack Interview Questions
- **Reverse a stack without extra space**
- **Check if a sequence of pushes and pops is valid**
- **Design a stack with max() in O(1)**
- **Find max rectangle of 1s in a binary matrix**
- **Trapping Rain Water problem (using stacks)**

This revision guide covers all essential concepts, problems, and implementations for stacks. 📚🚀`;

export default Stacks;
