import express from 'express';
import path from 'path';
const app = express();

app.get("/", (req, res) => {
    const absPath = path.resolve('pages/home.html')
    res.sendFile(absPath);
})

app.get("/login", (req, res) => {
    const absPath = path.resolve('pages/login.html')
    res.sendFile(absPath);
})

app.post("/about", (req, res) => {
    const absPath = path.resolve('pages/about.html')
    res.sendFile(absPath);
})

app.listen(3200)