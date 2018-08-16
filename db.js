/*、*
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'wdsxh1203'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});

connection.end();
*/

var Sequelize = require('sequelize');

var sequelize = new Sequelize('signIn', 'root', 'wdsxh1203', {
    host: 'localhost',
    dialect: 'mysql'
});

var User = sequelize.define('user', {
    user_id: Sequelize.STRING,
    user_name: Sequelize.STRING,
    user_type: Sequelize.STRING,
    user_grade: Sequelize.STRING
});

module.exports = sequelize;
