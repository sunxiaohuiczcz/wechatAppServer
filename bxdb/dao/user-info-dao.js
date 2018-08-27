const UserInfo = require("../model/user-info");

const UserInfoDAO = {};

UserInfoDAO.queryById = function (pin, action) {
    UserInfo.findOne({
        where: {
            pin: pin
        }
    }).then(res => {
        action(res);
    });
};

UserInfoDAO.queryByCondition = function (condition, action) {
    UserInfo.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

UserInfoDAO.queryAll = function (action) {
    UserInfo.findAll().then(res => {
        action(res);
    });
};

UserInfoDAO.insert = function (pin, name, phone, age, learning_level, smoking_age, smoking_level, address, role) {
    UserInfo.create({
        pin: pin,
        name: name,
        phone: phone,
        age: age,
        learning_level: learning_level,
        smoking_age: smoking_age,
        smoking_level: smoking_level,
        address: address,
        role: role
    }).then(console.log("个人信息表执行insert成功"));
};

UserInfoDAO.updateById = function (pin, name, phone, age, learning_level, smoking_age, smoking_level, address, role) {
    UserInfo.update({
        name: name,
        phone: phone,
        age: age,
        learning_level: learning_level,
        smoking_age: smoking_age,
        smoking_level: smoking_level,
        address: address,
        role: role
    }, {
        where: {pin: pin}
    }).then(console.log("个人信息表执行update成功"));
};

UserInfoDAO.deleteById = function (pin) {
    UserInfo.destroy({pin: pin})
        .then(console.log("个人信息表执行delete成功"))
};

module.exports = UserInfoDAO;