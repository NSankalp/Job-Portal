const cppResource = `C++ Complete Revision Guide
1. Introduction to C++
C++ is a high-performance, general-purpose programming language that extends the C language by adding Object-Oriented Programming (OOP) features. It is widely used in software development, game development, system programming, and competitive coding due to its efficiency and flexibility. C++ provides both high-level abstractions and low-level memory control, making it a preferred choice for performance-critical applications.

Key Features of C++
C++ supports object-oriented programming, allowing developers to create reusable and modular code using classes and objects. It is known for its speed and efficiency, as it compiles directly to machine code. The language supports both procedural and object-oriented paradigms, giving programmers the flexibility to choose their approach. C++ also provides the Standard Template Library (STL), which includes optimized data structures and algorithms, making coding faster and more efficient. Additionally, it allows manual memory management using pointers and dynamic allocation, which is essential for system-level programming.

Setting Up C++ Environment
To start programming in C++, you need a compiler like GCC (Linux/macOS) or MinGW (Windows). Popular Integrated Development Environments (IDEs) include CodeBlocks, Dev-C++, and Visual Studio Code. To compile and run a basic C++ program using GCC, use the command:

\`\`\`bash
g++ filename.cpp -o output  
./output
\`\`\`
This compiles the program and executes the generated output file.

Basic Syntax
Every C++ program begins with the main() function. The \`#include <iostream>\` directive allows input and output operations, and \`using namespace std;\` avoids writing \`std::\` before standard functions like \`cout\`.

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}
\`\`\`
This program prints "Hello, C++!" to the screen.

2. Fundamentals of C++
Data Types
C++ supports several built-in data types, including integers (int), floating-point numbers (float, double), characters (char), and Boolean values (bool). Integers store whole numbers, while floating-point types handle decimal values with different precision levels. The char data type holds a single character, and bool represents true or false values.

Variables and Constants
Variables in C++ are declared with a data type and can store different types of values. Constants, declared using \`const\`, store values that cannot be modified. The \`constexpr\` keyword ensures compile-time constant evaluation.

\`\`\`cpp
int a = 10;  
const float PI = 3.14;  // PI cannot be changed  
constexpr int SIZE = 100; // Compile-time constant  
\`\`\`
Operators in C++
C++ provides various operators for performing arithmetic, logical, relational, and bitwise operations. Arithmetic operators include +, -, *, /, and %. Relational operators like ==, !=, >, and < are used for comparisons. Logical operators such as &&, ||, and ! are used in conditions, while bitwise operators manipulate binary representations.

Control Flow Statements
Control flow statements direct the execution of a program. Conditional statements like if-else and switch allow decision-making. Loops, including for, while, and do-while, help execute code multiple times.

\`\`\`cpp
if (a > 0) {
    cout << "Positive number";
} else {
    cout << "Negative number";
}

for (int i = 0; i < 5; i++) {
    cout << i << " ";
}
\`\`\`
3. Functions in C++
Functions allow modular programming by encapsulating code into reusable blocks. They can be user-defined or predefined (such as sqrt() and abs()). Functions support pass by value and pass by reference. Function overloading allows multiple functions with the same name but different parameters.

\`\`\`cpp
void greet() {  
    cout << "Hello, World!" << endl;  
}  

int add(int a, int b) {  
    return a + b;  
}  

int main() {  
    greet();  
    cout << "Sum: " << add(5, 3);  
    return 0;  
}
\`\`\`
4. Object-Oriented Programming (OOP) in C++
C++ supports OOP concepts, making it more structured and reusable. The four main OOP principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.

Encapsulation: Wrapping data and functions into a single unit (class).
Abstraction: Hiding unnecessary details and exposing only relevant parts.
Inheritance: Acquiring properties from an existing class to create a new class.
Polymorphism: Allowing functions to behave differently based on the input.
\`\`\`cpp
class Car {  
public:  
    string brand;  
    int speed;  

    void display() {  
        cout << "Car Brand: " << brand << ", Speed: " << speed << " km/h" << endl;  
    }  
};  

int main() {  
    Car myCar;  
    myCar.brand = "Toyota";  
    myCar.speed = 120;  
    myCar.display();  
    return 0;  
}
\`\`\`
5. Pointers and Memory Management
Pointers store memory addresses and enable dynamic memory allocation. The new and delete operators manage heap memory, preventing memory leaks.

\`\`\`cpp
int *ptr = new int(10);  
cout << *ptr;  
delete ptr;  // Free allocated memory  
\`\`\`
6. Standard Template Library (STL)
STL provides built-in data structures and algorithms. It includes:

Vectors (Dynamic arrays)
Lists (Doubly linked lists)
Sets (Unique elements in sorted order)
Maps (Key-value pairs)
Stacks and Queues (LIFO and FIFO structures)
Example of a vector:

\`\`\`cpp
#include <vector>
vector<int> nums = {1, 2, 3};  
nums.push_back(4);  
cout << nums[2]; // Output: 3  
\`\`\`
7. File Handling in C++
C++ supports reading and writing files using fstream. The ifstream class reads files, while ofstream writes to them.

\`\`\`cpp
#include <fstream>
ofstream file("example.txt");  
file << "Hello, file!";  
file.close();  
\`\`\`
8. Exception Handling
Exception handling prevents crashes by catching runtime errors. The try, catch, and throw keywords are used for handling exceptions.

\`\`\`cpp
try {  
    throw "An error occurred";  
} catch (const char* msg) {  
    cout << msg;  
}  
\`\`\`
9. Multithreading in C++
Multithreading allows concurrent execution of tasks. The <thread> library in C++ enables the creation of multiple threads for parallel execution.

\`\`\`cpp
#include <thread>
void task() {  
    cout << "Thread is running\n";  
}  

int main() {  
    thread t1(task);  
    t1.join();  
    return 0;  
}
\`\`\`
10. C++ Interview Questions & Competitive Programming Topics
To prepare for job interviews, students should focus on:

Arrays and Strings (Sorting, Searching, Two Pointers)
Linked Lists (Reversal, Cycle Detection)
Recursion & Backtracking (Permutations, Subset Sum)
Dynamic Programming (Knapsack, Fibonacci, LCS)
Graph Algorithms (BFS, DFS, Dijkstra)
Example question: Find the missing number in an array of size n-1 containing numbers from 1 to n.

\`\`\`cpp
int missingNumber(vector<int>& nums, int n) {  
    int sum = (n * (n + 1)) / 2;  
    for (int num : nums) sum -= num;  
    return sum;  
}
\`\`\`
This structured guide will help students revise everything quickly and efficiently for interviews and competitive programming. 🚀`;

export default cppResource;
