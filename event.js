var events = require('events');

var eeo = new events.EventEmitter();

var x = function connected(){
	console.log('Connection Successful!');
	eeo.emit('data_received');
}

eeo.on('connection',x);
eeo.on('data_received', function(){
	console.log('Data Successfully Received');	
});

eeo.emit('connection');
console.log('Program Terminated');