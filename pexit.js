 process.on('exit', function(c){
	 setTimeout(function(){
		console.log('Unreachable code!!!'); 
	 },200);
	 console.log('Program Terminating now!', c);
 });
 console.log('Program terminated Code is Gone!')
 
 function ph(){
	 console.log('Hello User!');
 }
 var x = setTimeout(ph,2000);
 
 clearTimeout(x);
 /*
 setInterval(ph,1000);*/