var fs = require('fs');

var writes = fs.createWriteStream('red.txt');
var reads = fs.createReadStream('Log.txt');
var reads2 = fs.createReadStream('red.txt');

var data = new Buffer(256);
data.fill(0);
/*var d2 = new Buffer(256);
d2.fill(0);
//*///Data read to copy to another file
reads.on('data', function(chunk){
	data+=chunk;
});

var x = data.length;
data.slice(0,x);
reads.on('error', function(err){
	console.log(err.stack);
});

//Data Write to output file
writes.write(data, 'UTF8');
writes.end();

writes.on('finish', function(){
	console.log('Data Copied to other File!');
	console.log('\nData Write to Output File terminated\n');

});
writes.on('error', function(err){
	console.log(err.stack);
});


//Reading from file
data.fill(0);
reads2.on('data', function(chunk){
	data+=chunk;
});

var x = data.length;
data.slice(0,x);

reads2.on('end', function(){
	console.log(data);
	console.log('\nData Read terminated from Output File\n');
});
reads2.on('error', function(err){
	console.log(err.stack);
});