const endpointRoutes = require('express').Router();

// Model class from Sequelize
const { Todo } = require('./models');

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

endpointRoutes.get('/todos', (req, res) => {
  const { includeDeleted = false } = req.query;
  Todo
    .findAll({
      paranoid: !includeDeleted
    })
    .then(queryResults => {
      res.apiResponse(queryResults);
    });
});

module.exports = endpointRoutes;