const C = `C Complete Revision Guide
1. Introduction to C
C is a general-purpose, procedural programming language that provides low-level access to memory. It is widely used for system programming, embedded systems, and creating operating systems. C is known for its efficiency and flexibility, making it an excellent choice for performance-critical applications and low-level programming.

Key Features of C
C is a procedural language, meaning it focuses on functions and procedures to carry out tasks. It allows direct manipulation of memory using pointers and is highly portable, making it suitable for low-level operations. C offers powerful control over system resources and can interface directly with hardware.

Setting Up C Environment
To start programming in C, you need a C compiler like GCC (Linux/macOS) or MinGW (Windows). Popular Integrated Development Environments (IDEs) include Code::Blocks, Dev-C++, and Visual Studio Code. To compile and run a basic C program using GCC, use the command:

\`\`\`bash
gcc filename.c -o output  
./output
\`\`\`
This compiles the program and executes the generated output file.

Basic Syntax
Every C program begins with the main() function. The \`#include <stdio.h>\` directive allows input and output operations, and \`int main()\` is the entry point of the program.

\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, C!\n");
    return 0;
}
\`\`\`
This program prints "Hello, C!" to the screen.

2. Fundamentals of C
Data Types
C supports several built-in data types, including integers (int), floating-point numbers (float, double), characters (char), and Boolean values (bool). Integers store whole numbers, while floating-point types handle decimal values. The char data type holds a single character, and bool represents true or false values.

Variables and Constants
Variables in C are declared with a data type and can store different types of values. Constants, declared using \`const\`, store values that cannot be modified.

\`\`\`c
int a = 10;  
const float PI = 3.14;  // PI cannot be changed  
\`\`\`
Operators in C
C provides operators for performing arithmetic, logical, relational, and bitwise operations. Arithmetic operators include +, -, *, /, and %. Relational operators like ==, !=, >, and < are used for comparisons. Logical operators such as &&, ||, and ! are used in conditions, while bitwise operators manipulate binary representations.

Control Flow Statements
Control flow statements direct the execution of a program. Conditional statements like if-else and switch allow decision-making. Loops, including for, while, and do-while, help execute code multiple times.

\`\`\`c
if (a > 0) {
    printf("Positive number\n");
} else {
    printf("Negative number\n");
}

for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}
\`\`\`

3. Functions in C
Functions allow modular programming by encapsulating code into reusable blocks. They can be user-defined or predefined (such as sqrt() and abs()). Functions support pass by value and pass by reference.

\`\`\`c
void greet() {  
    printf("Hello, World!\n");  
}  

int add(int a, int b) {  
    return a + b;  
}  

int main() {  
    greet();  
    printf("Sum: %d", add(5, 3));  
    return 0;  
}
\`\`\`

4. Pointers and Memory Management
Pointers store memory addresses and enable dynamic memory allocation. The \`malloc\` and \`free\` functions manage heap memory, preventing memory leaks.

\`\`\`c
int *ptr = (int*)malloc(sizeof(int));  
*ptr = 10;  
printf("%d\n", *ptr);  
free(ptr);  // Free allocated memory
\`\`\`

5. Arrays and Strings
Arrays are used to store multiple values of the same type. C arrays have fixed sizes and cannot be resized once declared. Strings are arrays of characters terminated by a null character (\`'\0'\`).

\`\`\`c
int arr[] = {1, 2, 3, 4, 5};
printf("Element at index 0: %d\n", arr[0]);

char str[] = "Hello";
printf("String: %s\n", str);
\`\`\`

6. Structures and Unions
Structures allow grouping different data types under one name. Unions allow storing different data types in the same memory location.

\`\`\`c
struct Person {
    char name[50];
    int age;
};

union Data {
    int i;
    float f;
};

int main() {
    struct Person p1 = {"John", 30};
    printf("Name: %s, Age: %d\n", p1.name, p1.age);
    
    union Data data;
    data.i = 10;
    printf("Union data: %d\n", data.i);
    
    return 0;
}
\`\`\`

7. File Handling in C
C supports file operations using the \`stdio.h\` library. The \`fopen\` function is used to open files, and \`fread\`, \`fwrite\`, and \`fclose\` manage file reading, writing, and closing.

\`\`\`c
#include <stdio.h>

int main() {
    FILE *file = fopen("example.txt", "w");
    fprintf(file, "Hello, file!");
    fclose(file);
    
    return 0;
}
\`\`\`

8. Dynamic Memory Allocation
C uses functions like \`malloc\`, \`calloc\`, \`realloc\`, and \`free\` for dynamic memory allocation. These functions allow allocation of memory at runtime, useful for handling large data sets.

\`\`\`c
int *arr = (int*)malloc(5 * sizeof(int));  
for (int i = 0; i < 5; i++) {
    arr[i] = i + 1;
}
free(arr);
\`\`\`

9. Multithreading in C
Multithreading allows the concurrent execution of tasks. C uses the \`pthread\` library for thread management. The \`pthread_create\` function is used to create threads.

\`\`\`c
#include <pthread.h>

void* task(void* arg) {
    printf("Thread is running\n");
    return NULL;
}

int main() {
    pthread_t t1;
    pthread_create(&t1, NULL, task, NULL);
    pthread_join(t1, NULL);
    return 0;
}
\`\`\`

10. C Interview Questions & Competitive Programming Topics
To prepare for job interviews, students should focus on:

Arrays and Strings (Sorting, Searching, Two Pointers)
Linked Lists (Reversal, Cycle Detection)
Recursion & Backtracking (Permutations, Subset Sum)
Dynamic Programming (Knapsack, Fibonacci, LCS)
Graph Algorithms (BFS, DFS, Dijkstra)
Example question: Find the missing number in an array of size n-1 containing numbers from 1 to n.

\`\`\`c
int missingNumber(int arr[], int n) {  
    int sum = (n * (n + 1)) / 2;  
    for (int i = 0; i < n - 1; i++) sum -= arr[i];  
    return sum;  
}
\`\`\`
This structured guide will help students revise everything quickly and efficiently for interviews and competitive programming. 🚀`;

export default C;
