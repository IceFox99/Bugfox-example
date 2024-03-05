"use strict";

const math = require("../src/math");
const assert = require('assert');

// get average value
function average(...args) {
	const sum = math.sum(...args);
	return math.div(sum, args.length);
}

describe("Test", () => {
	it('average(1,2,3) should return 2', () => {
		assert.strictEqual(average(1,2,3), 2);
	});

	it('average(10,20,30) should return 20', () => {
		assert.strictEqual(average(10,20,30), 20);
	});
	it('average(1.5,0,21) should return 7.5', () => {
		assert.strictEqual(average(1.5,0,21), 7.5);
	});
});
