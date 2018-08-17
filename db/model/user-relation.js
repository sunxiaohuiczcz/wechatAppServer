const seq = require("../connection");
const Sequelize = require('sequelize');

const UserRelation = seq.define('t_app_user_relation', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    relevantUserId: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

UserRelation.sync({force: true});