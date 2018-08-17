const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, resp) {
    resp.render('index', {title: 'Express'});
});

module.exports = router;
