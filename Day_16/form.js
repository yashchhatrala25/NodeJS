const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('html/index.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Internal Server Error');
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    else if (req.url === '/submit' && req.method === 'POST') {
        const dataBody = [];

        req.on('data', chunk => {
            dataBody.push(chunk);
        });

        req.on('end', () => {
            const rowData = Buffer.concat(dataBody).toString();
            const readableData = queryString.parse(rowData);

            console.log(readableData);

            res.writeHead(200, { 'Content-Type': 'text/html' });

            res.end(`
                <h1>Submitted Data</h1>
                <p>Name: ${readableData.name}</p>
                <p>Email: ${readableData.email}</p>
            `);
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(3500);