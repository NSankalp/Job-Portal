const Trees = `Trees Complete Revision Guide
1. Introduction to Trees
A tree is a hierarchical data structure that consists of nodes connected by edges. It is widely used for efficient searching, sorting, and hierarchical representation of data.

Key Features of Trees:
- Non-linear data structure
- Consists of nodes (with a value) and edges (connections)
- Root node (topmost node)
- Each node has zero or more child nodes
- Recursive structure

Types of Trees:
- **Binary Tree**: Each node has at most two children (left and right).
- **Binary Search Tree (BST)**: A binary tree where left < root < right.
- **Balanced Trees**: AVL, Red-Black Trees (self-balancing).
- **Heap**: A complete binary tree used for priority-based operations.
- **Trie (Prefix Tree)**: Used for searching words efficiently.
- **Segment Tree**: Used for range queries in arrays.

2. Basic Operations in Trees
Each node in a tree is represented using a structure.

\`\`\`c
struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};
\`\`\`

Insertion in a Binary Search Tree (BST)

\`\`\`c
struct Node* insert(struct Node* root, int value) {
    if (root == NULL) {
        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = value;
        newNode->left = newNode->right = NULL;
        return newNode;
    }
    if (value < root->data) root->left = insert(root->left, value);
    else root->right = insert(root->right, value);
    return root;
}
\`\`\`

Searching in a Binary Search Tree (BST)

\`\`\`c
struct Node* search(struct Node* root, int key) {
    if (root == NULL || root->data == key) return root;
    if (key < root->data) return search(root->left, key);
    return search(root->right, key);
}
\`\`\`

3. Tree Traversal Techniques
Tree traversal is the process of visiting each node in a tree.

- **Inorder Traversal (Left, Root, Right)**
\`\`\`c
void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}
\`\`\`

- **Preorder Traversal (Root, Left, Right)**
\`\`\`c
void preorder(struct Node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}
\`\`\`

- **Postorder Traversal (Left, Right, Root)**
\`\`\`c
void postorder(struct Node* root) {
    if (root != NULL) {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}
\`\`\`

- **Level Order Traversal (BFS)**
\`\`\`c
void levelOrder(struct Node* root) {
    if (root == NULL) return;
    queue<struct Node*> q;
    q.push(root);
    while (!q.empty()) {
        struct Node* temp = q.front();
        q.pop();
        printf("%d ", temp->data);
        if (temp->left) q.push(temp->left);
        if (temp->right) q.push(temp->right);
    }
}
\`\`\`

4. Binary Tree Properties & Height Calculation
- **Height of a Binary Tree**: The number of edges on the longest path from the root to a leaf node.

\`\`\`c
int height(struct Node* root) {
    if (root == NULL) return 0;
    int leftHeight = height(root->left);
    int rightHeight = height(root->right);
    return 1 + max(leftHeight, rightHeight);
}
\`\`\`

5. Balanced Binary Trees (AVL & Red-Black Trees)
AVL trees maintain balance using rotations to ensure **O(log N)** operations.

\`\`\`c
int getBalance(struct Node* root) {
    if (root == NULL) return 0;
    return height(root->left) - height(root->right);
}
\`\`\`

Red-Black Trees are self-balancing BSTs where:
- Each node is either red or black.
- The root node is always black.
- No two consecutive red nodes exist.
- The tree remains balanced using rotations.

6. Heap (Binary Heap)
A **Binary Heap** is a complete binary tree used for **heap sort** and **priority queues**.

- **Min Heap**: The parent is smaller than its children.
- **Max Heap**: The parent is greater than its children.

Heap Insertion

\`\`\`c
void insertHeap(int arr[], int* n, int key) {
    int i = (*n)++;
    while (i && key < arr[(i - 1) / 2]) {
        arr[i] = arr[(i - 1) / 2];
        i = (i - 1) / 2;
    }
    arr[i] = key;
}
\`\`\`

7. Advanced Topics in Trees
- **Lowest Common Ancestor (LCA)**
- **Diameter of a Tree**
- **Morris Traversal (O(1) space traversal)**
- **Trie (Prefix Tree)**
- **Segment Tree (Range Queries)**

8. Tree Interview Questions & Competitive Programming Topics
To prepare for job interviews, students should focus on:
- **Finding the diameter of a tree**
- **Checking if a binary tree is balanced**
- **Finding the lowest common ancestor (LCA)**
- **Converting a BST to a balanced BST**
- **Serializing and deserializing a binary tree**

Example: Find the Lowest Common Ancestor (LCA) in a BST

\`\`\`c
struct Node* findLCA(struct Node* root, int n1, int n2) {
    if (root == NULL) return NULL;
    if (root->data > n1 && root->data > n2) return findLCA(root->left, n1, n2);
    if (root->data < n1 && root->data < n2) return findLCA(root->right, n1, n2);
    return root;
}
\`\`\`

This guide covers all key concepts, operations, and common problems related to trees. 🌳🚀`;

export default Trees;
