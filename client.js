 var http = require('http');
 
 var opt = {
	 host:'localhost',
	 port:'8081',
	 path:'/index.html'
 }
 var cb = function(response){
	 var body = '';
	 response.on('data', function(data){
		body += data; 
	 });
	 response.on('end', function(){
		 console.log(body);
	 });
 }
 
 var req = http.request(opt, cb);
 req.end();