var exp = require('express');
var app = exp();

app.use(exp.static('webs'));
app.get('/index.html', function(req, res){
	res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/process_get', function(req, res){
	re = {
		First_Name:req.query.fn,
		Last_Name:req.query.ln,
		Contact_Nummber:req.query.cn,
		Password:req.query.pa,
		Email_ID:req.query.mail,
		Gender:req.query.gen,
		Location:req.query.loc
	};
	console.log(re);
	res.end(JSON.stringify(re));
})
var serv = app.listen(8081, function(){
		var h = serv.address().address
		var p = serv.address().port
		console.log('Application running at address http://%s:%s',h,p);
})

/*POST*/
/*
var exp = require('express');
var app = exp();

app.use(exp.static('webs'));
app.get('/index.html', function(req, res){
	res.sendFile(__dirname + '/' + 'index.html');
});

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.get('/process_get', urlencodedParser, function(req, res){
	re = {
		First_Name:req.query.fn,
		Last_Name:req.query.ln,
		Contact_Nummber:req.query.cn,
		Password:req.query.pa,
		Email_ID:req.query.mail,
		Gender:req.query.gen,
		Location:req.query.loc
	};
	console.log(re);
	res.end(JSON.stringify(re));
})
var serv = app.listen(8081, function(){
		var h = serv.address().address
		var p = serv.address().port
		console.log('Application running at address http://%s:%s',h,p);
})
//*/