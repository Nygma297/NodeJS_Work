 var x = new Buffer("Assasins Creed ", "utf-8");
 
 var y = new Buffer(20);
 var w = new Buffer(50);
 var r = new Buffer(50);
 
 y.write("Battlefield");
 var z = y.length;
 z--
 y.slice(0,z); 
 console.log('\n\nOctets Written into Buffer: ' +z);
 console.log('Data in Buffer 1: ' +x.toString(undefined)+ '\nData in Buffer 2: ' +y.toString(undefined));
// var w = y.toJSON();
 console.log('\nList of Games: \n');
 
 w = Buffer.concat([x,y]);
 z = w.length;
 
 w.slice(0,z);
 console.log(w.toString(undefined));
 z = Buffer.compare(x,y);
 if(z == 0){
	 console.log('Redundant data found!');
 }else{
	 console.log('No Redundant Data!');
 }
 y = y.toJSON(y);
 x = x.toJSON(x);
 w = w.toJSON(w);