const UserRelation = require("../model/user-relation");

const userRelationDAO = {};

userRelationDAO.queryById = function (id, action) {
    UserRelation.findOne({
        where: {
            id: id
        }
    }).then(res => {
        action(res);
    });
};

userRelationDAO.queryByCondition = function (condition, action) {
    UserRelation.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

userRelationDAO.queryAll = function (action) {
    UserRelation.findAll().then(res => {
        action(res);
    });
};

userRelationDAO.insert = function (userId, relevantUserId, type) {
    UserRelation.create({
        userId: userId,
        relevantUserId: relevantUserId,
        type: type
    }).then(console.log("执行insert成功"));
};

userRelationDAO.updateById = function (id, userId, relevantUserId, type) {
    UserRelation.update({
        userId: userId,
        relevantUserId: relevantUserId,
        type: type
    }, {
        where: {id: id}
    }).then(console.log("执行update成功"));
};

userRelationDAO.deleteById = function (id) {
    UserRelation.destroy({id: id})
        .then(console.log("执行delete成功"))
};

module.exports = userRelationDAO;