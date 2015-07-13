#!/usr/bin/env node
'use strict';
var meow = require('meow');
var tryNm = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ try-nm [input]',
		'',
		'Examples',
		'  $ try-nm',
		'  unicorns & rainbows',
		'',
		'  $ try-nm ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(tryNm(cli.input[0] || 'unicorns'));
