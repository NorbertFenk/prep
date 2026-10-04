## Computer Science Fundamentals (CSA)

### Q: What is a deadlock and how can it be handled/prevented?
A: A deadlock occurs when two or more processes are permanently blocked because each is holding a resource and waiting for another held by another process. It can be prevented by eliminating one of Coffman's conditions, such as enforcing strict resource allocation hierarchies or employing timeout rollbacks.

### Q: What is multithreading and how does concurrency work?
A: Multithreading is the capability of a CPU to execute multiple threads within a single process concurrently, sharing the same memory address space. Concurrency creates the illusion of simultaneous progress by interleaving execution time-slices across tasks, while parallelism runs tasks on separate CPU cores simultaneously.

### Q: What is the difference between TCP and UDP?
A: TCP (Transmission Control Protocol) is connection-oriented, reliable, and guarantees in-order packet delivery using acknowledgments and handshakes. UDP (User Datagram Protocol) is connectionless and faster with lower overhead, but does not guarantee delivery or packet ordering.

### Q: What is DNS (Domain Name System)?
A: DNS acts as the internet's phonebook, translating human-friendly domain names (like `google.com`) into machine-readable numerical IP addresses. When a request is made, recursive and authoritative name servers resolve the domain to direct network traffic correctly.

### Q: What is DHCP?
A: DHCP (Dynamic Host Configuration Protocol) is a network management protocol that automatically assigns dynamic IP addresses and network parameters to devices joining a network. This automated provisioning prevents manual configuration errors and IP address conflicts.

### Q: What is an IP address and how does IP routing function?
A: An IP address is a unique numerical identifier assigned to every device on an IP network for communication and location addressing. IP routing is the mechanism routers use to inspect packet destination IP addresses and direct them across intermediate networks toward their destination.

### Q: What are ACID properties in DBMS?
A: ACID represents the core guarantees of database transactions: Atomicity (all changes succeed or none do), Consistency (data satisfies all integrity constraints), Isolation (concurrent transactions execute independently), and Durability (committed data survives crashes). Together, they safeguard reliable transaction processing under failures.

### Q: What is database normalization?
A: Database normalization is the process of organizing database schema into structured tables to reduce data redundancy and eliminate update, insertion, and deletion anomalies. It involves progressive stages (such as 1NF, 2NF, and 3NF) using foreign keys and functional dependencies to maintain structural integrity.
