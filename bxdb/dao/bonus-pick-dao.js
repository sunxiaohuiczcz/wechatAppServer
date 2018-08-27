const BonusPick = require("../model/bonus-pick");

const BonusPickDAO = {};

BonusPickDAO.queryById = function (id, action) {
    BonusPick.findOne({
        where: {
            id: id
        }
    }).then(res => {
        action(res);
    });
};

BonusPickDAO.queryByCondition = function (condition, action) {
    BonusPick.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

BonusPickDAO.queryAll = function (action) {
    BonusPick.findAll().then(res => {
        action(res);
    });
};

BonusPickDAO.insert = function (picker, bonus_id, pick_time, pick_amount) {
    BonusPick.create({
        picker: picker,
        bonus_id: bonus_id,
        pick_time: pick_time,
        pick_amount: pick_amount
    }).then(console.log("奖金领取表执行insert成功"));
};

BonusPickDAO.updateById = function (id, picker, bonus_id, pick_time, pick_amount) {
    BonusPick.update({
        picker: picker,
        bonus_id: bonus_id,
        pick_time: pick_time,
        pick_amount: pick_amount
    }, {
        where: {id: id}
    }).then(console.log("奖金领取表执行update成功"));
};

BonusPickDAO.deleteById = function (id) {
    BonusPick.destroy({id: id})
        .then(console.log("奖金领取表执行delete成功"))
};

module.exports = BonusPickDAO;