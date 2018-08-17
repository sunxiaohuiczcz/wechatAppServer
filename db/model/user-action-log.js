const seq = require("../connection");
const Sequelize = require('sequelize');

const UserActionLog = seq.define('t_app_user_action_log', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.BIGINT
    },
    actionType: {
        type: Sequelize.INTEGER
    },
    actionContent: {
        type: Sequelize.STRING
    }
});

UserActionLog.sync({force: true});