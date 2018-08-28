const express = require('express');
const router = express.Router();
const userDao = require('../db/dao/user-dao');

router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.get('/recordUser', function (req, res) {
    const openid = req.query.openid;
    const nickname = req.query.nickname;
    const level = req.query.level;

    let duplicate = false;
    userDao.queryByCondition({openid: openid}, function (user) {
        if (user.length > 0) {
            duplicate = true;
        }
        const resultMsg = duplicate ? "用户已存在" : "新用户信息记录成功";
        if (!duplicate) {
            userDao.insert(nickname, openid, level);
        }
        res.json({msg: resultMsg});
    });
});

router.get('/getUser', function (req, res) {
    const openid = req.query.openid;
    if (openid === "" || openid === "undefined" || openid == null) {
        res.json({msg: "openid不能为空"});
    }
    userDao.queryByCondition({openid: openid}, function (userInfo) {
        res.json(userInfo);
    });
});

router.get('/getUserById', function (req, resp) {
    const id = req.query.id;
    if (id === "" || id === "undefined" || id == null) {
        resp.json({msg: 'id不能为空'});
        return;
    }
    userDao.queryById(id, function (res) {
        resp.json(res.nickname);
    })
});

router.get('/signIn', function (req, resp) {
    const userId = req.query.pin;
    const coinCount = calculateCoin('signIn')
    if(coinCount > 0){
        SignInDAO.updateById(userId, coinCount);
    }
    const userCoinCount = userCoinDAO.getCoinByUserId(userId);
})



function calculateCoin(action){
    if(action === 'sign'){
        return 100;
    } else if(action === 'success'){
        return 10000;
    }

}


module.exports = router;
