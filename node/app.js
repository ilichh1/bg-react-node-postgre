const http = require('http');
const { Todo } = require('./models');

const HTTP_PORT = process.env.NODE_API_PORT;

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(HTTP_PORT); //the server object listens on port 8080

console.log('este es el backend del gonzalo');

/* Todo
  .create({
    title: 'Esto es un pendiente',
    body: '¿Que tenía que hacer? Ya ni me acuerdo =('
  })
  .then(createdTodo => {
    console.log(`Se creó un TODO con el ID: ${createdTodo.id}`);
  }); */

/* Todo.destroy({
  where: {
    id: 1
  }
})
.then(response => {
  console.log(response);
  console.log('Borrado un TODO');
}) */