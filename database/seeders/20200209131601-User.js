'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Ram Thapa',
        email: 'ram@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maya',
        email: 'maya@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
