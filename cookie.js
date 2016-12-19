var exp = require('express');
var cp = require('cookie-parser');
var app = exp();

app.use(cookieParser())

app.get('/', function(req,res){
	console.log('Cookies: '+ req.cookies);
})

app.listen(8081);