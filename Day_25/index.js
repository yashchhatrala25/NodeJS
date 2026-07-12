const express = require('express');
const app = express();

// const express = require('express')();
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>")
})

app.get("/", (req, res) => {
    res.send("<h1>Home Page 2</h1>")
})

app.listen(3200);