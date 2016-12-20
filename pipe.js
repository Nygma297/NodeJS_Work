 var fs = require('fs');
 
 var reads = fs.createReadStream('Log.txt');
 var writes = fs.createWriteStream('red.txt');
 
 reads.pipe(writes);
 
 console.log('Pipe executed!');