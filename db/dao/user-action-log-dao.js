const UserActionLog = require("../model/user-action-log");

const userActionLogDAO = {};

userActionLogDAO.queryById = function (id, action) {
    User.findOne({
        where: {
            id: id
        }
    }).then(res => {
        action(res);
    });
};

userActionLogDAO.queryByCondition = function (condition, action) {
    UserActionLog.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

userActionLogDAO.queryAll = function (action) {
    UserActionLog.findAll().then(res => {
        action(res);
    });
};

userActionLogDAO.insert = function (userId, actionType, actionContent) {
    UserActionLog.create({
        userId: userId,
        actionType: actionType,
        actionContent: actionContent
    }).then(console.log("执行insert成功"));
};

userActionLogDAO.updateById = function (id, userId, actionType, actionContent) {
    UserActionLog.update({
        userId: userId,
        actionType: actionType,
        actionContent: actionContent
    }, {
        where: {id: id}
    }).then(console.log("执行update成功"));
};

userActionLogDAO.deleteById = function (id) {
    UserActionLog.destroy({id: id})
        .then(console.log("执行delete成功"))
};

module.exports = userActionLogDAO;