'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Todos', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
            allowNull: false,
            type: Sequelize.STRING
        },
        body: {
            allowNull: false,
            type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE
        }
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Todos')
        .then((parametroQueSeraUndefined) => {
            console.log(`Se borró la tala. parametroQueSeraUndefined: `, parametroQueSeraUndefined);
        });
  }
};