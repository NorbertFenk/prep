## API & Backend Topics

### Q: What is a REST API?
A: A REST (Representational State Transfer) API is an architectural style for network-based services that uses standard HTTP protocols to manipulate resources. It relies on stateless client-server communication, standard uniform resource identifiers (URIs), and standardized representations such as JSON.

### Q: What are the differences between HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, and `DELETE`)?
A: `GET` retrieves resources safely without modifying server state, whereas `POST` sends data to create a new resource. `PUT` replaces an entire target resource, `PATCH` applies partial modifications, and `DELETE` removes the specified resource.

### Q: What are standard HTTP status codes (e.g., 200, 201, 400, 404, 500)?
A: Standard status codes signal the outcome of an HTTP request: `200 OK` indicates success, and `201 Created` signals successful resource creation. For failures, `400 Bad Request` indicates client syntax errors, `404 Not Found` means the URI does not exist, and `500 Internal Server Error` indicates an unhandled server failure.

### Q: What is JSON and how is it utilized in API communications?
A: JSON (JavaScript Object Notation) is a lightweight, human-readable text format used for data interchange. It functions as the universal data payload format in REST APIs, allowing different programming languages to exchange structured objects and arrays seamlessly.

### Q: Explain the API request and response lifecycle.
A: A client initiates an HTTP request containing an endpoint URL, method, headers, and optional body to a web server. The backend server routes the request, runs business logic and database queries, and packages the result into an HTTP response returned with a status code and payload.

### Q: How does API authentication and authorization work?
A: Authentication validates who the client or user is, typically using credentials, API keys, or JWT tokens. Authorization determines what actions or resources that authenticated identity has permission to access or modify.


