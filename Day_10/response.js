const http = require('http');

const age = 26;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.write(`
            <html>
                <head>
                    <title>Intro</title>
                </head>
                <body>
                    <h1>Hello, Yash Chhatrala</h1>
                    <h2>`+ age +`</h2>
                </body>
            </html>
        `)
    res.end()
})

server.listen(4800)
