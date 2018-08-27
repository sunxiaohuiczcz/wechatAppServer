const Supervise = require("../model/supervise");

const SuperviseDAO = {};

SuperviseDAO.queryById = function (id, action) {
    Supervise.findOne({
        where: {
            id: id
        }
    }).then(res => {
        action(res);
    });
};

SuperviseDAO.queryByCondition = function (condition, action) {
    Supervise.findAll({
        where: condition
    }).then(res => {
        action(res);
    });
};

SuperviseDAO.queryAll = function (action) {
    Supervise.findAll().then(res => {
        action(res);
    });
};

SuperviseDAO.insert = function (id, supervised_people, supervise_people, supervise_time, supervise_method) {
    Supervise.create({
        id: id,
        supervised_people: supervised_people,
        supervise_people: supervise_people,
        supervise_time: supervise_time,
        supervise_method: supervise_method
    }).then(console.log("监督表执行insert成功"));
};

SuperviseDAO.updateById = function (id, supervised_people, supervise_people, supervise_time, supervise_method) {
    Supervise.update({
        supervised_people: supervised_people,
        supervise_people: supervise_people,
        supervise_time: supervise_time,
        supervise_method: supervise_method
    }, {
        where: {id: id}
    }).then(console.log("监督表执行update成功"));
};

SuperviseDAO.deleteById = function (id) {
    Supervise.destroy({id: id})
        .then(console.log("监督表执行delete成功"))
};

module.exports = SuperviseDAO;