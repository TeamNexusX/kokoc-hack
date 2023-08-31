const { DataTypes } = require('sequelize');
const DB = require('../config/db.connect');

module.exports = DB.define(
    'files',
    {
        fileName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        // file | dir
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'files',
    },
);
