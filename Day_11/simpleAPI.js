const http = require('http');

const usersData = [
    {
        name: "Yash",
        age: 26,
        email: "yash@test.com"
    },
    {
        name: "Sam",
        age: 20,
        email: "sam@test.com"
    },
    {
        name: "Pater",
        age: 56,
        email: "pater@test.com"
    },
]

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", 'application/json');
    res.write(JSON.stringify(usersData));
    res.end();
});

server.listen(6100);