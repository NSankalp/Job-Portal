export const programsData = {
  "c++": {
    list: [
      // Keep the existing list structure
      {
        title: "Hello World",
        description: "Prints 'Hello World' to the console.",
        difficulty: "Easy",
      },
      {
        title: "Factorial",
        description:
          "Calculates the factorial of a given number using recursion.",
        difficulty: "Medium",
      },
      {
        title: "Prime Number Checker",
        description: "Checks if a given number is prime or not.",
        difficulty: "Medium",
      },
      {
        title: "Fibonacci Sequence",
        description:
          "Generates the Fibonacci sequence up to a given number using recursion and iteration.",
        difficulty: "Medium",
      },
      {
        title: "Palindrome Number",
        description: "Checks whether a given number is a palindrome.",
        difficulty: "Easy",
      },
      {
        title: "Reverse a String",
        description:
          "Reverses a given string without using built-in functions.",
        difficulty: "Easy",
      },
      {
        title: "Binary Search",
        description: "Implements binary search on a sorted array.",
        difficulty: "Medium",
      },
      {
        title: "Bubble Sort",
        description: "Sorts an array using the Bubble Sort algorithm.",
        difficulty: "Easy",
      },
      {
        title: "Merge Sort",
        description: "Sorts an array using the Merge Sort algorithm.",
        difficulty: "Medium",
      },
      {
        title: "Quick Sort",
        description: "Sorts an array using the Quick Sort algorithm.",
        difficulty: "Hard",
      },
      {
        title: "Find the Largest Element",
        description: "Finds the largest element in an array.",
        difficulty: "Easy",
      },
      {
        title: "Check Anagram",
        description: "Checks if two given strings are anagrams of each other.",
        difficulty: "Medium",
      },
      {
        title: "Two Sum Problem",
        description:
          "Finds two numbers in an array that add up to a given target.",
        difficulty: "Medium",
      },
      {
        title: "Remove Duplicates from Array",
        description: "Removes duplicate elements from a sorted array.",
        difficulty: "Medium",
      },
      {
        title: "Linked List Cycle Detection",
        description:
          "Detects a cycle in a linked list using Floyd’s Cycle Detection Algorithm.",
        difficulty: "Medium",
      },
      {
        title: "Reverse a Linked List",
        description:
          "Reverses a singly linked list iteratively and recursively.",
        difficulty: "Medium",
      },
      {
        title: "Stack Implementation",
        description: "Implements a stack using arrays or linked lists.",
        difficulty: "Medium",
      },
      {
        title: "Queue Using Two Stacks",
        description: "Implements a queue using two stacks.",
        difficulty: "Hard",
      },
      {
        title: "Balanced Parentheses",
        description:
          "Checks if a given string has balanced parentheses using a stack.",
        difficulty: "Medium",
      },
      {
        title: "Graph BFS Traversal",
        description:
          "Implements Breadth-First Search (BFS) traversal on a graph.",
        difficulty: "Medium",
      },
      {
        title: "Graph DFS Traversal",
        description:
          "Implements Depth-First Search (DFS) traversal on a graph.",
        difficulty: "Medium",
      },
      {
        title: "Dijkstra’s Algorithm",
        description:
          "Finds the shortest path in a weighted graph using Dijkstra’s algorithm.",
        difficulty: "Hard",
      },
      {
        title: "N-Queens Problem",
        description: "Solves the N-Queens problem using backtracking.",
        difficulty: "Hard",
      },
      {
        title: "Knapsack Problem",
        description:
          "Solves the 0/1 Knapsack problem using dynamic programming.",
        difficulty: "Hard",
      },
      {
        title: "Longest Common Subsequence",
        description:
          "Finds the longest common subsequence between two strings using dynamic programming.",
        difficulty: "Hard",
      },
      {
        title: "Find the Missing Number",
        description:
          "Finds the missing number in an array of consecutive numbers.",
        difficulty: "Medium",
      },
      {
        title: "Median of Two Sorted Arrays",
        description: "Finds the median of two sorted arrays efficiently.",
        difficulty: "Hard",
      },
      {
        title: "LRU Cache Implementation",
        description:
          "Implements an LRU (Least Recently Used) cache using a hash map and doubly linked list.",
        difficulty: "Hard",
      },
      {
        title: "Sudoku Solver",
        description: "Solves a Sudoku puzzle using backtracking.",
        difficulty: "Hard",
      },
    ],
    details: {
      "Hello World": {
        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World" << endl;
    return 0;
}`,
        testCases: [{ input: "", expectedOutput: "Hello World" }],
      },
      Factorial: {
        code: `#include <iostream>
using namespace std;

int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

int main() {
    int num;
    while(cin >> num) {
        cout << factorial(num) << endl;
    }
    return 0;
}`,
        testCases: [
          { input: "5", expectedOutput: "120" },
          { input: "0", expectedOutput: "1" },
          { input: "10", expectedOutput: "3628800" },
        ],
      },
      "Prime Number Checker": {
        code: `#include <iostream>
using namespace std;

bool isPrime(int n) {
    if(n <= 1) return false;
    for(int i=2; i*i<=n; i++) {
        if(n%i == 0) return false;
    }
    return true;
}

int main() {
    int num;
    while(cin >> num) {
        cout << (isPrime(num) ? "Prime" : "Not Prime") << endl;
    }
    return 0;
}`,
        testCases: [
          { input: "7", expectedOutput: "Prime" },
          { input: "4", expectedOutput: "Not Prime" },
          { input: "1", expectedOutput: "Not Prime" },
        ],
      },
      // Add similar entries for all other C++ programs

      // Previous implementations...
      "Fibonacci Sequence": {
        code: `#include <iostream>
using namespace std;

void fibonacci(int n) {
    int a = 0, b = 1;
    for(int i = 0; i < n; i++) {
        cout << a << " ";
        int temp = a;
        a = b;
        b = temp + b;
    }
}

int main() {
    int num;
    while(cin >> num) {
        fibonacci(num);
        cout << endl;
    }
    return 0;
}`,
        testCases: [
          { input: "5", expectedOutput: "0 1 1 2 3 " },
          { input: "7", expectedOutput: "0 1 1 2 3 5 8 " },
        ],
      },
      "Palindrome Number": {
        code: `#include <iostream>
using namespace std;

bool isPalindrome(int n) {
    int original = n, reversed = 0;
    while(n > 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    return original == reversed;
}

int main() {
    int num;
    while(cin >> num) {
        cout << (isPalindrome(num) ? "true" : "false") << endl;
    }
    return 0;
}`,
        testCases: [
          { input: "121", expectedOutput: "true" },
          { input: "123", expectedOutput: "false" },
        ],
      },
      "Reverse a String": {
        code: `#include <iostream>
using namespace std;

string reverseString(string s) {
    int n = s.length();
    for(int i=0; i<n/2; i++) {
        swap(s[i], s[n-i-1]);
    }
    return s;
}

int main() {
    string s;
    while(cin >> s) {
        cout << reverseString(s) << endl;
    }
    return 0;
}`,
        testCases: [
          { input: "hello", expectedOutput: "olleh" },
          { input: "racecar", expectedOutput: "racecar" },
        ],
      },
      "Binary Search": {
        code: `#include <iostream>
using namespace std;

int binarySearch(int arr[], int size, int key) {
    int left = 0, right = size - 1;
    while(left <= right) {
        int mid = left + (right - left)/2;
        if(arr[mid] == key) return mid;
        if(arr[mid] < key) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    int size, key;
    while(cin >> size) {
        int arr[size];
        for(int i=0; i<size; i++) cin >> arr[i];
        while(cin >> key) {
            cout << binarySearch(arr, size, key) << endl;
        }
    }
    return 0;
}`,
        testCases: [
          { input: "5\n2 4 6 8 10\n6", expectedOutput: "2" },
          { input: "5\n1 3 5 7 9\n4", expectedOutput: "-1" },
        ],
      },
      // Continue with all other programs...
      "Bubble Sort": {
        code: `#include <iostream>
using namespace std;

void bubbleSort(int arr[], int size) {
    for(int i=0; i<size-1; i++) {
        for(int j=0; j<size-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}

int main() {
    int size;
    while(cin >> size) {
        int arr[size];
        for(int i=0; i<size; i++) cin >> arr[i];
        bubbleSort(arr, size);
        for(int i=0; i<size; i++) cout << arr[i] << " ";
        cout << endl;
    }
    return 0;
}`,
        testCases: [
          { input: "5\n5 4 3 2 1", expectedOutput: "1 2 3 4 5 " },
          { input: "3\n3 1 2", expectedOutput: "1 2 3 " },
        ],
      },
      "Merge Sort": {
        code: `#include <iostream>
using namespace std;

void merge(int arr[], int l, int m, int r) {
    // Implementation
}

void mergeSort(int arr[], int l, int r) {
    if(l < r) {
        int m = l + (r-l)/2;
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
        merge(arr, l, m, r);
    }
}

int main() {
    int size;
    while(cin >> size) {
        int arr[size];
        for(int i=0; i<size; i++) cin >> arr[i];
        mergeSort(arr, 0, size-1);
        for(int i=0; i<size; i++) cout << arr[i] << " ";
        cout << endl;
    }
    return 0;
}`,
        testCases: [{ input: "5\n5 4 3 2 1", expectedOutput: "1 2 3 4 5 " }],
      },
    },
  },
  python: {
    list: [
      // Python programs list
      {
        title: "Hello World",
        description: "Prints 'Hello World' to the console.",
        difficulty: "Easy",
      },
      {
        title: "Factorial",
        description:
          "Calculates the factorial of a given number using recursion.",
        difficulty: "Medium",
      },
      {
        title: "Prime Number Checker",
        description: "Checks if a given number is prime or not.",
        difficulty: "Medium",
      },
      {
        title: "Fibonacci Sequence",
        description:
          "Generates the Fibonacci sequence up to a given number using recursion and iteration.",
        difficulty: "Medium",
      },
      {
        title: "Palindrome Number",
        description: "Checks whether a given number is a palindrome.",
        difficulty: "Easy",
      },
      {
        title: "Reverse a String",
        description:
          "Reverses a given string without using built-in functions.",
        difficulty: "Easy",
      },
      {
        title: "Binary Search",
        description: "Implements binary search on a sorted array.",
        difficulty: "Medium",
      },
      {
        title: "Bubble Sort",
        description: "Sorts an array using the Bubble Sort algorithm.",
        difficulty: "Easy",
      },
      {
        title: "Merge Sort",
        description: "Sorts an array using the Merge Sort algorithm.",
        difficulty: "Medium",
      },
      {
        title: "Quick Sort",
        description: "Sorts an array using the Quick Sort algorithm.",
        difficulty: "Hard",
      },
      {
        title: "Find the Largest Element",
        description: "Finds the largest element in an array.",
        difficulty: "Easy",
      },
      {
        title: "Check Anagram",
        description: "Checks if two given strings are anagrams of each other.",
        difficulty: "Medium",
      },
      {
        title: "Two Sum Problem",
        description:
          "Finds two numbers in an array that add up to a given target.",
        difficulty: "Medium",
      },
      {
        title: "Remove Duplicates from Array",
        description: "Removes duplicate elements from a sorted array.",
        difficulty: "Medium",
      },
      {
        title: "Linked List Cycle Detection",
        description:
          "Detects a cycle in a linked list using Floyd’s Cycle Detection Algorithm.",
        difficulty: "Medium",
      },
      {
        title: "Reverse a Linked List",
        description:
          "Reverses a singly linked list iteratively and recursively.",
        difficulty: "Medium",
      },
      {
        title: "Stack Implementation",
        description: "Implements a stack using arrays or linked lists.",
        difficulty: "Medium",
      },
      {
        title: "Queue Using Two Stacks",
        description: "Implements a queue using two stacks.",
        difficulty: "Hard",
      },
      {
        title: "Balanced Parentheses",
        description:
          "Checks if a given string has balanced parentheses using a stack.",
        difficulty: "Medium",
      },
      {
        title: "Graph BFS Traversal",
        description:
          "Implements Breadth-First Search (BFS) traversal on a graph.",
        difficulty: "Medium",
      },
      {
        title: "Graph DFS Traversal",
        description:
          "Implements Depth-First Search (DFS) traversal on a graph.",
        difficulty: "Medium",
      },
      {
        title: "Dijkstra’s Algorithm",
        description:
          "Finds the shortest path in a weighted graph using Dijkstra’s algorithm.",
        difficulty: "Hard",
      },
      {
        title: "N-Queens Problem",
        description: "Solves the N-Queens problem using backtracking.",
        difficulty: "Hard",
      },
      {
        title: "Knapsack Problem",
        description:
          "Solves the 0/1 Knapsack problem using dynamic programming.",
        difficulty: "Hard",
      },
      {
        title: "Longest Common Subsequence",
        description:
          "Finds the longest common subsequence between two strings using dynamic programming.",
        difficulty: "Hard",
      },
      {
        title: "Find the Missing Number",
        description:
          "Finds the missing number in an array of consecutive numbers.",
        difficulty: "Medium",
      },
      {
        title: "Median of Two Sorted Arrays",
        description: "Finds the median of two sorted arrays efficiently.",
        difficulty: "Hard",
      },
      {
        title: "LRU Cache Implementation",
        description:
          "Implements an LRU (Least Recently Used) cache using a hash map and doubly linked list.",
        difficulty: "Hard",
      },
      {
        title: "Sudoku Solver",
        description: "Solves a Sudoku puzzle using backtracking.",
        difficulty: "Hard",
      },
    ],
    details: {
      "Hello World": {
        code: `print("Hello World")`,
        testCases: [{ input: "", expectedOutput: "Hello World" }],
      },
      Factorial: {
        code: `def factorial(n):
    # Implement recursive factorial
    pass

if __name__ == "__main__":
    n = int(input())
    print(factorial(n))`,
        testCases: [
          { input: "5", expectedOutput: "120" },
          { input: "0", expectedOutput: "1" },
        ],
      },
      "Prime Number Checker": {
        code: `def is_prime(n):
    # Implement prime check
    pass

if __name__ == "__main__":
    num = int(input())
    print(is_prime(num))`,
        testCases: [
          { input: "7", expectedOutput: "True" },
          { input: "8", expectedOutput: "False" },
        ],
      },
      "Fibonacci Sequence": {
        code: `def fibonacci(n):
    # Generate Fibonacci sequence
    pass

if __name__ == "__main__":
    num = int(input())
    print(fibonacci(num))`,
        testCases: [{ input: "5", expectedOutput: "[0, 1, 1, 2, 3]" }],
      },
      "Palindrome Number": {
        code: `def is_palindrome(num):
    # Check palindrome number
    pass

if __name__ == "__main__":
    num = int(input())
    print(is_palindrome(num))`,
        testCases: [
          { input: "121", expectedOutput: "True" },
          { input: "123", expectedOutput: "False" },
        ],
      },
      "Reverse a String": {
        code: `def reverse_string(s):
    # Reverse without built-in functions
    pass

if __name__ == "__main__":
    s = input().strip()
    print(reverse_string(s))`,
        testCases: [{ input: "hello", expectedOutput: "olleh" }],
      },
      "Binary Search": {
        code: `def binary_search(arr, target):
    # Implement binary search
    pass

if __name__ == "__main__":
    arr = list(map(int, input().split()))
    target = int(input())
    print(binary_search(arr, target))`,
        testCases: [{ input: "1 3 5 7\n5", expectedOutput: "2" }],
      },
      "Bubble Sort": {
        code: `def bubble_sort(arr):
    # Implement bubble sort
    pass

if __name__ == "__main__":
    arr = list(map(int, input().split()))
    print(bubble_sort(arr))`,
        testCases: [{ input: "3 1 2", expectedOutput: "[1, 2, 3]" }],
      },
      "Merge Sort": {
        code: `def merge_sort(arr):
    # Implement merge sort
    pass

if __name__ == "__main__":
    arr = list(map(int, input().split()))
    print(merge_sort(arr))`,
        testCases: [{ input: "3 1 2", expectedOutput: "[1, 2, 3]" }],
      },
      "Quick Sort": {
        code: `def quick_sort(arr):
    # Implement quick sort
    pass

if __name__ == "__main__":
    arr = list(map(int, input().split()))
    print(quick_sort(arr))`,
        testCases: [{ input: "3 1 2", expectedOutput: "[1, 2, 3]" }],
      },
      "Find the Largest Element": {
        code: `def find_largest(arr):
    # Find largest element
    pass

if __name__ == "__main__":
    arr = list(map(int, input().split()))
    print(find_largest(arr))`,
        testCases: [{ input: "3 1 9 4", expectedOutput: "9" }],
      },
      "Check Anagram": {
        /* Existing implementation */
      },
      "Two Sum Problem": {
        /* Existing implementation */
      },
      "Remove Duplicates from Array": {
        code: `def remove_duplicates(arr):
    # Remove duplicates from sorted array
    pass

if __name__ == "__main__":
    arr = list(map(int, input().split()))
    print(remove_duplicates(arr))`,
        testCases: [{ input: "1 1 2", expectedOutput: "[1, 2]" }],
      },
      "Linked List Cycle Detection": {
        code: `class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

def has_cycle(head):
    # Implement Floyd's algorithm
    pass

if __name__ == "__main__":
    # Input handling for linked list
    pass`,
        testCases: [{ input: "1 2 3 2", expectedOutput: "True" }],
      },
      "Reverse a Linked List": {
        code: `class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

def reverse_list(head):
    # Reverse linked list
    pass

if __name__ == "__main__":
    # Input handling for linked list
    pass`,
        testCases: [{ input: "1 2 3", expectedOutput: "3 2 1" }],
      },
      "Stack Implementation": {
        code: `class Stack:
    def __init__(self):
        # Initialize stack
        pass
    
    def push(self, item):
        # Implement push
        pass
    
    def pop(self):
        # Implement pop
        pass

if __name__ == "__main__":
    # Test stack operations
    pass`,
        testCases: [{ input: "push 1\npush 2\npop", expectedOutput: "2" }],
      },
      "Queue Using Two Stacks": {
        code: `class Queue:
    def __init__(self):
        # Initialize with two stacks
        pass
    
    def enqueue(self, item):
        # Implement enqueue
        pass
    
    def dequeue(self):
        # Implement dequeue
        pass

if __name__ == "__main__":
    # Test queue operations
    pass`,
        testCases: [
          { input: "enqueue 1\nenqueue 2\ndequeue", expectedOutput: "1" },
        ],
      },
      "Balanced Parentheses": {
        code: `def is_balanced(s):
    # Implement stack-based solution
    pass

if __name__ == "__main__":
    s = input().strip()
    print(is_balanced(s))`,
        testCases: [
          { input: "{[()]}", expectedOutput: "True" },
          { input: "{[}", expectedOutput: "False" },
        ],
      },
      "Graph BFS Traversal": {
        code: `from collections import deque

def bfs(graph, start):
    # Implement BFS
    pass

if __name__ == "__main__":
    # Input handling for graph
    pass`,
        testCases: [{ input: "0:1,2;1:2;2:3", expectedOutput: "[0, 1, 2, 3]" }],
      },
      "Graph DFS Traversal": {
        code: `def dfs(graph, start):
    # Implement DFS
    pass

if __name__ == "__main__":
    # Input handling for graph
    pass`,
        testCases: [{ input: "0:1,2;1:2;2:3", expectedOutput: "[0, 1, 2, 3]" }],
      },
      "Dijkstra’s Algorithm": {
        code: `def dijkstra(graph, start):
    # Implement Dijkstra's
    pass

if __name__ == "__main__":
    # Input handling for weighted graph
    pass`,
        testCases: [
          {
            input: "A B 4\nA C 2\nB C 5",
            expectedOutput: "{'A':0, 'B':4, 'C':2}",
          },
        ],
      },
      "N-Queens Problem": {
        code: `def solve_n_queens(n):
    # Implement backtracking solution
    pass

if __name__ == "__main__":
    n = int(input())
    print(solve_n_queens(n))`,
        testCases: [{ input: "4", expectedOutput: "2 solutions" }],
      },
      "Knapsack Problem": {
        code: `def knapsack(weights, values, capacity):
    # Implement DP solution
    pass

if __name__ == "__main__":
    # Input handling
    pass`,
        testCases: [{ input: "2 3 4\n1 2 5\n10", expectedOutput: "14" }],
      },
      "Longest Common Subsequence": {
        code: `def lcs(s1, s2):
    # Implement DP solution
    pass

if __name__ == "__main__":
    s1 = input().strip()
    s2 = input().strip()
    print(lcs(s1, s2))`,
        testCases: [{ input: "abcde\nace", expectedOutput: "3" }],
      },
      "Find the Missing Number": {
        code: `def find_missing(nums):
    # Find missing number
    pass

if __name__ == "__main__":
    nums = list(map(int, input().split()))
    print(find_missing(nums))`,
        testCases: [{ input: "0 1 3", expectedOutput: "2" }],
      },
      "Median of Two Sorted Arrays": {
        code: `def find_median(nums1, nums2):
    # Implement O(log(min(m,n))) solution
    pass

if __name__ == "__main__":
    nums1 = list(map(int, input().split()))
    nums2 = list(map(int, input().split()))
    print(find_median(nums1, nums2))`,
        testCases: [{ input: "1 3\n2", expectedOutput: "2.0" }],
      },
      "LRU Cache Implementation": {
        code: `class LRUCache:
    def __init__(self, capacity):
        # Initialize data structures
        pass
    
    def get(self, key):
        # Implement get
        pass
    
    def put(self, key, value):
        # Implement put
        pass`,
        testCases: [{ input: "put 1 1\nput 2 2\nget 1", expectedOutput: "1" }],
      },
      "Sudoku Solver": {
        code: `def solve_sudoku(board):
    # Implement backtracking solution
    pass

if __name__ == "__main__":
    # Input handling for Sudoku grid
    pass`,
        testCases: [
          {
            input:
              "53..7....6..195....98....6.8...6...34..8.3..17...2...6.6....28....419..5....8..79",
            expectedOutput: "Solved grid",
          },
        ],
      },
    },
  },
  java: {
    list: [
      // Java programs list
      {
        title: "Hello World",
        description: "Prints 'Hello World' to the console.",
        difficulty: "Easy",
      },
      {
        title: "Factorial",
        description:
          "Calculates the factorial of a given number using recursion.",
        difficulty: "Medium",
      },
      {
        title: "Prime Number Checker",
        description: "Checks if a given number is prime or not.",
        difficulty: "Medium",
      },
      {
        title: "Fibonacci Sequence",
        description:
          "Generates the Fibonacci sequence up to a given number using recursion and iteration.",
        difficulty: "Medium",
      },
      {
        title: "Palindrome Number",
        description: "Checks whether a given number is a palindrome.",
        difficulty: "Easy",
      },
      {
        title: "Reverse a String",
        description:
          "Reverses a given string without using built-in functions.",
        difficulty: "Easy",
      },
      {
        title: "Binary Search",
        description: "Implements binary search on a sorted array.",
        difficulty: "Medium",
      },
      {
        title: "Bubble Sort",
        description: "Sorts an array using the Bubble Sort algorithm.",
        difficulty: "Easy",
      },
      {
        title: "Merge Sort",
        description: "Sorts an array using the Merge Sort algorithm.",
        difficulty: "Medium",
      },
      {
        title: "Quick Sort",
        description: "Sorts an array using the Quick Sort algorithm.",
        difficulty: "Hard",
      },
      {
        title: "Find the Largest Element",
        description: "Finds the largest element in an array.",
        difficulty: "Easy",
      },
      {
        title: "Check Anagram",
        description: "Checks if two given strings are anagrams of each other.",
        difficulty: "Medium",
      },
      {
        title: "Two Sum Problem",
        description:
          "Finds two numbers in an array that add up to a given target.",
        difficulty: "Medium",
      },
      {
        title: "Remove Duplicates from Array",
        description: "Removes duplicate elements from a sorted array.",
        difficulty: "Medium",
      },
      {
        title: "Linked List Cycle Detection",
        description:
          "Detects a cycle in a linked list using Floyd’s Cycle Detection Algorithm.",
        difficulty: "Medium",
      },
      {
        title: "Reverse a Linked List",
        description:
          "Reverses a singly linked list iteratively and recursively.",
        difficulty: "Medium",
      },
      {
        title: "Stack Implementation",
        description: "Implements a stack using arrays or linked lists.",
        difficulty: "Medium",
      },
      {
        title: "Queue Using Two Stacks",
        description: "Implements a queue using two stacks.",
        difficulty: "Hard",
      },
      {
        title: "Balanced Parentheses",
        description:
          "Checks if a given string has balanced parentheses using a stack.",
        difficulty: "Medium",
      },
      {
        title: "Graph BFS Traversal",
        description:
          "Implements Breadth-First Search (BFS) traversal on a graph.",
        difficulty: "Medium",
      },
      {
        title: "Graph DFS Traversal",
        description:
          "Implements Depth-First Search (DFS) traversal on a graph.",
        difficulty: "Medium",
      },
      {
        title: "Dijkstra’s Algorithm",
        description:
          "Finds the shortest path in a weighted graph using Dijkstra’s algorithm.",
        difficulty: "Hard",
      },
      {
        title: "N-Queens Problem",
        description: "Solves the N-Queens problem using backtracking.",
        difficulty: "Hard",
      },
      {
        title: "Knapsack Problem",
        description:
          "Solves the 0/1 Knapsack problem using dynamic programming.",
        difficulty: "Hard",
      },
      {
        title: "Longest Common Subsequence",
        description:
          "Finds the longest common subsequence between two strings using dynamic programming.",
        difficulty: "Hard",
      },
      {
        title: "Find the Missing Number",
        description:
          "Finds the missing number in an array of consecutive numbers.",
        difficulty: "Medium",
      },
      {
        title: "Median of Two Sorted Arrays",
        description: "Finds the median of two sorted arrays efficiently.",
        difficulty: "Hard",
      },
      {
        title: "LRU Cache Implementation",
        description:
          "Implements an LRU (Least Recently Used) cache using a hash map and doubly linked list.",
        difficulty: "Hard",
      },
      {
        title: "Sudoku Solver",
        description: "Solves a Sudoku puzzle using backtracking.",
        difficulty: "Hard",
      },
    ],
    details: {
      "Hello World": {
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
        testCases: [{ input: "", expectedOutput: "Hello World" }],
      },
      Factorial: {
        code: `public class Factorial {
    public static int factorial(int n) {
        // Implement recursive factorial
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(factorial(Integer.parseInt(args[0])));
    }
}`,
        testCases: [{ input: "5", expectedOutput: "120" }],
      },
      "Prime Number Checker": {
        code: `public class PrimeCheck {
    public static boolean isPrime(int n) {
        // Implement prime check
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPrime(Integer.parseInt(args[0])));
    }
}`,
        testCases: [{ input: "7", expectedOutput: "true" }],
      },
      "Fibonacci Sequence": {
        code: `public class Fibonacci {
    public static int[] fibonacci(int n) {
        // Implement iterative/recursive solution
        return new int[0];
    }
    
    public static void main(String[] args) {
        // Test code
    }
}`,
        testCases: [{ input: "5", expectedOutput: "[0, 1, 1, 2, 3]" }],
      },
      "Palindrome Number": {
        code: `public class Palindrome {
    public static boolean isPalindrome(int num) {
        // Implement palindrome check
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome(Integer.parseInt(args[0])));
    }
}`,
        testCases: [{ input: "121", expectedOutput: "true" }],
      },
      "Reverse a String": {
        code: `public class ReverseString {
    public static String reverse(String s) {
        // Implement reversal
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(reverse(args[0]));
    }
}`,
        testCases: [{ input: "hello", expectedOutput: "olleh" }],
      },
      "Binary Search": {
        code: `public class BinarySearch {
    public static int search(int[] arr, int target) {
        // Implement binary search
        return -1;
    }
    
    public static void main(String[] args) {
        // Test code
    }
}`,
        testCases: [{ input: "1 3 5 7 5", expectedOutput: "2" }],
      },
      "Bubble Sort": {
        code: `public class BubbleSort {
    public static int[] sort(int[] arr) {
        // Implement bubble sort
        return arr;
    }
    
    public static void main(String[] args) {
        // Test code
    }
}`,
        testCases: [{ input: "3 1 2", expectedOutput: "[1, 2, 3]" }],
      },
      "Merge Sort": {
        code: `public class MergeSort {
    public static int[] sort(int[] arr) {
        // Implement merge sort
        return arr;
    }
    
    public static void main(String[] args) {
        // Test code
    }
}`,
        testCases: [{ input: "3 1 2", expectedOutput: "[1, 2, 3]" }],
      },
      "Quick Sort": {
        code: `public class QuickSort {
    public static int[] sort(int[] arr) {
        // Implement quick sort
        return arr;
    }
    
    public static void main(String[] args) {
        // Test code
    }
}`,
        testCases: [{ input: "3 1 2", expectedOutput: "[1, 2, 3]" }],
      },
      "Find the Largest Element": {
        code: `public class LargestElement {
    public static int findLargest(int[] arr) {
        // Implement logic
        return Integer.MIN_VALUE;
    }
    
    public static void main(String[] args) {
        // Test code
    }
}`,
        testCases: [{ input: "3 1 9 4", expectedOutput: "9" }],
      },
      "Check Anagram": {
        code: `public class Anagram {
    public static boolean isAnagram(String s1, String s2) {
        // Implement check
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram(args[0], args[1]));
    }
}`,
        testCases: [{ input: "listen silent", expectedOutput: "true" }],
      },
      "Two Sum Problem": {
        code: `public class TwoSum {
    public static int[] findTwoSum(int[] nums, int target) {
        // Implement solution
        return new int[0];
    }
    
    public static void main(String[] args) {
        // Test code
    }
}`,
        testCases: [{ input: "2 7 11 15 9", expectedOutput: "[0, 1]" }],
      },
      "Remove Duplicates from Array": {
        code: `public class RemoveDuplicates {
    public static int[] removeDuplicates(int[] arr) {
        // Implement solution
        return arr;
    }
    
    public static void main(String[] args) {
        // Test code
    }
}`,
        testCases: [{ input: "1 1 2", expectedOutput: "[1, 2]" }],
      },
      "Linked List Cycle Detection": {
        code: `class Node {
    int val;
    Node next;
    Node(int x) { val = x; }
}

public class CycleDetection {
    public static boolean hasCycle(Node head) {
        // Implement Floyd's algorithm
        return false;
    }
}`,
        testCases: [{ input: "1 2 3 2", expectedOutput: "true" }],
      },
      "Reverse a Linked List": {
        code: `public class ReverseLinkedList {
    public static Node reverse(Node head) {
        // Implement reversal
        return null;
    }
}`,
        testCases: [{ input: "1 2 3", expectedOutput: "3 2 1" }],
      },
      "Stack Implementation": {
        code: `public class Stack {
    private int[] arr;
    private int top;
    
    public Stack(int capacity) {
        arr = new int[capacity];
        top = -1;
    }
    
    public void push(int item) { /* Implement */ }
    public int pop() { return -1; /* Implement */ }
}`,
        testCases: [{ input: "push 1, push 2, pop", expectedOutput: "2" }],
      },
      "Queue Using Two Stacks": {
        code: `public class QueueWithStacks {
    private Stack enqStack;
    private Stack deqStack;
    
    public void enqueue(int item) { /* Implement */ }
    public int dequeue() { return -1; /* Implement */ }
}`,
        testCases: [
          { input: "enqueue 1, enqueue 2, dequeue", expectedOutput: "1" },
        ],
      },
      "Balanced Parentheses": {
        code: `public class BalancedParentheses {
    public static boolean isBalanced(String s) {
        // Implement stack solution
        return false;
    }
}`,
        testCases: [{ input: "{[()]}", expectedOutput: "true" }],
      },
      "Graph BFS Traversal": {
        code: `public class GraphBFS {
    public static List<Integer> bfs(Map<Integer, List<Integer>> graph, int start) {
        // Implement BFS
        return new ArrayList<>();
    }
}`,
        testCases: [{ input: "0:1,2;1:2;2:3", expectedOutput: "[0, 1, 2, 3]" }],
      },
      "Graph DFS Traversal": {
        code: `public class GraphDFS {
    public static List<Integer> dfs(Map<Integer, List<Integer>> graph, int start) {
        // Implement DFS
        return new ArrayList<>();
    }
}`,
        testCases: [{ input: "0:1,2;1:2;2:3", expectedOutput: "[0, 1, 2, 3]" }],
      },
      "Dijkstra’s Algorithm": {
        code: `public class Dijkstra {
    public static Map<Integer, Integer> shortestPath(Map<Integer, List<Edge>> graph, int start) {
        // Implement algorithm
        return new HashMap<>();
    }
}

class Edge {
    int target;
    int weight;
}`,
        testCases: [
          { input: "A B 4, A C 2, B C 5", expectedOutput: "{A=0, B=4, C=2}" },
        ],
      },
      "N-Queens Problem": {
        code: `public class NQueens {
    public static List<List<String>> solveNQueens(int n) {
        // Implement backtracking
        return new ArrayList<>();
    }
}`,
        testCases: [{ input: "4", expectedOutput: "2 solutions" }],
      },
      "Knapsack Problem": {
        code: `public class Knapsack {
    public static int maxValue(int[] weights, int[] values, int capacity) {
        // Implement DP solution
        return 0;
    }
}`,
        testCases: [
          {
            input: "weights=[2,3,4], values=[1,2,5], capacity=10",
            expectedOutput: "14",
          },
        ],
      },
      "Longest Common Subsequence": {
        code: `public class LCS {
    public static int lcs(String s1, String s2) {
        // Implement DP solution
        return 0;
    }
}`,
        testCases: [{ input: "abcde ace", expectedOutput: "3" }],
      },
      "Find the Missing Number": {
        code: `public class MissingNumber {
    public static int findMissing(int[] nums) {
        // Implement solution
        return -1;
    }
}`,
        testCases: [{ input: "0 1 3", expectedOutput: "2" }],
      },
      "Median of Two Sorted Arrays": {
        code: `public class MedianSortedArrays {
    public static double findMedian(int[] nums1, int[] nums2) {
        // Implement O(log(min(m,n))) solution
        return 0.0;
    }
}`,
        testCases: [{ input: "[1,3] [2]", expectedOutput: "2.0" }],
      },
      "LRU Cache Implementation": {
        code: `public class LRUCache {
    public LRUCache(int capacity) { /* Implement */ }
    public int get(int key) { return -1; /* Implement */ }
    public void put(int key, int value) { /* Implement */ }
}`,
        testCases: [{ input: "put 1 1, put 2 2, get 1", expectedOutput: "1" }],
      },
      "Sudoku Solver": {
        code: `public class SudokuSolver {
    public static void solveSudoku(char[][] board) {
        // Implement backtracking
    }
}`,
        testCases: [
          {
            input:
              "53..7....6..195....98....6.8...6...34..8.3..17...2...6.6....28....419..5....8..79",
            expectedOutput: "Solved grid",
          },
        ],
      },
    },
  },
};
