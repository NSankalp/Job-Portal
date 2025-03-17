const CompilerDesign = `Compiler Design Complete Revision Guide  

1. Introduction to Compiler Design  
A **compiler** is a software program that translates high-level source code into machine code. It plays a crucial role in program execution by converting human-readable code into a format understandable by the computer.  

Key Phases of a Compiler  
- **Lexical Analysis:** Converts source code into tokens.  
- **Syntax Analysis (Parsing):** Checks syntax using grammar rules.  
- **Semantic Analysis:** Ensures logical correctness of the program.  
- **Intermediate Code Generation:** Translates code into an intermediate representation.  
- **Optimization:** Improves performance by reducing execution time and memory usage.  
- **Code Generation:** Produces machine code from intermediate representation.  
- **Code Linking & Loading:** Resolves references and prepares code for execution.  

2. Compiler vs Interpreter  
| Feature       | Compiler                        | Interpreter               |  
|--------------|---------------------------------|---------------------------|  
| Execution    | Translates entire code at once | Translates line by line   |  
| Speed       | Faster execution               | Slower due to interpretation |  
| Error Handling | Shows all errors at once     | Stops at first error       |  
| Example     | GCC, Clang                     | Python, JavaScript        |  

3. Phases of a Compiler  

### 1️⃣ Lexical Analysis (Tokenization)  
- Converts source code into tokens (smallest meaningful units).  
- Uses **Finite Automata (FA)** to recognize patterns.  
- Removes whitespace and comments.  

Example:  
Source Code → \`int x = 5;\`  
Lexical Analyzer Output: \`[int] [x] [=] [5] [;]\`  

### 2️⃣ Syntax Analysis (Parsing)  
- Checks if the code follows the grammar rules of the programming language.  
- Uses **Context-Free Grammar (CFG)**.  
- Implements **Parse Trees** for syntactic representation.  

Parsing Techniques:  
- **Top-Down Parsing:** Recursive Descent, LL(1) Parsing  
- **Bottom-Up Parsing:** Shift-Reduce, LR(0), SLR(1), LALR(1), CLR(1)  

Example Grammar Rule:  
\`\`\`  
E → E + T | T  
T → T * F | F  
F → (E) | id  
\`\`\`  

### 3️⃣ Semantic Analysis  
- Ensures **meaningful execution** by checking type compatibility, undeclared variables, etc.  
- Implements **Type Checking, Type Casting, and Scope Resolution**.  

### 4️⃣ Intermediate Code Generation  
- Converts source code into an intermediate representation (IR).  
- Common forms: **Three-Address Code (TAC), Abstract Syntax Tree (AST), Control Flow Graph (CFG)**.  

Example TAC:  
\`\`\`  
t1 = a + b  
t2 = t1 * c  
\`\`\`  

### 5️⃣ Code Optimization  
- Reduces execution time and memory usage.  
- Techniques:  
  - **Loop Unrolling:** Reduces the number of iterations.  
  - **Constant Folding:** Replaces expressions with their computed values.  
  - **Dead Code Elimination:** Removes unnecessary code.  
  - **Strength Reduction:** Replaces expensive operations with cheaper alternatives.  

### 6️⃣ Code Generation  
- Translates intermediate code into machine code.  
- Uses **Register Allocation, Instruction Selection, and Code Scheduling**.  

4. Parsing Techniques  

#### 1️⃣ Top-Down Parsing  
- Constructs parse trees from **root to leaves**.  
- Examples:  
  - **Recursive Descent Parsing:** Uses a set of recursive functions.  
  - **LL(1) Parsing:** Uses a **Predictive Parsing Table**.  

#### 2️⃣ Bottom-Up Parsing  
- Constructs parse trees from **leaves to root**.  
- Examples:  
  - **Shift-Reduce Parsing:** Uses a stack to reduce symbols.  
  - **LR Parsing (LR(0), SLR(1), LALR(1), CLR(1))**  

5. Syntax-Directed Translation (SDT)  
- Associates semantic rules with syntax rules to perform intermediate translation.  
- Uses **Syntax-Directed Definitions (SDD)**.  
- Implements **Inherited & Synthesized Attributes**.  

Example:  
For the production rule **E → E + T**, we can define:  
\`\`\`  
E.val = E1.val + T.val  
\`\`\`  

6. Symbol Table  
- Stores information about variables, functions, and types.  
- Used for **Scope Resolution, Type Checking, and Optimization**.  
- Implemented using **Hash Tables, Trees, or Linked Lists**.  

7. Code Optimization Techniques  
- **Peephole Optimization:** Removes redundant instructions.  
- **Common Subexpression Elimination:** Reuses previously computed expressions.  
- **Loop Optimization:** Reduces the overhead of loop execution.  
- **Register Allocation:** Uses registers efficiently to minimize memory access.  

8. Error Handling in Compilers  
- **Lexical Errors:** Incorrect tokens (e.g., invalid identifiers).  
- **Syntax Errors:** Violations of grammar rules.  
- **Semantic Errors:** Type mismatches, undefined variables.  
- **Runtime Errors:** Division by zero, memory overflow.  

Error Recovery Techniques:  
- **Panic Mode:** Skips tokens until a valid token is found.  
- **Phrase-Level Recovery:** Replaces incorrect tokens with correct ones.  
- **Error Productions:** Extends grammar to handle common errors.  
- **Global Correction:** Modifies program minimally to correct errors.  

9. Runtime Environments & Memory Organization  
- **Activation Records:** Stores local variables, return address, parameters.  
- **Heap & Stack Management:** Allocates memory dynamically.  
- **Garbage Collection:** Frees unused memory.  

10. Compiler Construction Tools  
- **Lex:** Generates lexical analyzers.  
- **Yacc (Yet Another Compiler Compiler):** Generates syntax analyzers.  
- **Flex & Bison:** Modern tools for lexical and syntax analysis.  
- **LLVM & GCC:** Used for code optimization and generation.  

11. Interview Questions & Competitive Programming Topics  

### 📌 Important Topics for Interviews:  
- **Parsing Techniques (LL, LR, Shift-Reduce)**  
- **Lexical & Syntax Analysis**  
- **Code Optimization Techniques**  
- **Symbol Table Implementation**  
- **Intermediate Code Generation**  
- **Compiler vs Interpreter**  

Example Question: Implement a Recursive Descent Parser for the following grammar:  
\`\`\`  
E → E + T | T  
T → T * F | F  
F → (E) | id  
\`\`\`  

Example C Code for Symbol Table Using Hashing:  
\`\`\`c  
#include <stdio.h>  
#include <stdlib.h>  
#include <string.h>  

#define SIZE 10  

typedef struct Symbol {  
    char name[20];  
    int address;  
} Symbol;  

Symbol table[SIZE];  

int hashFunction(char *name) {  
    int sum = 0;  
    for (int i = 0; name[i] != '\\0'; i++)  
        sum += name[i];  
    return sum % SIZE;  
}  

void insert(char *name, int address) {  
    int index = hashFunction(name);  
    while (table[index].address != -1)  
        index = (index + 1) % SIZE;  
    strcpy(table[index].name, name);  
    table[index].address = address;  
}  

int search(char *name) {  
    int index = hashFunction(name);  
    while (table[index].address != -1) {  
        if (strcmp(table[index].name, name) == 0)  
            return table[index].address;  
        index = (index + 1) % SIZE;  
    }  
    return -1;  
}  

int main() {  
    for (int i = 0; i < SIZE; i++) table[i].address = -1;  
    insert("x", 100);  
    insert("y", 200);  
    printf("Address of x: %d\\n", search("x"));  
    return 0;  
}  
\`\`\`  

This structured guide will help students revise **Compiler Design** concepts quickly and efficiently for **interviews and competitive programming**. 🚀`;

export default CompilerDesign;
