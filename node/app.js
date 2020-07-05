const http = require('http');

const HTTP_PORT = process.env.NODE_API_PORT;

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(HTTP_PORT); //the server object listens on port 8080

console.log('este es el backend del gonzalo');