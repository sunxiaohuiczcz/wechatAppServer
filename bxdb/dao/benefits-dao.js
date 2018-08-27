const Benefits = require("../model/benefits");

const benefitsDAO = {};

benefitsDAO.queryById = function (benefits_id, action) {
    Benefits.findOne({
        where: {
            benefits_id: benefits_id
        }
    }).then(res => {
        action(res);
    });
};

benefitsDAO.queryByCondition = function (condition, action) {
    Benefits.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

benefitsDAO.queryAll = function (action) {
    Benefits.findAll().then(res => {
        action(res);
    });
};

benefitsDAO.insert = function (benefits_id, types, pick_address, benefits_name) {
    Benefits.create({
        benefits_id: benefits_id,
        types: types,
        pick_address: pick_address,
        benefits_name: benefits_name
    }).then(console.log("福利表执行insert成功"));
};

benefitsDAO.updateById = function (benefits_id, types, pick_address, benefits_name) {
    Benefits.update({
        types: types,
        pick_address: pick_address,
        benefits_name: benefits_name
    }, {
        where: {benefits_id: benefits_id}
    }).then(console.log("福利表执行update成功"));
};

benefitsDAO.deleteById = function (benefits_id) {
    Benefits.destroy({benefits_id: benefits_id})
        .then(console.log("福利表执行delete成功"))
};

module.exports = benefitsDAO;