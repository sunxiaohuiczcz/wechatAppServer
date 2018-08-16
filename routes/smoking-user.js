var express = require('express');
var router = express.Router();

router.get('/smokinguser', function (req, resp) {
    var smokerName = req.query.smoker;
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

router.get('/showPic', function (req, resp) {
    var smokerName = req.query.smoker;
    resp.render('test',
        { title: '选项卡' , name: smokerName + "，求你别吸了"});
});

module.exports = router;