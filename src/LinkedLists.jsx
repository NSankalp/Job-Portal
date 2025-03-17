const LinkedLists = `Linked Lists Complete Revision Guide
1. Introduction to Linked Lists
A linked list is a linear data structure where elements (nodes) are connected using pointers. Unlike arrays, linked lists do not require contiguous memory allocation and can dynamically grow or shrink.

Key Features of Linked Lists
- Dynamic size: Can grow and shrink as needed.
- Efficient insertions/deletions: No need to shift elements like in arrays.
- Uses more memory: Each node stores both data and a pointer to the next node.

Types of Linked Lists
- **Singly Linked List**: Each node points to the next node.
- **Doubly Linked List**: Each node has pointers to both previous and next nodes.
- **Circular Linked List**: The last node connects back to the first node.

2. Basic Operations in Linked Lists
Creating a Node
Each node contains data and a pointer to the next node.

\`\`\`c
struct Node {
    int data;
    struct Node* next;
};
\`\`\`

Insertion in Linked List
Nodes can be inserted at the beginning, end, or a specific position.

\`\`\`c
void insertAtBeginning(struct Node** head, int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = *head;
    *head = newNode;
}
\`\`\`

Deletion in Linked List
A node can be deleted by updating the previous node’s pointer.

\`\`\`c
void deleteNode(struct Node** head, int key) {
    struct Node* temp = *head, *prev = NULL;
    if (temp != NULL && temp->data == key) {
        *head = temp->next;
        free(temp);
        return;
    }
    while (temp != NULL && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }
    if (temp == NULL) return;
    prev->next = temp->next;
    free(temp);
}
\`\`\`

3. Doubly Linked List
Each node contains two pointers: one pointing to the next node and one to the previous node.

\`\`\`c
struct DNode {
    int data;
    struct DNode* prev;
    struct DNode* next;
};
\`\`\`

Insertion at the Beginning of a Doubly Linked List

\`\`\`c
void insertAtBeginning(struct DNode** head, int value) {
    struct DNode* newNode = (struct DNode*)malloc(sizeof(struct DNode));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = *head;
    if (*head != NULL) (*head)->prev = newNode;
    *head = newNode;
}
\`\`\`

4. Circular Linked List
A circular linked list is where the last node points back to the first node.

\`\`\`c
struct Node {
    int data;
    struct Node* next;
};
\`\`\`

Traversal of Circular Linked List

\`\`\`c
void traverse(struct Node* head) {
    struct Node* temp = head;
    if (head != NULL) {
        do {
            printf("%d ", temp->data);
            temp = temp->next;
        } while (temp != head);
    }
}
\`\`\`

5. Applications of Linked Lists
- **Dynamic Memory Allocation**
- **Implementation of Stacks and Queues**
- **Graph Representation (Adjacency List)**
- **Efficient Memory Utilization in Data Storage**

6. Linked List Interview Questions & Competitive Programming Topics
To prepare for job interviews, students should focus on:
- **Reversal of a Linked List**
- **Cycle Detection (Floyd’s Cycle Detection Algorithm)**
- **Merge Two Sorted Linked Lists**
- **Find Middle and Nth Node from End**
- **Palindrome Check Using Linked List**
  
Example Question: Reverse a Singly Linked List

\`\`\`c
struct Node* reverseList(struct Node* head) {
    struct Node *prev = NULL, *current = head, *next = NULL;
    while (current != NULL) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
\`\`\`

This guide covers all key concepts, operations, and common problems related to linked lists. 🚀`;

export default LinkedLists;
