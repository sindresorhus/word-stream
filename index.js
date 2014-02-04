'use strict';
var fs = require('fs');
var split = require('split');

module.exports = fs.createReadStream(__dirname + '/words.txt').pipe(split());
