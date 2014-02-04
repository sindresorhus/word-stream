'use strict';
var fs = require('fs');
var split = require('split');
var wordListPath = require('word-list');

module.exports = fs.createReadStream(wordListPath).pipe(split());
