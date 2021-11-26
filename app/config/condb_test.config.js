const mysql = require('mysql');

//Connect localhost database demo
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb',
    multipleStatements: true
});

module.exports = con;