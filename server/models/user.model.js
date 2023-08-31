const { DataTypes } = require('sequelize');
const DB = require('../config/db.connect');

module.exports = DB.define(
    'users',
    {
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "['USER']",
        },
        roles: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            defaultValue: ['USER'],
        },
        // _______________________________________
        // |    star |   medium  |   extended    |
        // |---------|-----------|---------------|
        // |    5гб  |   10гб    |   20гб        |
        // ---------------------------------------
        tariff: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'start',
        },
    },
    {
        tableName: 'users',
        timestamps: false,
    },
);
