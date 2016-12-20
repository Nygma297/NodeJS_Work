var fs = require('fs');

var reads = fs.createReadStream('log.txt');

var data = new Buffer(256);
data.fill(0);

reads.setEncoding('UTF8');

reads.on('data', function(chunk){
	data += chunk;
});
var x = data.length;
data.slice(0,x);
reads.on('end', function(){
	console.log(data);
});
reads.on('error', function(err){
	console.log(err.stack);
});

console.log('\nProgram Data Reading!\n');