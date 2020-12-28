var mysql = require('mysql');

var connMysql = function() {

    console.log('Db connection');
    
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'swesleyy',
        database : 'portal_noticias'
      });
}

module.exports = function() {
    console.log('O autoload carregou o modulo de conexão com DB');
    return connMysql;
}