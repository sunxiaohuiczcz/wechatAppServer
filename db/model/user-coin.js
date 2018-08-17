const seq = require("../connection");
const Sequelize = require('sequelize');

const UserCoin = seq.define('t_app_user_coin', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    coinCount: {
        type: Sequelize.BIGINT
    }
});

UserCoin.sync({force: false});