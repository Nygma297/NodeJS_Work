 var fs = require('fs');
 var x = new Buffer(1024);
 
 console.log('\nOpening Existing File!');
 fs.open('red.txt', 'r+', function(err,fd){
	if(err){
		return console.error(err);
	}
	fs.ftruncate(fd, 260, function(err){
		if(err){
			return console.error(err);
		}
	})
	console.log('\nFile opened, Attempting to read it now\n');
	fs.read(fd,  x, 0, x.length, 0, function(err,bytes){
		if(err){
			return console.error(err);
		}
		if(bytes>0){
			console.log(x.slice(0, bytes).toString());
			console.log('\nThe data has been Truncated\n');
		}
		fs.close(fd, function(err){
			if(err){
				return console.error(err);
			}
		});
	});
 });