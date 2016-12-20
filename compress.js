var fs = require('fs');
var zip = require('zlib');

fs.createReadStream('red.txt')
	.pipe(zip.createGzip())
	.pipe(fs.createWriteStream('red.txt.gz'));
	
console.log('File Compressed');