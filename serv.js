var exp = require('express');
var app = exp();

app.get('/', function(req, res){
	res.send('Hello World');
});

var server = app.listen(8081, function(){
	var h = server.address().address;
	var p = server.address().port;
	
	console.log('Application Listening at http://%s:%s',h,p);
});