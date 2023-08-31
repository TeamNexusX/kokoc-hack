const { Sequelize } = require('sequelize');

module.exports = new Sequelize('cloud-drive', 'keyready', 'userSQL', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
});
