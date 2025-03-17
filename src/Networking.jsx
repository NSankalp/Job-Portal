const Networking = `Computer Networking Complete Revision Guide  

1. Introduction to Computer Networks  
A **computer network** is a system of interconnected devices that communicate and share resources.  

Key Features of Networking  
- **Data Sharing:** Enables efficient communication and resource sharing.  
- **Scalability:** Supports network expansion without major changes.  
- **Reliability & Redundancy:** Ensures continuous operation even in failures.  
- **Security:** Protects data using encryption, firewalls, and authentication.  
- **Fault Tolerance:** Ensures minimal downtime using redundant paths.  

Types of Networks  
- **LAN (Local Area Network):** Covers a small geographic area (e.g., home, office).  
- **WAN (Wide Area Network):** Connects multiple LANs over long distances (e.g., the Internet).  
- **MAN (Metropolitan Area Network):** Covers a city or a large area.  
- **PAN (Personal Area Network):** Small-scale network (e.g., Bluetooth, Wi-Fi Direct).  

2. Network Topologies  
Defines the physical or logical arrangement of devices in a network.  

- **Bus Topology:** Single cable backbone; easy to install but failure-prone.  
- **Star Topology:** Central device (switch/hub) manages communication; scalable but single point of failure.  
- **Ring Topology:** Devices connected in a closed loop; efficient but failure-sensitive.  
- **Mesh Topology:** Every device connects to every other; highly redundant but costly.  
- **Hybrid Topology:** Combination of multiple topologies.  

3. OSI & TCP/IP Models  
The **OSI Model** is a conceptual framework for network communication.  

### **OSI Model (7 Layers)**
1. **Physical Layer:** Deals with transmission media (cables, signals).  
2. **Data Link Layer:** Manages MAC addresses, error detection (e.g., Ethernet, MAC).  
3. **Network Layer:** Routes data using IP addresses (e.g., IPv4, IPv6, routers).  
4. **Transport Layer:** Ensures reliable transmission (TCP, UDP, port numbers).  
5. **Session Layer:** Manages sessions between devices (authentication, re-establishing connections).  
6. **Presentation Layer:** Translates data formats (encryption, compression).  
7. **Application Layer:** Provides network services (HTTP, FTP, DNS, SMTP).  

### **TCP/IP Model (4 Layers)**
1. **Network Interface Layer:** Maps to OSI’s Physical & Data Link layers.  
2. **Internet Layer:** Similar to the OSI Network Layer (IP, ICMP, ARP).  
3. **Transport Layer:** Provides reliable/unreliable transmission (TCP, UDP).  
4. **Application Layer:** Maps OSI’s top three layers (HTTP, FTP, SMTP).  

4. IP Addressing & Subnetting  
An **IP Address** is a unique identifier assigned to a device on a network.  

- **IPv4 Address:** 32-bit, written as four decimal numbers (e.g., 192.168.1.1).  
- **IPv6 Address:** 128-bit, written in hexadecimal (e.g., 2001:db8::1).  

### **Subnetting**
Divides a network into smaller sub-networks for efficient routing.  
- **Subnet Mask:** Determines the network and host portions of an IP (e.g., 255.255.255.0).  
- **CIDR (Classless Inter-Domain Routing):** Uses variable-length subnet masking (e.g., /24, /16).  

5. TCP & UDP  
The **Transport Layer** protocols manage end-to-end communication.  

- **TCP (Transmission Control Protocol):** Reliable, connection-oriented, used in HTTP, FTP.  
- **UDP (User Datagram Protocol):** Fast, connectionless, used in VoIP, DNS.  

TCP Connection Establishment (Three-Way Handshake)  
1. Client → **SYN** → Server  
2. Server → **SYN-ACK** → Client  
3. Client → **ACK** → Server  

6. Routing & Switching  
### **Routing**  
The process of selecting paths in a network.  

- **Static Routing:** Manually configured routes.  
- **Dynamic Routing:** Uses algorithms to adjust routes automatically (RIP, OSPF, BGP).  

### **Switching**  
The process of forwarding packets within a network.  

- **Circuit Switching:** Dedicated path per connection (e.g., telephone networks).  
- **Packet Switching:** Data is divided into packets and routed independently (e.g., the Internet).  
- **Message Switching:** Whole message is sent without breaking into packets.  

7. Network Security  
Protects network infrastructure and data from cyber threats.  

- **Firewall:** Filters incoming/outgoing traffic based on rules.  
- **Intrusion Detection System (IDS):** Detects malicious activity.  
- **Intrusion Prevention System (IPS):** Blocks detected threats.  
- **VPN (Virtual Private Network):** Encrypts data for secure remote access.  
- **Public Key Infrastructure (PKI):** Uses cryptographic keys for authentication.  

8. DNS, DHCP & NAT  
### **DNS (Domain Name System)**  
Resolves domain names to IP addresses (e.g., google.com → 142.250.190.78).  

- **A Record:** Maps domain to an IPv4 address.  
- **AAAA Record:** Maps domain to an IPv6 address.  
- **CNAME Record:** Alias for another domain name.  

### **DHCP (Dynamic Host Configuration Protocol)**  
Automatically assigns IP addresses to devices.  

### **NAT (Network Address Translation)**  
Maps private IPs to a public IP for Internet access.  

9. Wireless Networking & Protocols  
### **Wi-Fi Standards**  
- **802.11a/b/g/n/ac/ax (Wi-Fi 6):** Defines wireless network speeds and ranges.  
- **SSID:** Name of a wireless network.  
- **WPA/WPA2/WPA3:** Security protocols for wireless encryption.  

### **Other Networking Protocols**  
- **FTP (File Transfer Protocol):** Transfers files over a network.  
- **HTTP/HTTPS:** Web communication protocols.  
- **SMTP (Simple Mail Transfer Protocol):** Email sending protocol.  
- **SNMP (Simple Network Management Protocol):** Manages network devices.  

10. Network Troubleshooting  
Common network issues and troubleshooting techniques:  

- **Ping:** Checks connectivity between two devices.  
- **Traceroute:** Identifies network path taken by packets.  
- **Netstat:** Displays active network connections.  
- **Wireshark:** Captures and analyzes network traffic.  

11. Interview Questions & Competitive Programming Topics  
To prepare for networking-related interviews and exams, focus on:  

- **OSI vs TCP/IP Model**  
- **Subnetting & IP Addressing**  
- **TCP vs UDP**  
- **Routing Protocols (RIP, OSPF, BGP)**  
- **Network Security (Firewalls, VPN, Encryption)**  

Example Question: Convert an IP Address to Binary.  

\`\`\`python
def ip_to_binary(ip):
    return '.'.join(format(int(octet), '08b') for octet in ip.split('.'))

print(ip_to_binary("192.168.1.1"))  # Output: 11000000.10101000.00000001.00000001
\`\`\`

Example Question: Implement a basic TCP Server in Python.  

\`\`\`python
import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("0.0.0.0", 12345))
server.listen(5)
print("Listening for connections...")

conn, addr = server.accept()
print(f"Connection established with {addr}")
conn.send(b"Hello, Client!")
conn.close()
\`\`\`

This structured guide will help students revise **Networking** concepts quickly and efficiently for interviews and competitive programming. 🚀`;

export default Networking;
