const SqlResource = `SQL Complete Revision Guide
1. Introduction to SQL
SQL (Structured Query Language) is the standard language used to interact with relational databases. It is used for querying, inserting, updating, and managing data in a database. SQL is an essential skill for database administrators, backend developers, and data analysts.

Key Features of SQL
SQL is a declarative language, meaning that you define what you want to do, not how to do it. It is highly portable, widely supported by relational database systems like MySQL, PostgreSQL, Oracle, and SQL Server. SQL enables easy manipulation of data and schema, with the ability to join tables and create relationships between datasets.

Setting Up SQL Environment
To start using SQL, you need to install a database management system (DBMS) like MySQL, PostgreSQL, or SQLite. You can access SQL through command-line tools, graphical interfaces like phpMyAdmin or pgAdmin, or by using integrated database management tools in IDEs.

Basic Syntax
A SQL query generally follows a structure of SELECT, FROM, WHERE, GROUP BY, HAVING, and ORDER BY clauses. Here's a simple query to select all records from a table:

\`\`\`sql
SELECT * FROM table_name;
\`\`\`

This query selects all columns from the specified table.

2. Fundamentals of SQL
Data Types
SQL supports various data types, including integers (INT), floating-point numbers (FLOAT, DOUBLE), characters (CHAR, VARCHAR), and date/time (DATE, DATETIME). The data type specifies the kind of data a column can store.

\`\`\`sql
CREATE TABLE Person (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    birth_date DATE
);
\`\`\`

Variables and Constants
Variables are used to store temporary data in SQL queries. Constants are fixed values that cannot be changed once defined.

\`\`\`sql
SET @variable_name = 10;
\`\`\`

Operators in SQL
SQL provides operators for performing arithmetic, comparison, logical, and string operations. Common operators include +, -, *, / for arithmetic, =, <, >, <> for comparison, AND, OR, NOT for logical operations, and LIKE, IN, BETWEEN for pattern matching.

Control Flow Statements
SQL supports conditional logic using CASE expressions and loops (like WHILE or FOR loops in stored procedures).

\`\`\`sql
SELECT 
    CASE 
        WHEN age >= 18 THEN 'Adult'
        ELSE 'Minor'
    END AS age_group
FROM person;
\`\`\`

3. Joins in SQL
Joins combine rows from two or more tables based on a related column. The main types of joins are:

- INNER JOIN: Returns records that have matching values in both tables.
- LEFT JOIN: Returns all records from the left table, and the matched records from the right table.
- RIGHT JOIN: Returns all records from the right table, and the matched records from the left table.
- FULL OUTER JOIN: Returns all records when there is a match in either the left or right table.

\`\`\`sql
SELECT * 
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
\`\`\`

4. SQL Functions
SQL includes various built-in functions like COUNT(), SUM(), AVG(), MIN(), MAX() for aggregating data, and string functions like CONCAT(), UPPER(), LOWER(), and date functions like NOW(), DATE_ADD().

\`\`\`sql
SELECT COUNT(*), AVG(age) FROM person;
\`\`\`

5. Grouping and Sorting
Grouping is done using GROUP BY to aggregate data, and sorting is done using ORDER BY to sort results in ascending or descending order.

\`\`\`sql
SELECT department, AVG(salary) 
FROM employees
GROUP BY department
ORDER BY AVG(salary) DESC;
\`\`\`

6. Subqueries in SQL
Subqueries are queries nested inside another query. They can be used in SELECT, INSERT, UPDATE, or DELETE statements.

\`\`\`sql
SELECT name
FROM employees
WHERE department_id IN (SELECT id FROM departments WHERE name = 'Sales');
\`\`\`

7. Normalization and Relationships
Normalization involves organizing the data to reduce redundancy and improve data integrity. The most common normal forms are 1NF, 2NF, 3NF, and BCNF. Relationships between tables are established through primary and foreign keys.

\`\`\`sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
\`\`\`

8. Transactions in SQL
Transactions are used to execute a sequence of SQL statements as a single unit. They ensure data consistency and integrity.

The BEGIN TRANSACTION, COMMIT, and ROLLBACK commands are used to manage transactions.

\`\`\`sql
BEGIN TRANSACTION;
UPDATE account SET balance = balance - 500 WHERE id = 1;
UPDATE account SET balance = balance + 500 WHERE id = 2;
COMMIT;
\`\`\`

9. Indexes in SQL
Indexes are used to speed up the retrieval of data. An index is a database object that improves the speed of data retrieval operations on a table at the cost of additional space and slower writes.

\`\`\`sql
CREATE INDEX idx_name ON employees(name);
\`\`\`

10. SQL Interview Questions & Competitive Programming Topics
To prepare for job interviews, students should focus on:

- Aggregations (COUNT, SUM, AVG, GROUP BY)
- Joins (INNER, LEFT, RIGHT, FULL OUTER)
- Subqueries and Nested Queries
- Window Functions (ROW_NUMBER, RANK, PARTITION BY)
- SQL Optimization (Indexing, Query Refactoring)
- Data Integrity (Primary/Foreign Keys, Constraints)

Example question: Write a query to find the second highest salary from the employees table.

\`\`\`sql
SELECT MAX(salary) 
FROM employees 
WHERE salary < (SELECT MAX(salary) FROM employees);
\`\`\`

This structured guide will help students revise SQL quickly and efficiently for interviews and competitive programming. 🚀`;

export default SqlResource;
