const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('html/index.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": "text/plain" })
            res.end('Internal Server Error!')
            return;
        }

        res.writeHead(200, {"content-type": "text/html"});
        if (req.url == '/') {
            res.write(data);    
        } else if (req.url == '/submit') {
            res.write('<h1>Data Submitted!</h1>')
        }
        res.end();
    })
})

server.listen(3500);