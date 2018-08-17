const seq = require("../connection");
const Sequelize = require('sequelize');

const User = seq.define('t_app_user', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    nickname: {
        type: Sequelize.STRING
    },
    openid: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    level: {
        type: Sequelize.INTEGER
    }
});

User.sync({force: false});

module.exports = User;

