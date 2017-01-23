'use strict';
const fs = require('fs');
const binarySlit = require('binary-split');
const wordListPath = require('word-list');

module.exports = fs.createReadStream(wordListPath).pipe(binarySlit());
