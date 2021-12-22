var searchTerm = function(word,res){
    const express = require('express');
    const app = express();


    var sql = require('mysql2');

    var connection = sql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Asteway17*',
        database: 'entries'
    });
    
    connection.connect();

    connection.query(`select * from entries WHERE word='${word}'` , function (err, definitionList) {
        if (err) console.log(err);
    
        res.send(definitionList);
    });

    connection.end();
}

module.exports = searchTerm;