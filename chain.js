var fs = require('fs');
var zip = require('zlib');

fs.createReadStream('Log.txt')
	.pipe(zip.createGzip())
	.pipe(fs.createWriteStream('Log.txt.zip'));
	
console.log('File Compressed');


/*
var fs = require('fs');
var zip = require('zlib');

fs.createReadStream('Log.txt.gz')
	.pipe(zip.createGzip())
	.pipe(fs.createWriteStream('Log.txt'));
	
console.log('File Decompressed');
*/