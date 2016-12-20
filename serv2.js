var exp = require('express');
var app = exp();
var fs = require('fs');

app.get('/listUsers', function(req, res){
	fs.readFile(__dirname + "/" + "Log.txt", 'utf8', function(err, data){
		if(err){
			return console.error(err);
		}
		console.log(data);
		res.end(data);
	})
})

var serv = app.listen(8081, function(){
	var h = serv.address().address
	var p = serv.address().port
	console.log('Application Running at http://%s:%s',h,p);
})