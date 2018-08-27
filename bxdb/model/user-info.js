const seq = require("../connection");
const Sequelize = require('sequelize');
//个人信息表
const UserInfo = seq.define('user_info', {
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
    phone: {//电话
        type: Sequelize.STRING
    },
    age: {//年龄
        type: Sequelize.INTEGER
    },
    learning_level: {//学习等级
        type: Sequelize.STRING
    },
    smoking_age: {//烟龄
        type: Sequelize.INTEGER
    },
    smoking_level: {//烟瘾等级
        type: Sequelize.STRING
    },
    address: {//地址
        type: Sequelize.STRING
    },
    role: {//角色
        type: Sequelize.STRING
    }
},
    {freezeTableName: true}
);

UserInfo.sync({force: false});

module.exports = UserInfo;

