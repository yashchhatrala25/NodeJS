# Create an HTTP Server in Node.js
- Answer: 
```
const http = require('http');

http.createServer((req, res) => {
    res.write("<h1>Hello, This is Yash Chhatrala</h1>");
    res.end();
}).listen(4800);
```
- http.createServer() creates a new HTTP server.
- req represents the incoming request.
- res is used to send the response back to the client.
- listen(4800) starts the server on port 4800. 

# Which package is used to create a server?
- Answer: http

# Can we create two servers in the same file?
- Answer: Yes. You can create multiple HTTP servers in a single file, provided each server listens on a different port.
```
const http = require('http');

http.createServer((req, res) => {
    res.end("Server 1");
}).listen(3000);

http.createServer((req, res) => {
    res.end("Server 2");
}).listen(4000);
```

# Why do we use res.end()?
- Answer: res.end() signals that the server has finished sending the response. Without calling res.end(), the client will keep waiting because the response is not considered complete.
- Example:
```
res.write("Hello");
res.end();
```
- Or you can send the response directly:
```
Or you can send the response directly:
```

# How to End a Process in Node.js?
- Answer: process.exit();
- process.exit() immediately terminates the current Node.js process.

# How to create Dynamic PORTS?
```
const http = require('http');

const port = Number(process.argv[2]);

if (!port || port < 1 || port > 65535) {
  console.error('Usage: node server.js <port>');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Testing input from CMD');
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```
```
node server.js 3000
```

- process.argv[2] retrieves the port number passed from the command line.
- Number() converts the argument from a string to a number.
- The validation ensures the port is within the valid range (1–65535).
- server.listen(port) starts the server on the specified port.
- The callback logs the URL once the server is ready.