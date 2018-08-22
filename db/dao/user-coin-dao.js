const UserCoin = require("../model/user-coin");

const userCoinDAO = {};

userCoinDAO.queryById = function (id, action) {
    UserCoin.findOne({
        where: {
            id: id
        }
    }).then(res => {
        action(res);
    });
};

userCoinDAO.queryByCondition = function (condition, action) {
    UserCoin.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

userCoinDAO.queryAll = function (action) {
    UserCoin.findAll().then(res => {
        action(res);
    });
};

userCoinDAO.insert = function (userId, coinCount) {
    UserCoin.create({
        userId: userId,
        coinCount: coinCount
    }).then(console.log("执行insert成功"));
};

userCoinDAO.updateById = function (id, userId, coinCount) {
    UserCoin.update({
        userId: userId,
        coinCount: coinCount
    }, {
        where: {id: id}
    }).then(console.log("执行update成功"));
};

userCoinDAO.deleteById = function (id) {
    UserCoin.destroy({id: id})
        .then(console.log("执行delete成功"))
};

module.exports = userCoinDAO;