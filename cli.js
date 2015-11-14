#!/usr/bin/env node
'use strict';
var fs = require('fs');
var meow = require('meow');
var wordListPath = require('word-list');

meow([
	'Usage',
	'  $ word-stream'
]);

fs.createReadStream(wordListPath).pipe(process.stdout)
	.on('error', process.stderr.write.bind(process.stderr));
