var mysql = require('mysql');

var connMySQL = function () {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'swesleyy',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    return connMySQL;
}