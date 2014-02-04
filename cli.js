#!/usr/bin/env node
'use strict';
var fs = require('fs');

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	console.log('word-stream');
	console.log('or');
	console.log('word-stream > <output file>');
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(require('./package').version);
	return;
}

fs.createReadStream('words.txt').pipe(process.stdout)
	.on('error', process.stderr.write.bind(process.stderr));
