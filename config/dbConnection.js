var mysql = require('mysql');

module.exports = function() {
  return mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : 'swesleyy',
      database : 'portal_noticias'
    });
}