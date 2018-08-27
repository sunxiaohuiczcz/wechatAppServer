const seq = require("../connection");
const Sequelize = require('sequelize');
//奖金表
const Bonus = seq.define('bonus', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    bonus_id:{
        type: Sequelize.BIGINT
    },
    investor: {//出资人
        type: Sequelize.STRING
    },
    invest_time: {//出资时间
        type: Sequelize.DATE(6)
    },
    total_amount: {//总金额
        type: Sequelize.FLOAT
    },
    allocation: {//分配方式
        type: Sequelize.STRING
    },
    gurant: {//瓜分人
        type: Sequelize.STRING
    }
});

Bonus.sync({force: false});

module.exports = Bonus;

