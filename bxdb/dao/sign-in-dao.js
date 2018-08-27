const SignIn = require("../model/sign-in");

const SignInDAO = {};

SignInDAO.queryById = function (id, action) {
    SignIn.findOne({
        where: {
            id: id
        }
    }).then(res => {
        action(res);
    });
};

SignInDAO.queryByCondition = function (condition, action) {
    SignIn.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

SignInDAO.queryAll = function (action) {
    SignIn.findAll().then(res => {
        action(res);
    });
};

SignInDAO.insert = function (id, name, pin, current_sign_time, last_sign_time, sign_benefits) {
    SignIn.create({
        id: id,
        name: name,
        pin: pin,
        current_sign_time: current_sign_time,
        last_sign_time: last_sign_time,
        sign_benefits: sign_benefits
    }).then(console.log("签到表执行insert成功"));
};

SignInDAO.updateById = function (id, name, pin, current_sign_time, last_sign_time, sign_benefits) {
    SignIn.update({
        name: name,
        pin: pin,
        current_sign_time: current_sign_time,
        last_sign_time: last_sign_time,
        sign_benefits: sign_benefits
    }, {
        where: {id: id}
    }).then(console.log("签到表执行update成功"));
};

SignInDAO.deleteById = function (id) {
    SignIn.destroy({id: id})
        .then(console.log("签到表执行delete成功"))
};

module.exports = SignInDAO;