const Sorting = `Sorting Complete Revision Guide

### 1. Introduction to Sorting
Sorting is the process of arranging elements in a particular order (ascending or descending). It is fundamental in programming and is used in searching, optimization, and many algorithms.

### 2. Types of Sorting Algorithms
Sorting algorithms can be categorized based on:
- **Time Complexity**: \( O(n^2) \), \( O(n \log n) \), \( O(n) \)
- **Space Complexity**: In-place (constant extra space) or out-of-place (extra memory used)
- **Stability**: A stable sort maintains the relative order of equal elements.

---

## 3. Basic Sorting Algorithms (\(O(n^2)\))

### **1. Bubble Sort**
Repeatedly swaps adjacent elements if they are in the wrong order.
\`\`\`c
void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1])
                swap(arr[j], arr[j + 1]);
}
\`\`\`
- **Time Complexity**: Worst: \(O(n^2)\), Best: \(O(n)\) (already sorted)
- **Space Complexity**: \(O(1)\) (in-place)

---

### **2. Selection Sort**
Finds the minimum element and places it at the correct position.
\`\`\`c
void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[minIndex]) minIndex = j;
        swap(arr[i], arr[minIndex]);
    }
}
\`\`\`
- **Time Complexity**: \(O(n^2)\) always
- **Space Complexity**: \(O(1)\)

---

### **3. Insertion Sort**
Builds a sorted array by inserting each element in its correct position.
\`\`\`c
void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) arr[j + 1] = arr[j--];
        arr[j + 1] = key;
    }
}
\`\`\`
- **Time Complexity**: Worst: \(O(n^2)\), Best: \(O(n)\) (sorted)
- **Space Complexity**: \(O(1)\)

---

## 4. Efficient Sorting Algorithms (\(O(n \log n)\))

### **4. Merge Sort (Divide & Conquer)**
Recursively splits the array into halves, sorts them, and merges them.
\`\`\`c
void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> left(arr.begin() + l, arr.begin() + m + 1);
    vector<int> right(arr.begin() + m + 1, arr.begin() + r + 1);
    int i = 0, j = 0, k = l;
    while (i < left.size() && j < right.size()) arr[k++] = (left[i] < right[j]) ? left[i++] : right[j++];
    while (i < left.size()) arr[k++] = left[i++];
    while (j < right.size()) arr[k++] = right[j++];
}

void mergeSort(vector<int>& arr, int l, int r) {
    if (l >= r) return;
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}
\`\`\`
- **Time Complexity**: \(O(n \log n)\)
- **Space Complexity**: \(O(n)\)

---

### **5. Quick Sort (Divide & Conquer)**
Picks a pivot, partitions the array, then sorts each half.
\`\`\`c
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++)
        if (arr[j] < pivot) swap(arr[++i], arr[j]);
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
\`\`\`
- **Time Complexity**: Worst: \(O(n^2)\), Average: \(O(n \log n)\)
- **Space Complexity**: \(O(\log n)\) (recursive)

---

### **6. Heap Sort**
Uses a binary heap to sort elements.
\`\`\`c
void heapify(vector<int>& arr, int n, int i) {
    int largest = i, left = 2 * i + 1, right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}
\`\`\`
- **Time Complexity**: \(O(n \log n)\)
- **Space Complexity**: \(O(1)\)

---

## 5. Special Sorting Algorithms

### **7. Counting Sort (\(O(n)\))**
\`\`\`c
vector<int> countingSort(vector<int>& arr) {
    int maxVal = *max_element(arr.begin(), arr.end());
    vector<int> count(maxVal + 1, 0), output(arr.size());
    
    for (int num : arr) count[num]++;
    for (int i = 1; i <= maxVal; i++) count[i] += count[i - 1];
    for (int i = arr.size() - 1; i >= 0; i--) output[--count[arr[i]]] = arr[i];

    return output;
}
\`\`\`
- **Best for**: Small integer values, not general sorting.

---

## 6. Sorting in Competitive Programming

- **Sorting with Custom Comparators**
\`\`\`c
bool customSort(pair<int, int> a, pair<int, int> b) {
    return a.second < b.second;
}
\`\`\`

- **Sorting Strings**
\`\`\`c
sort(strings.begin(), strings.end(), [](string a, string b) { return a.length() < b.length(); });
\`\`\`

---

## 7. Important Sorting Problems
- **Find the Kth Largest Element** (Heap Sort, QuickSelect)
- **Sort Colors (Dutch National Flag Algorithm)**
- **Merge K Sorted Arrays** (Heap)
- **Find Inversions in an Array** (Merge Sort)
- **Sort an Array Containing Only 0s, 1s, and 2s**
- **Radix Sort (For Large Numbers)**

---

This guide provides a **complete** revision of sorting, covering concepts, algorithms, and coding examples. 🚀`;

export default Sorting;
