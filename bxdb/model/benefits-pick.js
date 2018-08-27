const seq = require("../connection");
const Sequelize = require('sequelize');
//福利领取表
const BenefitsPick = seq.define('benefits_pick', {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        picker: {//领取人
            type: Sequelize.STRING
        },
        pick_time: {//领取时间
            type: Sequelize.DATE(6)
        },
        benefits_id: {//福利id
            type: Sequelize.BIGINT
        }
    },
    {freezeTableName: true}
)
;

BenefitsPick.sync({force: false});

module.exports = BenefitsPick;