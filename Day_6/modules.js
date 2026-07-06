// const fs = require('fs');
// const os = require('os');
const { log, warn } = require("console");

// fs.writeFileSync("dummy.txt", "Trying with modules");

// console.log(os.platform())
// console.log(os.hostname())
// console.log(os.cpus())

console.log("abc")
console.log(process.cwd())
console.log(process.pid)

log("Custom Log");
warn("Custom Warn");