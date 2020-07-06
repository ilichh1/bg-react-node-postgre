const express = require('express');
const HTTP_PORT = 8080;

const Todo = require('./models/index')['Todo'];
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'sni'
  });
});

app.get('/todo', (req, res) => {
  const todoTitle = String(req.query.title);
  const todoBody = String(req.query.body);

  Todo.create({
    title: todoTitle,
    body: todoBody
  })
  .then(modeloCreado => {
    res.json(modeloCreado);
  });

});

app.get('/todo/:todoId', (req, res) => {
  const idDelTodo = req.params['todoId'];
  // const idDelTodo = req.params.todoId;
  // const { todoId: idDelTodo } = req.params;
  const supuestoPk = Number(idDelTodo);
  if (isNaN(supuestoPk)) {
    return res
      .status(404)
      .json({
        message: 'No chinges'
      });
  }

  Todo
    .findByPk(idDelTodo)
    .then(modeloEncontradoONo => {
      res.json(modeloEncontradoONo);
    })
});

app.get('/todo/update/:todoId', (req, res) => {
  const todoTitle = String(req.query.title);
  const todoBody = String(req.query.body);

  const idDelTodo = req.params['todoId'];
  
  const supuestoPk = Number(idDelTodo);
  if (isNaN(supuestoPk)) {
    return res
      .status(404)
      .json({
        message: 'No chinges'
      });
  }

  Todo
    .findByPk(supuestoPk)
    .then(modeloEncontrado => {
      if (modeloEncontrado === null) {
        return Promise.reject('NOT_FOUND');
      }
      return modeloEncontrado.update({
        title: todoTitle,
        body: todoBody
      });
    })
    .then(modeloActualizado => res.json(modeloActualizado));
});

app.get('/todo/delete/:todoId', (req, res) => {

  const idDelTodo = req.params['todoId'];
  
  const supuestoPk = Number(idDelTodo);
  if (isNaN(supuestoPk)) {
    return res
      .status(404)
      .json({
        message: 'No chinges'
      });
  }

  Todo
  .destroy({
    where: { id: supuestoPk }
  })
  .then(deleteResponse => {
    res.json({
      message: 'Se eliminó el SNI',
      deleteResponse
    });
  });
});

app.listen(HTTP_PORT, () => {
  console.log('GONZAPI ESTA VIVO.');
});