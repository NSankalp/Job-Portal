const PythonResource = `Python Complete Revision Guide

1. Introduction to Python
Python is an interpreted, high-level, general-purpose programming language. It is known for its simplicity and readability, making it a popular choice for beginners and experienced developers alike. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It is widely used in web development, data science, artificial intelligence, scientific computing, and more.

Key Features of Python
Python emphasizes code readability with its clean and straightforward syntax. It has a large standard library that provides modules and functions for various tasks, reducing the need for external libraries. Python is dynamically typed, meaning you don't need to declare variable types explicitly. It also supports automatic memory management through garbage collection.

Setting Up Python Environment
To start programming in Python, you need to install Python from the official website (https://www.python.org/). Popular Integrated Development Environments (IDEs) for Python include PyCharm, VS Code, and Jupyter Notebook. To run a Python script, use the command:

\`\`\`bash
python filename.py
\`\`\`
This executes the Python script.

Basic Syntax
Python programs are written in a simple and readable format. Indentation is used to define code blocks instead of braces. The \`print()\` function is used to display output.

\`\`\`python
print("Hello, Python!")
\`\`\`
This program prints "Hello, Python!" to the screen.

2. Fundamentals of Python
Data Types
Python supports several built-in data types, including integers (int), floating-point numbers (float), strings (str), lists, tuples, dictionaries, and Boolean values (bool). Integers store whole numbers, while floating-point types handle decimal values. Strings are sequences of characters, and lists are ordered collections of items.

Variables and Constants
Variables in Python are dynamically typed, meaning you don't need to declare their type. Constants are typically defined using uppercase variable names, but Python does not enforce immutability.

\`\`\`python
a = 10  # Integer
PI = 3.14  # Floating-point constant
name = "Python"  # String
\`\`\`
Operators in Python
Python provides various operators for performing arithmetic, logical, relational, and bitwise operations. Arithmetic operators include +, -, *, /, and %. Relational operators like ==, !=, >, and < are used for comparisons. Logical operators such as \`and\`, \`or\`, and \`not\` are used in conditions.

Control Flow Statements
Control flow statements direct the execution of a program. Conditional statements like \`if-else\` and \`elif\` allow decision-making. Loops, including \`for\` and \`while\`, help execute code multiple times.

\`\`\`python
if a > 0:
    print("Positive number")
else:
    print("Negative number")

for i in range(5):
    print(i)
\`\`\`
3. Functions in Python
Functions allow modular programming by encapsulating code into reusable blocks. They can be defined using the \`def\` keyword. Python supports default arguments, variable-length arguments, and lambda functions.

\`\`\`python
def greet():
    print("Hello, World!")

def add(a, b):
    return a + b

greet()
print("Sum:", add(5, 3))
\`\`\`
4. Object-Oriented Programming (OOP) in Python
Python supports OOP concepts, making it more structured and reusable. The four main OOP principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.

Encapsulation: Wrapping data and functions into a single unit (class).
Abstraction: Hiding unnecessary details and exposing only relevant parts.
Inheritance: Acquiring properties from an existing class to create a new class.
Polymorphism: Allowing functions to behave differently based on the input.
\`\`\`python
class Car:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed

    def display(self):
        print(f"Car Brand: {self.brand}, Speed: {self.speed} km/h")

my_car = Car("Toyota", 120)
my_car.display()
\`\`\`
5. File Handling in Python
Python supports reading and writing files using built-in functions. The \`open()\` function is used to open a file, and the \`with\` statement ensures proper file closure.

\`\`\`python
with open("example.txt", "w") as file:
    file.write("Hello, file!")

with open("example.txt", "r") as file:
    content = file.read()
    print(content)
\`\`\`
6. Exception Handling
Exception handling prevents crashes by catching runtime errors. The \`try\`, \`except\`, and \`finally\` keywords are used for handling exceptions.

\`\`\`python
try:
    raise ValueError("An error occurred")
except ValueError as e:
    print(e)
\`\`\`
7. Python Libraries and Frameworks
Python has a rich ecosystem of libraries and frameworks for various applications. Some popular ones include:

NumPy: For numerical computing.
Pandas: For data manipulation and analysis.
Matplotlib: For data visualization.
Django: For web development.
TensorFlow: For machine learning.
Example of using NumPy:

\`\`\`python
import numpy as np
arr = np.array([1, 2, 3])
print(arr)
\`\`\`
8. Python Interview Questions & Competitive Programming Topics
To prepare for job interviews, students should focus on:

Arrays and Strings (Sorting, Searching, Two Pointers)
Linked Lists (Reversal, Cycle Detection)
Recursion & Backtracking (Permutations, Subset Sum)
Dynamic Programming (Knapsack, Fibonacci, LCS)
Graph Algorithms (BFS, DFS, Dijkstra)
Example question: Find the missing number in an array of size n-1 containing numbers from 1 to n.

\`\`\`python
def missing_number(nums, n):
    return (n * (n + 1)) // 2 - sum(nums)

nums = [1, 2, 4, 5]
print(missing_number(nums, 5))  # Output: 3
\`\`\`
This structured guide will help students revise everything quickly and efficiently for interviews and competitive programming. 🚀`;

export default PythonResource;
