const http = require('http');

const server = http.createServer((request, response) =>{

    response.writeHead(200, {'content-type': 'text/html'});

    response.end('<h1>Hello Node!!!!<h1>\n');
});

server.listen(3000, () => {
    
    console.log('server is runing on http://localhost:3000');
});