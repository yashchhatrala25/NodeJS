import express from 'express';
import path from 'path';
const app = express();

app.get("/", (req, res) => {
    const absPath = path.resolve('pages/home.html');
    res.sendFile(absPath);
})

app.get("/about", (req, res) => {
    const absPath = path.resolve('pages/about.html');
    res.sendFile(absPath);
})

app.get("/login", (req, res) => {
    const absPath = path.resolve('pages/login.html');
    res.sendFile(absPath);
})

app.use((req, res) => {
    const absPath = path.resolve('pages/404.html');
    res.status(404).sendFile(absPath)
})

app.listen(3200);