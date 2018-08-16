var express = require('express');
var router = express.Router();

router.get('/smokinguser', function (req, resp) {
    var smokerName = req.query.smoker;
    var sequelize = require('../db');

    sequelize.transaction(function (t) {
        User.findOne({
            id:req.params.userid
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    });

    var pic1 = req.params.pic1;
    if (smokerName === 'A') {
        resp.send('A的监督者是B');

    }
    else if (smokerName === 'C') {
        resp.send('C的监督者是D');
    }
    else {
        resp.send('请输入系统中存在的戒烟者');
    }
});

module.exports = router;