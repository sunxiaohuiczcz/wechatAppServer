const seq = require("../connection");
const Sequelize = require('sequelize');
//学习资料表
const LearningMaterials = seq.define('learning_materials', {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {//资料名称
            type: Sequelize.STRING
        },
        path: {//资料地址
            type: Sequelize.JSON
        }
    },
    {freezeTableName: true}
);

LearningMaterials.sync({force: false});

module.exports = LearningMaterials;

