const LearningMaterials = require("../model/learning-materials");

const LearningMaterialsDAO = {};

LearningMaterialsDAO.queryById = function (id, action) {
    LearningMaterials.findOne({
        where: {
            id: id
        }
    }).then(res => {
        action(res);
    });
};

LearningMaterialsDAO.queryByCondition = function (condition, action) {
    LearningMaterials.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

LearningMaterialsDAO.queryAll = function (action) {
    LearningMaterials.findAll().then(res => {
        action(res);
    });
};

LearningMaterialsDAO.insert = function (id, name, path) {
    LearningMaterials.create({
        id: id,
        name: name,
        path: path
    }).then(console.log("学习资料表执行insert成功"));
};

LearningMaterialsDAO.updateById = function (id, name, path) {
    LearningMaterials.update({
        name: name,
        path: path
    }, {
        where: {id: id}
    }).then(console.log("学习资料表执行update成功"));
};

LearningMaterialsDAO.deleteById = function (id) {
    LearningMaterials.destroy({id: id})
        .then(console.log("学习资料表执行delete成功"))
};

module.exports = LearningMaterialsDAO;