const seq = require("../connection");
const Sequelize = require('sequelize');
//签到表
const SignIn = seq.define('sign_in', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {//姓名
        type: Sequelize.STRING
    },
    pin: {//用户pin
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    current_sign_time: {//当前签到时间
        type: Sequelize.DATE(6)
    },
    last_sign_time: {//上次签到时间
        type: Sequelize.DATE(6)
    },
    sign_benefits: {//签到福利
        type: Sequelize.STRING
    }

},
    {freezeTableName: true}
);

SignIn.sync({force: false});

module.exports = SignIn;

