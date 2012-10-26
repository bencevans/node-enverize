// Testing Requirements
var assert = require('assert');

// Test Requirements
var enverize = require('./');

describe('check for exported functions in the right places', function() {
	it("should export .enverize function enverize", function() {
		assert.equal(typeof enverize.enverize, 'function');
	});
	it("should export .parse function parse", function() {
		assert.equal(typeof enverize.parse, 'function');
	});
	it("should export .env object", function() {
		assert.equal(typeof enverize.env, 'object');
	});
});

describe('check functions function', function() {
	it("should assume process.env as .env", function() {
		assert.equal(enverize.env, process.env);
	});
	it("should enverize in accordance to points", function() {
		enverize.env = {HOME:'/home/bencevans', BASHRC:'/home/bencevans/.bashrc'};
		assert.equal(enverize.enverize('/home/bencevans/.bashrc'), '$BASHRC');
	});
	it("should export .parse function parse", function() {
		assert.equal(enverize.parse('$BASHRC'), '/home/bencevans/.bashrc');
	});
});
