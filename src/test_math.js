"use strict";

const math = require("./math");
console.log("test add: 10 + 20 = " + math.add(10, 20));
console.log("test sub: 1000 - 7 = " + math.sub(1000, 7));
console.log("test sum: 10 + 20 + 30 = " + math.sum(10, 20, 30));
console.log("test mul: 3 * 4 = " + math.mul(3, 4));
console.log("test div: 210 / 7 = " + math.div(210, 7));

let a = new math.A("a");
a.method(12345);
let b = new math.B("b");
b.method(54321);
