const seq = require("../connection");
const Sequelize = require('sequelize');
//福利表
const Benefits = seq.define('benefits', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    benefits_id: {//福利id
        type: Sequelize.BIGINT
    },
    types: {//类型
        type: Sequelize.STRING
    },
    pick_address: {//领取地址
        type: Sequelize.STRING
    },
    benefits_name: {//福利名称
        type: Sequelize.STRING
    }
});

Benefits.sync({force: false});

module.exports = Benefits;

