const seq = require("../connection");
const Sequelize = require('sequelize');
//监督表
const Supervise = seq.define('supervise', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    supervised_people: {//被监督人
        type: Sequelize.STRING
    },
    supervise_people:{//监督人
        type: Sequelize.STRING
    },
    supervise_time: {//监督时间
        type: Sequelize.DATE(6)
    },
    supervise_method:{//监督方式
        type: Sequelize.STRING
    }
},
    {freezeTableName: true}
);

Supervise.sync({force: false});

module.exports = Supervise;

