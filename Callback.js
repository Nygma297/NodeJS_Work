/*var cb = require("fs");

console.log('Reading data from the Input file...');
var d = cb.readFileSync('log.txt');

console.log('\nRead Started\n\nFollowing is the File content:\n');
console.log(d.toString());
console.log('\nEnd of File Reached \n\nRead Successful\n!');

//*/

var cb = require("fs");

cb.readFile('log.txt',function(err,d){
	if(err) return console.error(err);
	console.log(d.toString());	
});
console.log('Program Terminated');
//*/