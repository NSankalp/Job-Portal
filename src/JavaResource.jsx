const javaResource = `Java Complete Revision Guide

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 1. Introduction to Java
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Java is a high-level, object-oriented programming language designed to be simple, robust, and platform-independent. It was created by James Gosling at Sun Microsystems (now owned by Oracle) and follows the "Write Once, Run Anywhere" (WORA) principle, meaning Java code can run on any platform with a Java Virtual Machine (JVM).

💡 Uses of Java:
✔️ Web development (Spring, Hibernate)
✔️ Enterprise applications
✔️ Android mobile development
✔️ Game development
✔️ Competitive programming

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 2. Features of Java
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ **Platform Independent**: Java uses bytecode that runs on JVM, making it independent of the operating system.  
✅ **Object-Oriented**: Everything in Java revolves around objects (Encapsulation, Inheritance, Polymorphism, Abstraction).  
✅ **Secure**: Java provides a runtime environment with features like memory management and access control.  
✅ **Robust**: Exception handling and garbage collection make Java reliable.  
✅ **Multithreaded**: Supports concurrent execution of tasks.  
✅ **Rich API**: Java offers built-in libraries for networking, utilities, data structures, etc.  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 3. Java Basics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 **Data Types**  
   - Primitive: int, float, double, boolean, char  
   - Non-primitive: String, Arrays, Objects  

🔹 **Operators**  
   - Arithmetic: +, -, *, /, %  
   - Relational: ==, !=, >, <, >=, <=  
   - Logical: &&, ||, !  
   - Bitwise: &, |, ^, <<, >>  

🔹 **Control Flow Statements**  
   - Conditional: if-else, switch-case  
   - Looping: for, while, do-while  

🔹 **Methods (Functions in Java)**  
   - Defined inside a class  
   - Used to perform specific tasks  
   - Can return a value or be void  

**Example:**
\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 4. Object-Oriented Concepts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 **Classes & Objects** - Blueprint for creating objects.  
🔹 **Inheritance** - One class inherits properties from another.  
🔹 **Polymorphism** - Ability to take multiple forms (Method Overloading & Overriding).  
🔹 **Encapsulation** - Wrapping data inside classes and restricting access.  
🔹 **Abstraction** - Hiding implementation details and showing only necessary information.  

**Example:**
\`\`\`java
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.makeSound(); // Output: Dog barks
    }
}
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 5. Important Java Libraries
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✔️ **Collections Framework** - Manages dynamic data structures  
   - ArrayList, LinkedList, HashSet, HashMap, Queue  
✔️ **Concurrency & Multithreading** - Thread, ExecutorService  
✔️ **I/O Operations** - File handling using java.io, java.nio  
✔️ **Networking** - Socket programming, HTTP requests  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 6. Exception Handling
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Java provides built-in support for handling runtime errors using try-catch-finally.

**Example:**
\`\`\`java
try {
    int num = 5 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("Execution completed");
}
\`\`\`


- **Custom Exceptions** - User-defined exceptions.  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 7. Java 8+ Features
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Java 8 introduced several new features to improve performance and usability.

🔹 **Lambda Expressions** - Shorter syntax for functional programming  
\`\`\`java
interface Drawable {
    void draw();
}

public class Main {
    public static void main(String[] args) {
        Drawable d = () -> System.out.println("Drawing...");
        d.draw();
    }
}
\`\`\`

🔹 **Streams API** - Efficient operations on collections  
🔹 **Functional Interfaces** - Predicate, Consumer, Supplier  
🔹 **Optional Class** - Helps avoid NullPointerException  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 8. Advanced Java Topics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 **Multithreading & Concurrency** - Runnable, Thread class, ExecutorService  
🔹 **Spring Boot** - Framework for Java web applications  
🔹 **JDBC (Java Database Connectivity)** - Connecting Java with databases  
🔹 **Android Development** - Java for mobile applications  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **Quick Revision Notes**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Java is an object-oriented, platform-independent language.  
✅ Important features: OOP, multithreading, security, robustness.  
✅ Uses JVM to run code on multiple platforms.  
✅ Supports exception handling and multithreading.  
✅ Java 8 introduced Lambda, Streams, and Functional Interfaces.  

🚀 **Best Resources for Java Learning**
✔️ Oracle Java Documentation: https://docs.oracle.com/en/java/  
✔️ JavaTpoint: https://www.javatpoint.com/java-tutorial  
✔️ GeeksforGeeks: https://www.geeksforgeeks.org/java-tutorial/  
✔️ Java SE Downloads: https://www.oracle.com/java/technologies/javase-downloads.html  

This structured guide will help students revise Java quickly for interviews and competitive programming. 🚀`;

export default javaResource;
