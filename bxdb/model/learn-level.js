const seq = require("../connection");
const Sequelize = require('sequelize');
//学习等级表
const LearnLevel = seq.define('learn_level', {
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
    corr_benefit: {//等级对应福利
        type: Sequelize.STRING
    }
},
    {freezeTableName: true}
);

LearnLevel.sync({force: false});

module.exports = LearnLevel;

