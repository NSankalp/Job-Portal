const Os = `Operating Systems Complete Revision Guide  
1. Introduction to Operating Systems  
An Operating System (OS) is system software that manages hardware resources and provides services for computer programs. It acts as an interface between users and the computer hardware.  

Key Features of an OS  
- **Process Management:** Handles process creation, scheduling, and termination.  
- **Memory Management:** Allocates and deallocates memory efficiently.  
- **File System Management:** Organizes and controls access to files and directories.  
- **I/O Management:** Manages input/output devices and operations.  
- **Security & Protection:** Prevents unauthorized access to system resources.  

Types of Operating Systems  
- **Batch OS:** Executes jobs in batches without user interaction (e.g., early IBM systems).  
- **Time-Sharing OS:** Multiple users share system resources (e.g., UNIX).  
- **Real-Time OS:** Processes data within strict time constraints (e.g., embedded systems).  
- **Distributed OS:** Manages a group of computers as a single system (e.g., Google’s cluster management).  
- **Embedded OS:** Designed for specialized devices (e.g., RTOS for IoT).  

2. Process Management  
A **process** is a program in execution. The OS manages processes using scheduling and synchronization techniques.  

Process States  
1. **New** → Created but not yet executed.  
2. **Ready** → Waiting for CPU allocation.  
3. **Running** → Currently executing.  
4. **Waiting** → Blocked, waiting for an event.  
5. **Terminated** → Process execution completed.  

Process Scheduling Algorithms  
- **FCFS (First Come, First Serve):** Executes in the order of arrival.  
- **SJF (Shortest Job First):** Executes the shortest job first.  
- **Round Robin (RR):** Each process gets a fixed time slice (time quantum).  
- **Priority Scheduling:** Processes are executed based on priority.  

Context Switching  
When switching from one process to another, the OS saves the current process state and loads the next process state. This is known as **context switching** and involves saving registers, program counters, and memory states.  

3. Threads and Multithreading  
A **thread** is a lightweight process that allows multiple tasks to run concurrently within a process.  

Types of Threads  
- **User-Level Threads:** Managed by user applications without kernel intervention.  
- **Kernel-Level Threads:** Managed by the OS kernel for better scheduling.  

Multithreading Models  
- **Many-to-One:** Multiple user threads mapped to a single kernel thread.  
- **One-to-One:** Each user thread maps to a kernel thread.  
- **Many-to-Many:** Multiple user threads map to multiple kernel threads.  

4. Deadlocks  
A **deadlock** occurs when processes are waiting indefinitely for resources held by each other.  

Necessary Conditions for Deadlock (Coffman’s Conditions)  
1. **Mutual Exclusion:** Resources cannot be shared.  
2. **Hold and Wait:** Processes holding resources can request more.  
3. **No Preemption:** A resource cannot be forcibly taken.  
4. **Circular Wait:** A circular chain of processes exist, each waiting for the next.  

Deadlock Prevention & Recovery  
- **Avoidance:** Use algorithms like **Banker’s Algorithm** to ensure safe allocation.  
- **Detection:** Check for circular dependencies in the resource allocation graph.  
- **Recovery:** Kill processes or preempt resources to break deadlock.  

5. Memory Management  
Memory management ensures efficient use of RAM and allows multiple processes to run simultaneously.  

Memory Allocation Techniques  
- **Contiguous Allocation:** Allocates adjacent memory blocks (e.g., Best Fit, First Fit, Worst Fit).  
- **Paging:** Divides memory into fixed-size pages to avoid fragmentation.  
- **Segmentation:** Divides memory into variable-sized segments based on logical divisions.  

Virtual Memory  
Allows processes to use more memory than physically available by using **paging and swapping**. The **page replacement algorithms** include:  
- **FIFO (First-In-First-Out)**  
- **LRU (Least Recently Used)**  
- **Optimal Page Replacement**  

6. File System Management  
The OS manages files using a structured approach, ensuring data integrity and security.  

File Allocation Methods  
- **Contiguous Allocation:** Files stored in continuous memory blocks.  
- **Linked Allocation:** Each file is a linked list of blocks.  
- **Indexed Allocation:** Uses an index block to store file block addresses.  

Directory Structures  
- **Single-Level Directory** (Flat structure)  
- **Two-Level Directory** (Separate user directories)  
- **Hierarchical Directory** (Tree-like structure)  

7. Disk Scheduling Algorithms  
Disk scheduling optimizes read/write operations for efficiency.  

- **FCFS (First Come, First Serve):** Executes requests in order.  
- **SSTF (Shortest Seek Time First):** Selects the closest request first.  
- **SCAN (Elevator Algorithm):** Moves in one direction, then reverses.  
- **C-SCAN (Circular SCAN):** Similar to SCAN but moves in one direction only.  
- **LOOK & C-LOOK:** Improved versions of SCAN and C-SCAN that stop at the last request instead of the disk edge.  

8. I/O Management  
Manages hardware devices such as keyboards, printers, and disks. The **I/O system** consists of:  
- **Polling:** CPU continuously checks if an I/O device is ready.  
- **Interrupts:** Device sends a signal to notify the CPU when ready.  
- **DMA (Direct Memory Access):** Transfers data directly between memory and device without CPU involvement.  

9. Security & Protection  
The OS enforces security measures to prevent unauthorized access.  

Security Mechanisms  
- **Authentication:** Verifies user identity (passwords, biometrics).  
- **Authorization:** Grants access based on permissions.  
- **Encryption:** Secures data using cryptographic techniques.  

Access Control Models  
- **DAC (Discretionary Access Control):** Owners set access permissions.  
- **MAC (Mandatory Access Control):** Security policies define access rules.  
- **RBAC (Role-Based Access Control):** Access granted based on roles.  

10. Operating System Interview Questions & Competitive Programming Topics  
To prepare for OS-related job interviews and exams, focus on:  

- **Process Synchronization (Semaphores, Mutex, Readers-Writers Problem)**  
- **Deadlocks (Banker’s Algorithm, Resource Allocation Graphs)**  
- **Memory Management (Paging, Segmentation, Page Replacement Algorithms)**  
- **File System Concepts (Inodes, Journaling, Directory Structures)**  
- **Disk Scheduling (SCAN, SSTF, C-SCAN, LOOK)**  

Example Question: Find the page fault count using LRU page replacement for a given reference string and frame size.  

\`\`\`c
#include <stdio.h>

int findLRU(int time[], int n) {
    int min = time[0], pos = 0;
    for (int i = 1; i < n; i++) {
        if (time[i] < min) {
            min = time[i];
            pos = i;
        }
    }
    return pos;
}

int main() {
    int frames = 3, pages[] = {1, 3, 0, 3, 5, 6, 3}, pageFaults = 0;
    int memory[3], time[3], count = 0;

    for (int i = 0; i < 7; i++) {
        int found = 0;
        for (int j = 0; j < frames; j++) {
            if (memory[j] == pages[i]) {
                found = 1;
                time[j] = ++count;
                break;
            }
        }
        if (!found) {
            int pos = findLRU(time, frames);
            memory[pos] = pages[i];
            time[pos] = ++count;
            pageFaults++;
        }
    }
    printf("Total Page Faults: %d\\n", pageFaults);
    return 0;
}
\`\`\`
This structured guide will help students revise OS concepts quickly and efficiently for interviews and competitive programming. 🚀`;

export default Os;
