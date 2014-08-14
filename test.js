'use strict';
var assert = require('assert');
var wordStream = require('./');

it('should return words', function (cb) {
	wordStream.on('data', function (word) {
		assert(word.length > 1);
		this.pause();
		cb();
	});
});
