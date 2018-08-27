const SmokingLevel = require("../model/smoking-level");

const SmokingLevelDAO = {};

SmokingLevelDAO.queryById = function (level_id, action) {
    SmokingLevel.findOne({
        where: {
            level_id: level_id
        }
    }).then(res => {
        action(res);
    });
};

SmokingLevelDAO.queryByCondition = function (condition, action) {
    SmokingLevel.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

SmokingLevelDAO.queryAll = function (action) {
    SmokingLevel.findAll().then(res => {
        action(res);
    });
};

SmokingLevelDAO.insert = function (level_id, level_name, feature) {
    SmokingLevel.create({
        level_id: level_id,
        level_name: level_name,
        feature: feature
    }).then(console.log("烟瘾等级表执行insert成功"));
};

SmokingLevelDAO.updateById = function (level_id, level_name, feature) {
    SmokingLevel.update({
        level_name: level_name,
        feature: feature
    }, {
        where: {level_id: level_id}
    }).then(console.log("烟瘾等级表执行update成功"));
};

SmokingLevelDAO.deleteById = function (level_id) {
    SmokingLevel.destroy({level_id: level_id})
        .then(console.log("烟瘾等级表执行delete成功"))
};

module.exports = SmokingLevelDAO;