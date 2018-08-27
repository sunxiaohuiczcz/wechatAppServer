const BenefitsPick = require("../model/benefits-pick");

const benefitsPickDAO = {};

benefitsPickDAO.queryById = function (id, action) {
    BenefitsPick.findOne({
        where: {
            id: id
        }
    }).then(res => {
        action(res);
    });
};

benefitsPickDAO.queryByCondition = function (condition, action) {
    BenefitsPick.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

benefitsPickDAO.queryAll = function (action) {
    BenefitsPick.findAll().then(res => {
        action(res);
    });
};

benefitsPickDAO.insert = function (id, picker, pick_time, benefits_id) {
    BenefitsPick.create({
        id: id,
        picker: picker,
        pick_time: pick_time,
        benefits_id: benefits_id
    }).then(console.log("福利领取表执行insert成功"));
};

benefitsPickDAO.updateById = function (id, picker, pick_time, benefits_id) {
    BenefitsPick.update({
        picker: picker,
        pick_time: pick_time,
        benefits_id: benefits_id
    }, {
        where: {id: id}
    }).then(console.log("福利领取表执行update成功"));
};

benefitsPickDAO.deleteById = function (id) {
    BenefitsPick.destroy({id: id})
        .then(console.log("福利领取表执行delete成功"))
};

module.exports = benefitsPickDAO;