'use strict';
var assert = require('assert');
var wordStream = require('./index');

it('should return words', function (cb) {
	wordStream.on('data', function (word) {
		assert(word.length > 1);
		this.pause();
		cb();
	});
});
