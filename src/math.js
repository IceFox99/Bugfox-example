"use strict";
function add(a, b) {
	return a + b;
}
module.exports.add = add;

const sub = (a, b) => {
	return a - b;
};
module.exports.sub = sub;

const sum = (...args) => {
	let total = 0;
	for (let num of args)
		total = add(num, num); // should be add(total, num)
	return total;
};
module.exports.sum = sum;

let mul = (a, b) => a * b, div = (a, b) => a / b;
module.exports.mul = mul;
module.exports.div = div;

class A {
	constructor(name) { this.name = name; }
	method(a) {
		function innerMethod(b) {
			console.log(b);
		}
		innerMethod(a);
	}
	arrowMethod = x => x;
}
module.exports.A = A;

class B extends A {
	constructor(name) { super(name); }
}
module.exports.B = B;
