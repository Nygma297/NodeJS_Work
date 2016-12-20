process.stdin.resume();
process.stdin.setEncoding("UTF8");

process.stdin.on('data', function(chunk){
	console.log('You Wrote: ' + chunk);
});

process.stdin.on('end', function(){
	console.log('Program Terminated');
});
