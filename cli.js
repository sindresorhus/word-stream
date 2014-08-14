#!/usr/bin/env node
'use strict';
var fs = require('fs');
var wordListPath = require('word-list');
var pkg = require('./package.json');
var argv = process.argv.slice(2);

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    word-stream'
	].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

fs.createReadStream(wordListPath).pipe(process.stdout)
	.on('error', process.stderr.write.bind(process.stderr));
