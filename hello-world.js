console.log("HELLO WORLD");


var http = require("http");

http.createServer(function (request, response) {
   
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   response.end('Hello World\n');
}).listen(3000);


console.log('Server running at http://127.0.0.1:3000/');



var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('welcome.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("Hello node!");     
});

