var exp = require('express');
var app = exp();
var fs = require('fs');

var user = {
	"user4" : {
		"name" : "Terry",
		"Series" : "Brooklyn Nine Nine",
		"id" : "4"
	}
}

app.post('/addUser', function(req, res){
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
		if(err){
			return console.error(err);
		}
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		res.end(JSON.stringify(data));
	});
})

var serv = app.listen(8081, function(){
	var h = serv.address().address
	var p = serv.address().port
	console.log('Application Running at http://%s:%s',h,p);
})