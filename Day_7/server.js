const http = require('http');
http.createServer((req, res) => {
    res.write("<h1>Hello, This is Yash Chhatrala</h1>");
    res.end("Yash Chhatrala");
}).listen(4800);

http.createServer((req, res) => {
    res.write("<h1>Hello, This is 4900 Server</h1>");
    res.end("Yash Chhatrala");
}).listen(4900);
