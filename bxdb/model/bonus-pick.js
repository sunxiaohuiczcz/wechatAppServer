const seq = require("../connection");
const Sequelize = require('sequelize');
//奖金领取表
const BonusPick = seq.define('bonus_pick', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    picker: {//领取人
        type: Sequelize.STRING
    },
    bonus_id:{
        type: Sequelize.BIGINT
    },
    pick_time: {//领取时间
        type: Sequelize.DATE(6)
    },
    pick_amount: {//领取金额
        type: Sequelize.FLOAT
    }
},
    {freezeTableName: true}
);

BonusPick.sync({force: false});

module.exports = BonusPick;

