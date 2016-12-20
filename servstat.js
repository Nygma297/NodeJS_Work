var exp = require('express');
var app = exp();

app.use(exp.static('web'));

app.get('/', function(req, res){
	console.log('Get Request encountered');
	res.send('Hello User!');
});

app.post('/', function(req,res){
	console.log('POST Request Encountered');
	res.send('Hello User!');
});

var serv = app.listen(8081, function(){
	var h = serv.address().address
	var p = serv.address().port
	console.log('Application running at port http://%s:%s',h,p);
});