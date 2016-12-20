 var events = require('events');
 var eventEmitter = new events.EventEmitter();
 
 var l1 = function l1(){
	 console.log('Listener 1 Created!');
 }
 
  var l2 = function l2(){
	 console.log('Listener 2 Created!');
 }
 
 eventEmitter.addListener('connection', l1);
 eventEmitter.on('connection',l2);
 var listenerCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
 eventEmitter.emit('connection');

 console.log(listenerCount + ' active listeners!'); 
 eventEmitter.removeListener('connection', l1);
 console.log('Listner 1 has been removed!');
 
 eventEmitter.emit('connection');
 listenerCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
 console.log(listenerCount + ' active listeners!');
 
 console.log('Program Terminated!');