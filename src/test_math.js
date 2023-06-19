"use strict";

const math = require("./math");

// get average value
function average(...args) {
	const sum = math.sum(...args);
	return math.div(sum, args.length);
}

function test_average() {
	let i1 = (average(1,2,3) === 2);
	let i2 = (average(10,20,30) === 20);
	let i3 = (average(1.5,0,21) === 7.5);
	let i4 = (average(-1.5,-2,-40,40.5) === -0.75);
	console.log("test case 1: " + (i1 ? "pass" : "fail"));
	console.log("test case 2: " + (i2 ? "pass" : "fail"));
	console.log("test case 3: " + (i3 ? "pass" : "fail"));
	console.log("test case 4: " + (i4 ? "pass" : "fail"));
	return (i1 && i2 && i3 && i4);
}

for (let i = 0; i < 10; ++i)
	test_average();
