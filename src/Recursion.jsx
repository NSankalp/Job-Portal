const Recursion = `Recursion Complete Revision Guide

### 1. Introduction to Recursion
Recursion is a method of solving problems where a function calls itself. It helps break problems into smaller subproblems.

- **Base Case**: Condition to stop recursion.
- **Recursive Case**: Function calls itself to reduce the problem.

---

## 2. Types of Recursion

1. **Direct Recursion**: Function calls itself directly.
2. **Indirect Recursion**: Function A calls Function B, which calls Function A.
3. **Tail Recursion**: Recursive call is the last statement.
4. **Head Recursion**: Recursive call occurs before any processing.
5. **Tree Recursion**: Function makes multiple recursive calls.
6. **Nested Recursion**: Function calls itself inside another function call.

---

## 3. Basic Recursive Problems

### **1. Factorial of a Number**
\`\`\`c
int factorial(int n) {
    if (n == 0) return 1; 
    return n * factorial(n - 1);
}
\`\`\`
- **Time Complexity**: \(O(n)\)
- **Space Complexity**: \(O(n)\) (recursive stack)

---

### **2. Fibonacci Series**
\`\`\`c
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
\`\`\`
- **Time Complexity**: \(O(2^n)\) (Exponential)
- **Optimized using Memoization**: \(O(n)\)

---

### **3. Sum of N Natural Numbers**
\`\`\`c
int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}
\`\`\`
- **Time Complexity**: \(O(n)\)

---

### **4. Reverse a String**
\`\`\`c
void reverse(string& str, int l, int r) {
    if (l >= r) return;
    swap(str[l], str[r]);
    reverse(str, l + 1, r - 1);
}
\`\`\`
- **Time Complexity**: \(O(n)\)

---

### **5. Check if a String is Palindrome**
\`\`\`c
bool isPalindrome(string& str, int l, int r) {
    if (l >= r) return true;
    return (str[l] == str[r]) && isPalindrome(str, l + 1, r - 1);
}
\`\`\`

---

## 4. Advanced Recursion Problems

### **6. Power of a Number (\(a^b\))**
\`\`\`c
int power(int a, int b) {
    if (b == 0) return 1;
    int half = power(a, b / 2);
    return (b % 2 == 0) ? half * half : a * half * half;
}
\`\`\`
- **Time Complexity**: \(O(\log b)\)

---

### **7. Print All Subsequences of a String**
\`\`\`c
void subsequences(string str, string output, int i) {
    if (i == str.length()) {
        cout << output << endl;
        return;
    }
    subsequences(str, output, i + 1);
    subsequences(str, output + str[i], i + 1);
}
\`\`\`
- **Time Complexity**: \(O(2^n)\)

---

### **8. Tower of Hanoi**
\`\`\`c
void towerOfHanoi(int n, char from, char to, char aux) {
    if (n == 0) return;
    towerOfHanoi(n - 1, from, aux, to);
    cout << "Move disk " << n << " from " << from << " to " << to << endl;
    towerOfHanoi(n - 1, aux, to, from);
}
\`\`\`
- **Time Complexity**: \(O(2^n)\)

---

### **9. Print All Permutations of a String**
\`\`\`c
void permute(string& str, int l, int r) {
    if (l == r) { cout << str << endl; return; }
    for (int i = l; i <= r; i++) {
        swap(str[l], str[i]);
        permute(str, l + 1, r);
        swap(str[l], str[i]);
    }
}
\`\`\`
- **Time Complexity**: \(O(n!)\)

---

### **10. Generate Balanced Parentheses**
\`\`\`c
void generateParentheses(int open, int close, string output) {
    if (open == 0 && close == 0) { cout << output << endl; return; }
    if (open > 0) generateParentheses(open - 1, close, output + "(");
    if (close > open) generateParentheses(open, close - 1, output + ")");
}
\`\`\`
- **Time Complexity**: \(O(2^n)\)

---

## 5. Recursion vs Iteration
| Feature        | Recursion | Iteration |
|---------------|----------|----------|
| Memory Usage  | High (Stack calls) | Low (Loop variables) |
| Performance   | Can be slower (stack overhead) | Faster (no stack overhead) |
| Readability   | More intuitive for some problems | More efficient |

---

## 6. Optimizing Recursion
1. **Memoization (Top-Down DP)**: Store results to avoid recomputation.
2. **Tail Recursion Optimization**: Convert tail recursion into loops.
3. **Use Iteration When Possible**: If recursion depth is too high.

---

## 7. Important Recursion Problems
✅ Fibonacci (with memoization)  
✅ Subset Sum Problem  
✅ Josephus Problem  
✅ Sudoku Solver  
✅ N-Queens Problem  
✅ Word Break Problem  
✅ Letter Combinations of a Phone Number  
✅ Unique Paths in a Grid  

---

This guide provides a **complete** revision of recursion, covering concepts, algorithms, and key problems. 🚀`;

export default Recursion;
