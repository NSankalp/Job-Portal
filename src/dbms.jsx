const dbms = `Database Management Systems (DBMS) Complete Revision Guide  

1. Introduction to DBMS  
A **Database Management System (DBMS)** is software that allows users to store, retrieve, manipulate, and manage data efficiently. It ensures data integrity, security, and concurrent access.  

Key Features of DBMS  
- **Data Abstraction:** Hides complexities of data storage.  
- **Data Independence:** Changes in schema don’t affect application programs.  
- **Concurrency Control:** Ensures multiple users can access data simultaneously.  
- **Transaction Management:** Ensures ACID properties for reliable transactions.  
- **Security & Integrity:** Prevents unauthorized access and maintains data consistency.  

Types of DBMS  
- **Hierarchical DBMS:** Data stored in tree-like structure (e.g., IBM IMS).  
- **Network DBMS:** Data organized using graphs (e.g., IDS).  
- **Relational DBMS (RDBMS):** Uses tables and SQL (e.g., MySQL, PostgreSQL).  
- **NoSQL DBMS:** Schema-less databases for scalability (e.g., MongoDB, Redis).  

2. Data Models  
Defines how data is organized, stored, and manipulated.  

- **Hierarchical Model:** Data is stored in parent-child relationships.  
- **Network Model:** Allows many-to-many relationships using graphs.  
- **Relational Model:** Uses tables (relations) with primary and foreign keys.  
- **Object-Oriented Model:** Stores data as objects (used in modern applications).  

3. Relational Model & Normalization  
A **relation (table)** consists of attributes (columns) and tuples (rows).  

Key Concepts  
- **Primary Key:** Unique identifier for a tuple.  
- **Foreign Key:** References a primary key from another table.  
- **Candidate Key:** A minimal set of attributes that can uniquely identify a tuple.  
- **Super Key:** A set of attributes that uniquely identify a row.  

Normalization  
Process of organizing data to reduce redundancy and improve integrity.  

- **1NF (First Normal Form):** Eliminate duplicate columns.  
- **2NF (Second Normal Form):** Remove partial dependencies.  
- **3NF (Third Normal Form):** Remove transitive dependencies.  
- **BCNF (Boyce-Codd Normal Form):** Stronger 3NF ensuring all determinants are keys.  

4. SQL & Query Optimization  
SQL (Structured Query Language) is used to interact with RDBMS.  

Common SQL Queries  
- **DDL (Data Definition Language)** → CREATE, ALTER, DROP  
- **DML (Data Manipulation Language)** → INSERT, UPDATE, DELETE  
- **DQL (Data Query Language)** → SELECT  
- **TCL (Transaction Control Language)** → COMMIT, ROLLBACK  
- **DCL (Data Control Language)** → GRANT, REVOKE  

Query Optimization  
- **Indexing:** Improves search performance (e.g., B-Tree, Hash Index).  
- **Views:** Store frequently used queries.  
- **Joins:** Combine tables (INNER, LEFT, RIGHT, FULL JOIN).  

5. Transactions & Concurrency Control  
A **transaction** is a sequence of operations performed as a single unit.  

ACID Properties  
- **Atomicity:** All or nothing execution.  
- **Consistency:** Maintains database integrity.  
- **Isolation:** Transactions execute independently.  
- **Durability:** Changes persist even after failure.  

Concurrency Control  
Ensures correct execution of multiple transactions.  
- **Locks:** Prevent simultaneous access (Shared, Exclusive Locks).  
- **Two-Phase Locking (2PL):** Ensures serializability.  
- **Timestamp Ordering:** Orders transactions using timestamps.  

6. Deadlocks in DBMS  
A **deadlock** occurs when two or more transactions wait indefinitely for each other to release resources.  

Deadlock Prevention & Detection  
- **Wait-Die & Wound-Wait Schemes:** Priority-based approaches.  
- **Timeouts:** Transactions aborted if they wait too long.  
- **Deadlock Detection Graph:** Detects circular wait conditions.  

7. Indexing & Hashing  
**Indexing** speeds up query performance by creating a structure for fast data retrieval.  
- **Clustered Index:** Physically sorts data.  
- **Non-Clustered Index:** Logical reference to data locations.  

**Hashing** converts keys into memory addresses for efficient search.  
- **Static Hashing:** Fixed-size hash table.  
- **Dynamic Hashing:** Hash table grows/shrinks dynamically.  

8. File Organization & Storage  
Determines how data is stored on disk for efficiency.  

Types of File Organization  
- **Heap File:** Unordered records (slow retrieval).  
- **Sequential File:** Ordered records (fast sequential access).  
- **Indexed File:** Uses indexes for fast searching.  
- **Hashed File:** Uses hashing for direct access.  

9. NoSQL Databases  
Designed for high scalability and flexibility in modern applications.  

Types of NoSQL Databases  
- **Key-Value Stores (e.g., Redis, DynamoDB):** Stores data as key-value pairs.  
- **Document Stores (e.g., MongoDB, CouchDB):** Stores JSON-like documents.  
- **Column Stores (e.g., Cassandra, BigTable):** Stores data in column families.  
- **Graph Databases (e.g., Neo4j):** Stores data as interconnected nodes and edges.  

10. Database Security & Integrity  
Protects data from unauthorized access and corruption.  

- **Authentication & Authorization:** Ensures only authorized users access data.  
- **Encryption:** Secures sensitive data.  
- **Backup & Recovery:** Prevents data loss in failures.  
- **Integrity Constraints:** Ensures consistency (e.g., Primary Key, Foreign Key constraints).  

11. DBMS Interview Questions & Competitive Programming Topics  
To prepare for DBMS-related job interviews and exams, focus on:  

- **SQL Queries (Joins, Subqueries, Indexing)**  
- **Normalization (1NF, 2NF, 3NF, BCNF)**  
- **Transactions & Concurrency Control (ACID, 2PL, Deadlocks)**  
- **Indexing & Query Optimization**  
- **NoSQL vs RDBMS Concepts**  

Example Question: Find the second highest salary using SQL.  

\`\`\`sql
SELECT MAX(salary) AS SecondHighestSalary  
FROM Employee  
WHERE salary < (SELECT MAX(salary) FROM Employee);
\`\`\`

Example Question: Implement a simple hash index in C.  

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#define SIZE 10

int hashTable[SIZE];

int hashFunction(int key) {
    return key % SIZE;
}

void insert(int key) {
    int index = hashFunction(key);
    while (hashTable[index] != -1) {
        index = (index + 1) % SIZE;
    }
    hashTable[index] = key;
}

int search(int key) {
    int index = hashFunction(key);
    while (hashTable[index] != -1) {
        if (hashTable[index] == key)
            return index;
        index = (index + 1) % SIZE;
    }
    return -1;
}

int main() {
    for (int i = 0; i < SIZE; i++) hashTable[i] = -1;

    insert(23);
    insert(43);
    insert(13);
    insert(27);

    printf("Position of 43: %d\\n", search(43));
    return 0;
}
\`\`\`

This structured guide will help students revise DBMS concepts quickly and efficiently for interviews and competitive programming. 🚀`;

export default dbms;
