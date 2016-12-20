var fs = require('fs');
var zip = require('zlib');

fs.createReadStream('red.txt.gz')
	.pipe(zip.createGunzip())
	.pipe(fs.createWriteStream('decred.txt'));
	
console.log('File Decompressed');