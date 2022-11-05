const database = require('mime-db');
const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '',
    database: 'restaurent'

});

mysqlConnection.connect((err) => {
    if(!err)
        console.log('Connection succeded');
    else
        console.log('connection failed');
})

module.exports = {mysqlConnection}
