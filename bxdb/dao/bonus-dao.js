const Bonus = require("../model/bonus");

const BonusDAO = {};

BonusDAO.queryById = function (bonus_id, action) {
    Bonus.findOne({
        where: {
            bonus_id: bonus_id
        }
    }).then(res => {
        action(res);
    });
};

BonusDAO.queryByCondition = function (condition, action) {
    Bonus.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

BonusDAO.queryAll = function (action) {
    Bonus.findAll().then(res => {
        action(res);
    });
};

BonusDAO.insert = function (bonus_id, investor, invest_time, total_amount, allocation, gurant) {
    Bonus.create({
        bonus_id: bonus_id,
        investor: investor,
        invest_time: invest_time,
        total_amount: total_amount,
        allocation: allocation,
        gurant: gurant
    }).then(console.log("奖金表执行insert成功"));
};

BonusDAO.updateById = function (bonus_id, investor, invest_time, total_amount, allocation, gurant) {
    Bonus.update({
        investor: investor,
        invest_time: invest_time,
        total_amount: total_amount,
        allocation: allocation,
        gurant: gurant
    }, {
        where: {bonus_id: bonus_id}
    }).then(console.log("奖金表执行update成功"));
};

BonusDAO.deleteById = function (bonus_id) {
    Bonus.destroy({bonus_id: bonus_id})
        .then(console.log("奖金表执行delete成功"))
};

module.exports = BonusDAO;