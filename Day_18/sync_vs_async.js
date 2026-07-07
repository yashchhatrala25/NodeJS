// console.log("Apple1")

// Promise
// setTimeout(() => {
//     console.log("Apple2")
// }, 0);

// let a = 20;
// let b = 10;

// setTimeout(() => {
//     b = 100;
//     console.log(a+b);
// }, 0);

// console.log(a+b)

// console.log("Apple3")

const fs = require('fs');
// fs.readFile('text/yash.txt', 'utf-8', (err, data) => {
//     if (err) {
//         return false;
//     }
//     console.log(data);
// })

const data = fs.readFileSync('text/yash.txt', 'utf-8');
console.log(data)
console.log("end script");