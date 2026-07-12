const express = require('express');

const app = express();

app.get("", (req, res) => {
    res.send("<h1>Basic Nodejs Example</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>This is About Page</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>This is Contact Page</h1>");
})

app.listen(3200);