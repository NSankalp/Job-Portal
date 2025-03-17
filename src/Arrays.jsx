const Arrays = `Arrays Complete Revision Guide
1. Introduction to Arrays
Arrays are a fundamental data structure that store multiple values of the same data type in contiguous memory locations. They allow efficient indexing and traversal, making them widely used in programming.

Key Features of Arrays
Arrays store elements sequentially, allowing constant-time access using an index. They have a fixed size once declared, meaning memory allocation is static. Arrays can be one-dimensional (1D), multi-dimensional (2D, 3D, etc.), or dynamic (allocated at runtime).

Declaring and Initializing Arrays
In most programming languages, arrays are declared using a specific syntax. Here’s an example in C:

\`\`\`c
int arr[5] = {1, 2, 3, 4, 5};  
\`\`\`
This declares an array of size 5 and initializes it with values.

2. Types of Arrays
One-Dimensional Arrays  
A 1D array represents a linear list of elements.

\`\`\`c
int numbers[3] = {10, 20, 30};
printf("%d", numbers[1]);  // Output: 20
\`\`\`

Multi-Dimensional Arrays  
A multi-dimensional array (e.g., 2D array) represents a table-like structure.

\`\`\`c
int matrix[2][2] = {{1, 2}, {3, 4}};
printf("%d", matrix[0][1]);  // Output: 2
\`\`\`

3. Common Array Operations
Accessing Elements  
Array elements are accessed using indices starting from 0.

\`\`\`c
int arr[] = {5, 10, 15};
printf("%d", arr[0]);  // Output: 5
\`\`\`

Traversing an Array  
Arrays can be traversed using loops.

\`\`\`c
for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
}
\`\`\`

Insertion  
Inserting an element requires shifting elements.

\`\`\`c
arr[2] = 50;  // Updates the 3rd element
\`\`\`

Deletion  
Deleting an element requires shifting the remaining elements.

\`\`\`c
for (int i = pos; i < n - 1; i++) {
    arr[i] = arr[i + 1];
}
\`\`\`

4. Searching in Arrays
Linear Search  
Iterates through each element to find a match.

\`\`\`c
int search(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i;
    }
    return -1;
}
\`\`\`

Binary Search (For Sorted Arrays)  
Uses a divide-and-conquer approach.

\`\`\`c
int binarySearch(int arr[], int low, int high, int key) {
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) return mid;
        else if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
\`\`\`

5. Sorting in Arrays
Bubble Sort  
Repeatedly swaps adjacent elements.

\`\`\`c
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
\`\`\`

Quick Sort  
Uses partitioning to sort efficiently.

\`\`\`c
int partition(int arr[], int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
\`\`\`

6. Two-Pointer Technique
Optimizes problems like finding a pair that sums to a given value.

\`\`\`c
bool twoSum(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        (sum < target) ? left++ : right--;
    }
    return false;
}
\`\`\`

7. Dynamic Arrays
Dynamic arrays allow resizing at runtime using memory allocation.

\`\`\`c
int *arr = (int*)malloc(5 * sizeof(int));  
arr[0] = 1; arr[1] = 2;
free(arr);  // Free allocated memory
\`\`\`

8. Applications of Arrays
- Storing lists of elements efficiently
- Implementing stacks and queues
- Used in sorting and searching algorithms
- Efficient memory management for data storage

9. Interview Questions & Competitive Programming Topics
Arrays are widely tested in coding interviews. Key problems include:
- **Kadane’s Algorithm** (Maximum Subarray Sum)
- **Sliding Window Technique** (Subarrays with given sum)
- **Prefix Sum** (Range sum queries)
- **Merge Intervals** (Overlapping intervals)
- **Dutch National Flag Problem** (Sorting 0s, 1s, 2s)

Example: **Find the maximum subarray sum (Kadane’s Algorithm)**

\`\`\`c
int maxSubArray(int arr[], int n) {
    int maxSum = arr[0], currSum = arr[0];
    for (int i = 1; i < n; i++) {
        currSum = (arr[i] > currSum + arr[i]) ? arr[i] : currSum + arr[i];
        maxSum = (currSum > maxSum) ? currSum : maxSum;
    }
    return maxSum;
}
\`\`\`

This structured guide will help students revise arrays efficiently for coding interviews and competitive programming. 🚀`;

export default Arrays;
