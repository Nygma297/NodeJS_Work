var fs = require('fs');

console.log('\nFetching File Stats For nerds:');
fs.stat('Log.txt', function(err,stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log('\nFile stats as given above for input file!\n');
	
	console.log('Input is a File: ' + stats.isFile());
	console.log('Input is a Directory: '+ stats.isDirectory());
});