var http = require('http');

var server = http.createServer((req,res)=>{
	req.setEncoding('UTF8');
	req.on('data',(chunk)=>{
		let trans = transform(chunk);
		res.write(trans);
	});
	res.on('end',()=>{
		res.end();
	});
});

server.listen(1337);