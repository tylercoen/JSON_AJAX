const c = require("./hello.js");
const a = 100;
const b = "World";

const d = require("./hello2.js");
console.log(a + b);
console.log(c);
console.log(d);

console.log(`${d.first} ${d.second}`);
