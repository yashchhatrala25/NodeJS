const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // ===========
    let collectHeaderData = fs.readFileSync('html/header.html', 'utf-8',)

    // ====================
    let file = "/home";
    if (req.url != '/') {
        file=req.url;
    }

    console.log("html"+file+".html",)

    if (req.url != '/style.css') {
        fs.readFile('html/"+file+".html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {"content-type": "text/plain"});
                res.end("interal server error");
                return false;
            }
            res.write(collectHeaderData+""+data);
            res.end();
        })
    } else if (req.url == '/style.css') {
        fs.readFile('html/style.css', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {"content-type": "text/plain"});
                res.end("css not found");
                return false;
            }
            res.writeHead(200, {"content-type": "text/css"});
            res.end(data);
        })
    }
})

server.listen(3200);