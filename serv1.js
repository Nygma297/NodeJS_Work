var exp = require('express');
var app = exp();

app.get('/', function(req, res){
	console.log('GET request encountered!');
	res.send('GET Request!');
});

app.post('/', function(req, res){
	console.log('POST Request encountered!');
	res.send('POST Request');
});

app.delete('/del_user', function(req, res){
	console.log('DELETE user request encountered!');
	res.send('User DELETE');
});

app.get('/list_user', function(req, res){
	console.log('LIST USER Request Encountered!');
	res.send('User List!');
});

app.get('/ab*', function(req, res){
	console.log('GET Request for /ab');
	res.send('Pattern Match!');
});

var serv = app.listen(8081, function(){
	var h = serv.address().address
	var p = serv.address().port
	
	console.log('Application running at address http://%s:%s',h,p)
});