import React from "react";
import { useParams } from "react-router-dom";

const questions = {
  c: [
    "What is a pointer?",
    "Explain memory allocation in C.",
    "What is the difference between malloc and calloc?",
    "What do you mean by the scope of the variable?",
    "What is the use of static variables in C?",
    "What is the difference between ++i and i++?",
    "What are the different storage classes in C?",
    "What is the difference between struct and union?",
    "What is a typedef in C?",
    "What is the use of volatile keyword in C?",
    "How does const differ from #define?",
    "What is a dangling pointer? How do you avoid it?",
    "What are wild pointers in C?",
    "What is the difference between exit() and return?",
    "How do you prevent buffer overflow in C?",
    "What is the purpose of the restrict keyword?",
    "How does function pointer work in C?",
    "Explain the difference between deep copy and shallow copy.",
    "How does integer promotion work in C?",
    "What is the difference between scanf and gets?",
    "Why is sizeof an operator and not a function?",
    "What is the difference between fgets and gets?",
    "What is a segmentation fault? How can you debug it?",
    "What is the difference between memcpy and memmove?",
    "What happens when you free the same memory twice?",
    "What are bitwise operators in C and how are they used?",
    "Explain the concept of endianness (big-endian vs little-endian).",
    "What are command-line arguments in C? How do they work?",
    "What is recursion? How is it different from iteration?",
    "How does function inlining work in C?",
    "Explain the difference between macros and inline functions.",
    "What is dynamic memory deallocation? How to avoid memory leaks?",
    "How do file operations work in C? Explain fopen, fclose, and fscanf.",
    "What is a signal in C? How can signals be handled?",
    "What is the difference between stack and heap memory?",
    "How do linked lists work in C? Explain with an example.",
    "What is the difference between a stack and a queue?",
    "How do you implement multithreading in C using POSIX threads?",
    "What is the difference between strcpy and strncpy?",
    "What is a circular linked list, and where is it used?",
    "What is a memory leak? How can you detect and fix it?",
    "What is the use of assert() in C?",
    "What is the difference between fork() and exec() in C?",
    "Explain IPC (Inter-Process Communication) mechanisms in C.",
    "What is the difference between wait() and waitpid() in C?",
  ],
  cpp: [
    "What are the key differences between C and C++?",
    "What is object-oriented programming (OOP)?",
    "What are the four pillars of OOP in C++?",
    "What is the difference between class and struct in C++?",
    "What is a constructor? What are its types?",
    "What is a destructor? Why is it needed?",
    "What is the difference between function overloading and function overriding?",
    "What is operator overloading in C++?",
    "What are virtual functions in C++?",
    "What is the difference between early binding and late binding?",
    "What is polymorphism? Explain its types.",
    "What is the difference between compile-time and run-time polymorphism?",
    "What is an abstract class in C++?",
    "What is an interface in C++? How is it implemented?",
    "What is multiple inheritance? What are its advantages and disadvantages?",
    "What is a virtual destructor? Why is it needed?",
    "What is the role of the 'this' pointer in C++?",
    "What is a friend function? How does it work?",
    "What is the difference between shallow copy and deep copy?",
    "What is the Rule of Three in C++?",
    "What is the Rule of Five in C++?",
    "What is smart pointer in C++? Explain unique_ptr, shared_ptr, and weak_ptr.",
    "What is the difference between new and malloc?",
    "What is the difference between delete and free?",
    "What is a copy constructor? When is it called?",
    "What is a move constructor in C++?",
    "What is an L-value and an R-value?",
    "What are lambda functions in C++?",
    "What is RAII (Resource Acquisition Is Initialization)?",
    "What is the STL (Standard Template Library)?",
    "What are templates in C++? Explain function templates and class templates.",
    "What is the difference between map and unordered_map?",
    "What is the difference between vector and list in C++?",
    "What is the difference between stack and queue in STL?",
    "What are iterators in C++? What are their types?",
    "What is a functor in C++?",
    "What is the difference between a deep copy and a move operation?",
    "What is exception handling in C++? How does try-catch work?",
    "What is the difference between throw and noexcept?",
    "What is the difference between static_cast, dynamic_cast, const_cast, and reinterpret_cast?",
    "What is multithreading in C++? How is it implemented?",
    "What is a mutex? How does it help in thread synchronization?",
    "What is deadlock? How can you avoid it?",
    "What is the difference between condition_variable and mutex?",
    "How does std::async work in C++?",
    "What is the difference between pass-by-value and pass-by-reference?",
    "What are inline functions in C++?",
    "What is constexpr in C++?",
    "What are namespaces in C++? Why are they useful?",
    "What is std::move, and why is it used?",
    "What is std::forward in C++?",
    "What is memory fragmentation, and how does C++ handle it?",
  ],
  java: [
    "What are the key differences between Java and C++?",
    "What are the main features of Java?",
    "What is JVM (Java Virtual Machine)?",
    "What is JDK, JRE, and JVM? How are they different?",
    "What is the difference between a class and an object in Java?",
    "What are constructors in Java? What are their types?",
    "What is the difference between method overloading and method overriding?",
    "What is inheritance in Java? How does it work?",
    "What is polymorphism? Explain its types.",
    "What is the difference between compile-time and run-time polymorphism?",
    "What is an abstract class in Java?",
    "What are interfaces in Java? How do they differ from abstract classes?",
    "What is the difference between extends and implements?",
    "What is the difference between static and instance methods?",
    "What is the use of the 'final' keyword in Java?",
    "What is the 'this' keyword in Java?",
    "What is the 'super' keyword? How is it used?",
    "What is encapsulation in Java? Why is it important?",
    "What is the difference between checked and unchecked exceptions?",
    "How does exception handling work in Java? Explain try-catch-finally.",
    "What is the difference between throw and throws?",
    "What is the purpose of the 'transient' keyword?",
    "What is serialization in Java?",
    "What is multithreading in Java? How is it implemented?",
    "What is the difference between process and thread?",
    "What are the different thread states in Java?",
    "What is the difference between Runnable and Thread?",
    "What is the use of the synchronized keyword?",
    "What is deadlock in Java? How can it be prevented?",
    "What is the difference between String, StringBuilder, and StringBuffer?",
    "What are the main features of the Java Collections Framework?",
    "What is the difference between ArrayList and LinkedList?",
    "What is the difference between HashMap and Hashtable?",
    "What is the difference between HashSet and TreeSet?",
    "What is the difference between Iterator and ListIterator?",
    "What is an enum in Java?",
    "What is autoboxing and unboxing in Java?",
    "What is lambda expression in Java?",
    "What are functional interfaces in Java?",
    "What is a stream in Java? How does it work?",
    "What is the difference between FileReader and BufferedReader?",
    "How does garbage collection work in Java?",
    "What is the difference between final, finally, and finalize?",
    "What is memory management in Java?",
    "What is the difference between shallow copy and deep copy?",
    "What is the purpose of the volatile keyword?",
    "What is the difference between equals() and ==?",
    "How does hashCode() work in Java?",
    "What is dependency injection in Java?",
    "What are the different types of design patterns in Java?",
    "What is the Singleton design pattern? How is it implemented?",
    "What is the Factory design pattern?",
    "What is Reflection API in Java?",
    "What is the difference between JDBC and Hibernate?",
    "What are Java Annotations? How are they used?",
    "What is Spring Framework in Java?",
    "What is RESTful Web Service in Java?",
  ],
  python: [
    "What are the key features of Python?",
    "What is the difference between Python 2 and Python 3?",
    "What are Python's data types?",
    "What is the difference between mutable and immutable data types?",
    "What is the difference between lists and tuples?",
    "What are sets and dictionaries in Python?",
    "What is list comprehension? How is it used?",
    "What is the difference between deep copy and shallow copy?",
    "What are Python's built-in functions?",
    "What is the difference between *args and **kwargs?",
    "What are lambda functions in Python?",
    "What is the difference between a function and a method?",
    "What is recursion in Python?",
    "What are Python modules and packages?",
    "What is the difference between import and from-import?",
    "What is Python's scope and lifetime of variables?",
    "What is the difference between global, local, and nonlocal variables?",
    "What is object-oriented programming (OOP) in Python?",
    "What are classes and objects in Python?",
    "What is the difference between class methods and instance methods?",
    "What is inheritance in Python? How does it work?",
    "What is polymorphism in Python?",
    "What is encapsulation in Python?",
    "What are static methods in Python?",
    "What is the difference between @staticmethod and @classmethod?",
    "What is the difference between is and == in Python?",
    "What is Python's memory management model?",
    "How does garbage collection work in Python?",
    "What are Python's built-in exception types?",
    "How does exception handling work in Python?",
    "What is the difference between try-except and try-finally?",
    "What is the use of the with statement in Python?",
    "What is the difference between threading and multiprocessing?",
    "What are Python's built-in data structures?",
    "What is the difference between range and xrange?",
    "What is the difference between map, filter, and reduce?",
    "What are iterators and generators in Python?",
    "What is the yield keyword in Python?",
    "What are decorators in Python?",
    "What is the difference between @property and normal methods?",
    "What is duck typing in Python?",
    "What is monkey patching in Python?",
    "What is the difference between NumPy and Pandas?",
    "What is the difference between a dataframe and a series in Pandas?",
    "How do you handle large datasets in Python?",
    "What is the use of the requests module in Python?",
    "What are Python's logging and debugging techniques?",
    "What is unittest in Python?",
    "What are virtual environments in Python?",
    "What is PIP in Python?",
    "What is the difference between conda and pip?",
    "What are Python's web frameworks? Name a few.",
    "What is Flask? How does it differ from Django?",
    "What is REST API in Python?",
    "What is the difference between JSON and Pickle?",
    "What is the difference between a queue and a stack in Python?",
    "How do you optimize Python code for performance?",
    "What is the GIL (Global Interpreter Lock) in Python?",
    "What is asyncio in Python?",
    "How does multithreading work in Python?",
    "What are f-strings in Python?",
    "What is the purpose of the __init__.py file?",
    "What is the difference between shallow and deep copy in Python?",
    "What is the difference between a Python script and a module?",
  ],
  dbms: [
    "What is a Database Management System (DBMS)?",
    "What are the key differences between DBMS and RDBMS?",
    "What are the different types of databases?",
    "What is a primary key?",
    "What is a foreign key?",
    "What is the difference between primary key and unique key?",
    "What is normalization? Why is it important?",
    "Explain different normal forms (1NF, 2NF, 3NF, BCNF, 4NF, 5NF).",
    "What is denormalization? When is it used?",
    "What are SQL and NoSQL databases? How do they differ?",
    "What are ACID properties in DBMS?",
    "What is the difference between a relational and non-relational database?",
    "What is indexing in DBMS? How does it improve performance?",
    "What are clustered and non-clustered indexes?",
    "What is a view in DBMS?",
    "What is the difference between a view and a table?",
    "What are stored procedures? How do they differ from functions?",
    "What are triggers in a database?",
    "What is the difference between DELETE and TRUNCATE?",
    "What is the difference between WHERE and HAVING clauses?",
    "What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN?",
    "What are the different types of relationships in DBMS?",
    "What is a composite key?",
    "What is an entity-relationship (ER) model?",
    "What is an entity, attribute, and relationship?",
    "What is the difference between a weak entity and a strong entity?",
    "What are transactions in DBMS?",
    "What are concurrency control techniques?",
    "What is a deadlock in DBMS? How can it be prevented?",
    "What is the difference between pessimistic and optimistic concurrency control?",
    "What is a candidate key?",
    "What is the difference between a surrogate key and a natural key?",
    "What is the difference between OLTP and OLAP?",
    "What is a data warehouse?",
    "What are the differences between star schema and snowflake schema?",
    "What is database partitioning?",
    "What is sharding in DBMS?",
    "What is replication in databases?",
    "What is CAP theorem in distributed databases?",
    "What are NoSQL databases? Give examples.",
    "What are the different types of NoSQL databases?",
    "What is the difference between MongoDB and MySQL?",
    "What is a graph database?",
    "What is full-text search in databases?",
    "What are database constraints?",
    "What is a materialized view?",
    "What is the difference between UNION and UNION ALL?",
    "What is the difference between correlated and non-correlated subqueries?",
    "What are the advantages and disadvantages of using stored procedures?",
    "What are JSON and XML databases?",
    "What is an execution plan in SQL?",
    "What is the difference between DROP, DELETE, and TRUNCATE?",
    "What are database backups and recovery methods?",
    "What is the difference between log-based and shadow paging recovery?",
    "What is the difference between a schema and an instance?",
    "What are database locks? What are their types?",
    "What is the difference between a soft delete and a hard delete?",
    "What is the use of cursors in SQL?",
    "What are the advantages of indexing?",
    "What is a hash index?",
    "What is the difference between a sequence and an auto-increment?",
    "What is a recursive query in SQL?",
    "What is Big Data, and how does it relate to DBMS?",
    "What are ACID vs BASE properties in databases?",
  ],
  os: [
    "What is an operating system?",
    "What are the main functions of an operating system?",
    "What are the different types of operating systems?",
    "What is the difference between monolithic and microkernel architectures?",
    "What are system calls in an operating system?",
    "What is the difference between user mode and kernel mode?",
    "What is process management in OS?",
    "What is the difference between a process and a thread?",
    "What are the different states of a process?",
    "What is a process control block (PCB)?",
    "What is inter-process communication (IPC)?",
    "What is the difference between multiprocessing and multithreading?",
    "What are the different types of scheduling algorithms?",
    "What is preemptive vs non-preemptive scheduling?",
    "What are CPU scheduling criteria?",
    "What is context switching?",
    "What is deadlock in OS?",
    "What are the necessary conditions for deadlock to occur?",
    "What are deadlock prevention, avoidance, and detection techniques?",
    "What is the difference between starvation and deadlock?",
    "What are semaphores in OS?",
    "What is a critical section problem?",
    "What are mutex locks?",
    "What is virtual memory in OS?",
    "What is paging in OS?",
    "What is segmentation in OS?",
    "What is demand paging?",
    "What are page replacement algorithms?",
    "What is thrashing in OS?",
    "What is fragmentation? Explain internal and external fragmentation.",
    "What is memory management in OS?",
    "What is the difference between paging and segmentation?",
    "What is the difference between logical and physical addresses?",
    "What is disk scheduling?",
    "What are different disk scheduling algorithms?",
    "What is I/O scheduling in OS?",
    "What is spooling in OS?",
    "What is file system in OS?",
    "What are different types of file systems?",
    "What is the difference between FAT32, NTFS, and EXT file systems?",
    "What is RAID in OS?",
    "What is the difference between RAID 0, RAID 1, and RAID 5?",
    "What are device drivers in OS?",
    "What is swap space in OS?",
    "What is a bootstrap program?",
    "What is a hypervisor in OS?",
    "What is the difference between type 1 and type 2 hypervisors?",
    "What is real-time operating system (RTOS)?",
    "What is the difference between hard real-time and soft real-time systems?",
    "What is embedded OS?",
    "What are load balancing and load sharing in OS?",
    "What is the difference between cooperative and preemptive multitasking?",
    "What is a shell in OS?",
    "What is the difference between CLI and GUI?",
    "What are common Unix/Linux commands?",
    "What is an inode in a file system?",
    "What are pipes in Unix/Linux?",
    "What is the difference between fork() and exec() in Unix?",
    "What are signals in Unix/Linux?",
    "What is the role of init in Linux?",
    "What is the difference between hard link and soft link?",
    "What is kernel panic in OS?",
    "What are different types of system failures in OS?",
    "What are watchdog timers in OS?",
    "What is caching in OS?",
    "What is the difference between cache memory and virtual memory?",
    "What is an interrupt in OS?",
    "What is the difference between hardware and software interrupts?",
    "What is memory-mapped I/O?",
    "What is DMA (Direct Memory Access)?",
    "What are different types of OS security threats?",
    "What is an access control list (ACL)?",
    "What are system logs and how are they used for monitoring?",
    "What is process synchronization?",
    "What are orphan and zombie processes?",
    "What is the difference between cooperative and competitive scheduling?",
    "What is load balancing in distributed systems?",
    "What is NUMA in OS?",
    "What is cloud OS?",
    "What are distributed operating systems?",
  ],
  cn: [
    "What is a computer network?",
    "What are the different types of networks (LAN, MAN, WAN)?",
    "What is the OSI model? Explain its layers.",
    "What is the TCP/IP model? How does it differ from the OSI model?",
    "What is the difference between TCP and UDP?",
    "What are the key differences between IPv4 and IPv6?",
    "What is subnetting? Why is it used?",
    "What is CIDR (Classless Inter-Domain Routing)?",
    "What is the difference between a hub, switch, and router?",
    "What is ARP (Address Resolution Protocol)?",
    "What is MAC address? How is it different from an IP address?",
    "What is DNS (Domain Name System)?",
    "What is DHCP (Dynamic Host Configuration Protocol)?",
    "What are the different types of transmission media in networking?",
    "What is the difference between guided and unguided media?",
    "What is NAT (Network Address Translation)?",
    "What are the different types of NAT?",
    "What is a firewall? What are its types?",
    "What is a proxy server and how does it work?",
    "What is a VPN (Virtual Private Network)?",
    "What is the difference between symmetric and asymmetric encryption?",
    "What is SSL/TLS and how does it secure network communication?",
    "What is a socket in networking?",
    "What is the difference between a connection-oriented and connectionless service?",
    "What are the different types of network topologies?",
    "What is CSMA/CD and CSMA/CA?",
    "What is a broadcast domain and a collision domain?",
    "What is an IP address? What are its classes?",
    "What is ICMP (Internet Control Message Protocol)?",
    "What is the purpose of a default gateway?",
    "What is QoS (Quality of Service) in networking?",
    "What are routing protocols? Name some examples.",
    "What is the difference between distance vector and link-state routing protocols?",
    "What is BGP (Border Gateway Protocol)?",
    "What is OSPF (Open Shortest Path First)?",
    "What is RIP (Routing Information Protocol)?",
    "What is MPLS (Multiprotocol Label Switching)?",
    "What is SDN (Software-Defined Networking)?",
    "What is a VLAN (Virtual Local Area Network)?",
    "What is a DMZ (Demilitarized Zone) in networking?",
    "What is port forwarding and why is it used?",
    "What is the difference between HTTP and HTTPS?",
    "What is a load balancer in networking?",
    "What are TCP flags and their functions?",
    "What is the three-way handshake in TCP?",
    "What is a SYN flood attack?",
    "What are the different types of network attacks?",
    "What is IDS (Intrusion Detection System) and IPS (Intrusion Prevention System)?",
    "What is the difference between circuit switching and packet switching?",
    "What is VoIP (Voice over Internet Protocol)?",
    "What is multicast in networking?",
    "What is an anycast address?",
    "What is a wireless network? How does it differ from a wired network?",
    "What is the difference between Wi-Fi and Bluetooth?",
    "What is LTE and how does it work?",
    "What is the difference between 4G and 5G networks?",
    "What is a MANET (Mobile Ad Hoc Network)?",
    "What is cloud computing and how is networking involved?",
    "What is edge computing and how does it relate to networks?",
    "What is network redundancy and why is it important?",
    "What is packet fragmentation and reassembly?",
    "What is a network sniffer and how is it used?",
    "What is a ping command and how does it work?",
    "What is traceroute and how does it help in network diagnostics?",
    "What is the difference between public and private IP addresses?",
    "What is IPv6 tunneling?",
    "What is an overlay network?",
    "What is network congestion and how can it be controlled?",
    "What is flow control in networking?",
    "What are leaky bucket and token bucket algorithms?",
    "What is a bridge in networking?",
    "What is link aggregation?",
    "What is the hidden node problem in wireless networks?",
    "What is WEP, WPA, and WPA2 security protocols?",
    "What is an SSID in Wi-Fi networks?",
    "What is network latency, bandwidth, and throughput?",
    "What is network jitter?",
    "What is Ethernet and how does it work?",
    "What is PoE (Power over Ethernet)?",
    "What are data encapsulation and de-encapsulation in networking?",
    "What is the difference between synchronous and asynchronous transmission?",
    "What is an autonomous system in networking?",
    "What is a leased line?",
    "What is the difference between SD-WAN and traditional WAN?",
    "What are the advantages of fiber optic cables over copper cables?",
    "What is the function of an access point in a wireless network?",
    "What is the difference between peer-to-peer and client-server networking?",
    "What is the purpose of a network gateway?",
    "What is a Tunneling Protocol?",
    "What is the difference between stateful and stateless firewalls?",
    "What is an MTU (Maximum Transmission Unit)?",
    "What are beacon frames in wireless networks?",
  ],
  sql: [
    "What is SQL?",
    "What are the different types of SQL commands?",
    "What is the difference between SQL and MySQL?",
    "What is a primary key?",
    "What is a foreign key?",
    "What is the difference between UNIQUE and PRIMARY KEY constraints?",
    "What is a candidate key?",
    "What is a composite key?",
    "What is the difference between DELETE, TRUNCATE, and DROP?",
    "What are the different types of joins in SQL?",
    "What is the difference between INNER JOIN and OUTER JOIN?",
    "What is a self-join?",
    "What is a cross join?",
    "What is normalization? Why is it important?",
    "Explain the different normal forms (1NF, 2NF, 3NF, BCNF, etc.).",
    "What is denormalization?",
    "What is an index in SQL? What are its types?",
    "What is the difference between clustered and non-clustered indexes?",
    "What is a view in SQL? How is it different from a table?",
    "What is a stored procedure?",
    "What is a function in SQL, and how is it different from a stored procedure?",
    "What are triggers in SQL?",
    "What is the difference between HAVING and WHERE clauses?",
    "What is the difference between GROUP BY and ORDER BY?",
    "What is the difference between COUNT(), SUM(), AVG(), MIN(), and MAX()?",
    "What is a subquery in SQL?",
    "What is the difference between correlated and non-correlated subqueries?",
    "What is an alias in SQL?",
    "What is a case statement in SQL?",
    "What is the difference between UNION and UNION ALL?",
    "What is the difference between CHAR and VARCHAR?",
    "What is the difference between NVARCHAR and VARCHAR?",
    "What are ACID properties in SQL?",
    "What is a transaction in SQL?",
    "What are COMMIT and ROLLBACK in SQL?",
    "What is SAVEPOINT in SQL?",
    "What is the difference between INNER JOIN and NATURAL JOIN?",
    "What is the difference between LEFT JOIN and RIGHT JOIN?",
    "What is the purpose of the COALESCE() function?",
    "What is the difference between NULL and an empty string in SQL?",
    "What is the use of the DISTINCT keyword?",
    "What is the purpose of the CASE statement in SQL?",
    "What are common table expressions (CTEs)?",
    "What is the difference between a CTE and a temporary table?",
    "What is a materialized view?",
    "What are window functions in SQL?",
    "What is the ROW_NUMBER() function?",
    "What is the difference between RANK() and DENSE_RANK()?",
    "What is the difference between DELETE and TRUNCATE?",
    "What is the difference between EXISTS and IN operators?",
    "What is the difference between a stored procedure and a trigger?",
    "What is the difference between CROSS JOIN and FULL OUTER JOIN?",
    "What is an OLAP database?",
    "What is the difference between OLTP and OLAP?",
    "What is indexing in SQL? Why is it important?",
    "What is a composite index?",
    "What is the difference between a schema and a database?",
    "What is a cursor in SQL?",
    "What are the advantages and disadvantages of using cursors?",
    "What is the difference between a function and a stored procedure?",
    "What is the difference between synchronous and asynchronous replication?",
    "What is partitioning in SQL?",
    "What is sharding in SQL?",
    "What is an execution plan in SQL?",
    "How does indexing improve performance in SQL?",
    "What is deadlock in SQL?",
    "How do you prevent deadlocks in SQL?",
    "What is a recursive query?",
    "What is the MERGE statement in SQL?",
    "What is the difference between SERIALIZABLE and READ COMMITTED isolation levels?",
    "What are the different types of isolation levels in SQL?",
    "What is the difference between pessimistic and optimistic locking?",
    "What are database constraints in SQL?",
    "What is a surrogate key?",
    "What is auto-increment in SQL?",
    "What is the difference between scalar, inline, and multi-statement table-valued functions?",
    "What is the use of the CASE statement?",
    "What is JSON in SQL? How is it used?",
    "What is XML in SQL? How is it stored?",
    "What is the purpose of the ROLLUP and CUBE functions in SQL?",
    "What is the difference between ROLLUP and GROUPING SETS?",
    "What is the purpose of the PIVOT and UNPIVOT operators?",
    "What is an audit log in SQL?",
    "How can you optimize SQL queries?",
    "What are the best practices for writing efficient SQL queries?",
    "How can you improve the performance of SQL queries in large databases?",
    "What is the difference between horizontal and vertical scaling in databases?",
    "What is a surrogate key, and when should it be used?",
    "What are NoSQL databases, and how do they differ from SQL databases?",
    "How do SQL and NoSQL databases work together?",
    "What is JSONB in PostgreSQL?",
    "What is the difference between SQL Server, MySQL, and PostgreSQL?",
    "What is a foreign key constraint?",
    "What is referential integrity in SQL?",
    "What is a composite foreign key?",
    "What is the difference between full-text search and a regular search in SQL?",
    "What is an ENUM data type in SQL?",
    "How does the SQL CHECK constraint work?",
    "What is the difference between static and dynamic SQL?",
    "What is a schema in SQL?",
    "What is the difference between a logical and physical schema?",
    "What is database migration in SQL?",
    "How do you perform data backup and restore in SQL?",
  ],
  software_development: [
    "What is the Software Development Life Cycle (SDLC)?",
    "What are the different models in SDLC?",
    "Explain the Waterfall model in software development.",
    "What is the Agile methodology?",
    "What are the key differences between Agile and Waterfall?",
    "What is Scrum in Agile development?",
    "What are the different roles in a Scrum team?",
    "What are sprints in Scrum?",
    "What is Kanban, and how does it differ from Scrum?",
    "What is DevOps, and how does it relate to software development?",
    "What is CI/CD in DevOps?",
    "What are the phases of software testing?",
    "What is the difference between functional and non-functional testing?",
    "What is unit testing, and why is it important?",
    "What is the difference between black-box and white-box testing?",
    "What is integration testing?",
    "What is regression testing?",
    "What is the difference between system testing and acceptance testing?",
    "What is test-driven development (TDD)?",
    "What is behavior-driven development (BDD)?",
    "What is the difference between verification and validation in software development?",
    "What are design patterns in software development?",
    "Explain the Singleton design pattern.",
    "What is the Factory pattern?",
    "What is the Observer pattern?",
    "What is the difference between monolithic and microservices architecture?",
    "What are the advantages and disadvantages of microservices?",
    "What is an API, and how is it used in software development?",
    "What is RESTful API, and how does it work?",
    "What is GraphQL, and how does it compare to REST?",
    "What is the difference between synchronous and asynchronous programming?",
    "What is multithreading in software development?",
    "What is the difference between a process and a thread?",
    "What is software version control?",
    "What is Git, and how is it used?",
    "What is the difference between Git and GitHub?",
    "What is a pull request in Git?",
    "What are branches in Git?",
    "What is the difference between merging and rebasing in Git?",
    "What is a software requirement specification (SRS)?",
    "What is the difference between functional and non-functional requirements?",
    "What are software quality attributes?",
    "What is software maintainability?",
    "What are the key principles of object-oriented programming (OOP)?",
    "What is the SOLID principle in software development?",
    "What is dependency injection?",
    "What is refactoring in software development?",
    "What is code review, and why is it important?",
    "What are code smells, and how do you fix them?",
    "What is the DRY principle in software development?",
    "What is the KISS principle?",
    "What is the YAGNI principle?",
    "What is technical debt in software development?",
    "What is pair programming?",
    "What are the advantages and disadvantages of remote software development?",
    "What are microservices, and how do they communicate?",
    "What is API gateway in microservices?",
    "What is load balancing in software development?",
    "What is caching, and how does it improve performance?",
    "What is a message queue in software development?",
    "What is event-driven architecture?",
    "What are the best practices for writing clean and maintainable code?",
    "What is software documentation, and why is it important?",
    "What are some common software development security best practices?",
    "What is SQL injection, and how can you prevent it?",
    "What is cross-site scripting (XSS), and how can you prevent it?",
    "What is OAuth, and how is it used in authentication?",
    "What is JWT (JSON Web Token), and how is it used?",
    "What are micro-frontends?",
    "What is the role of a software architect?",
    "What is the difference between front-end, back-end, and full-stack development?",
    "What are some common front-end frameworks used in software development?",
    "What is the difference between React, Angular, and Vue.js?",
    "What is a progressive web app (PWA)?",
    "What are WebSockets, and how do they work?",
    "What is API rate limiting, and why is it important?",
    "What is database sharding, and when should it be used?",
    "What is CAP theorem in distributed systems?",
    "What is NoSQL, and how does it differ from SQL databases?",
    "What is eventual consistency in distributed systems?",
    "What is a container in software development?",
    "What is Docker, and how is it used?",
    "What is Kubernetes, and why is it important?",
    "What is the difference between virtual machines and containers?",
    "What is serverless computing?",
    "What is cloud computing, and what are its different models?",
    "What are the benefits of using cloud-based software development?",
    "What is Infrastructure as Code (IaC)?",
    "What is an SLA (Service Level Agreement) in software development?",
    "What is software scalability, and how do you achieve it?",
    "What is the difference between horizontal and vertical scaling?",
    "What are progressive enhancements in web development?",
    "What is feature flagging in software development?",
    "What is blue-green deployment?",
    "What is A/B testing in software development?",
    "What is the difference between an MVP (Minimum Viable Product) and a prototype?",
    "What is a software backlog?",
    "What is an epic, story, and task in Agile development?",
    "What is Continuous Deployment vs. Continuous Delivery?",
    "What is the difference between static and dynamic typing in programming languages?",
    "What is a monorepo, and how is it used in software development?",
    "What is the difference between functional programming and object-oriented programming?",
    "What are microkernels in operating systems?",
    "What is an SDK (Software Development Kit)?",
    "What are the common software development tools used in the industry?",
    "What is the importance of software documentation?",
    "What is the future of software development?",
  ],
};

const InterviewQuestions = () => {
  const { subject } = useParams();
  const subjectQuestions = questions[subject] || [];

  return (
    <div
      style={{
        backgroundColor: "#F8F9FA",
        color: "#212529",
        padding: "40px 20px",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "30px",
            textAlign: "center",
            color: "#2C3E50",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {subject.toUpperCase()} Interview Questions
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {subjectQuestions.map((question, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#FFFFFF",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #E9ECEF",
                color: "#495057",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                e.target.style.backgroundColor = "#F8F9FA";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
                e.target.style.backgroundColor = "#FFFFFF";
              }}
            >
              <span
                style={{
                  fontWeight: "600",
                  color: "#2C3E50",
                  marginRight: "10px",
                }}
              >
                Q{index + 1}:
              </span>
              {question}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewQuestions;
