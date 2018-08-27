const seq = require("../connection");
const Sequelize = require('sequelize');
//烟瘾等级表
const SmokingLevel = seq.define('smoking_level', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    level_id: {//等级id
        type: Sequelize.STRING
    },
    level_name:{//等级名称
        type: Sequelize.STRING
    },
    feature: {//烟瘾特征
        type: Sequelize.STRING
    }
},
    {freezeTableName: true}
);

SmokingLevel.sync({force: false});

module.exports = SmokingLevel;

