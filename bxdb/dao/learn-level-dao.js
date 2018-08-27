const LearnLevel = require("../model/learn-level");

const LearnLevelDAO = {};

LearnLevelDAO.queryById = function (level_id, action) {
    LearnLevel.findOne({
        where: {
            level_id: level_id
        }
    }).then(res => {
        action(res);
    });
};

LearnLevelDAO.queryByCondition = function (condition, action) {
    LearnLevel.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

LearnLevelDAO.queryAll = function (action) {
    LearnLevel.findAll().then(res => {
        action(res);
    });
};

LearnLevelDAO.insert = function (level_id, level_name, corr_benefit) {
    LearnLevel.create({
        level_id: level_id,
        level_name: level_name,
        corr_benefit: corr_benefit
    }).then(console.log("学习等级表执行insert成功"));
};

LearnLevelDAO.updateById = function (level_id, level_name, corr_benefit) {
    LearnLevel.update({
        level_name: level_name,
        corr_benefit: corr_benefit
    }, {
        where: {level_id: level_id}
    }).then(console.log("学习等级表执行update成功"));
};

LearnLevelDAO.deleteById = function (level_id) {
    LearnLevel.destroy({level_id: level_id})
        .then(console.log("学习等级表执行delete成功"))
};

module.exports = LearnLevelDAO;