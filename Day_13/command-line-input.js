const http = require('http');

const arg = process.argv;
const port = arg[2];

const server = http.createServer((req, res) => {
    res.write("Testing input from CMD")
    res.end();
})

server.listen(port);
