const User = require("../model/user");

const userDAO = {};

userDAO.queryById = function (id) {
    User.findOne({
        where: {
            id: id
        }
    }).then(res => {
        return res
    });
};

userDAO.queryAll = function () {
    User.findAll().then(res => {
        return res
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