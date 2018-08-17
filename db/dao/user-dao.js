const User = require("../model/user");

const userDAO = {};

userDAO.queryById = function (id, action) {
    User.findOne({
        where: {
            id: id
        }
    }).then(res => {
        action(res);
    });
};

userDAO.queryByCondition = function (condition, action) {
    User.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

userDAO.queryAll = function (action) {
    User.findAll().then(res => {
        action(res);
    });
};

userDAO.insert = function (nickname, openid, level) {
    User.create({
        nickname: nickname,
        openid: openid,
        level: level
    }).then(console.log("执行insert成功"));
};

userDAO.updateById = function (id, nickname, openid, level) {
    User.update({
        nickname: nickname,
        openid: openid,
        level: level
    }, {
        where: {id: id}
    }).then(console.log("执行update成功"));
};

userDAO.deleteById = function (id) {
    User.destroy({id: id})
        .then(console.log("执行delete成功"))
};

module.exports = userDAO;