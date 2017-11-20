const mysql = require("mysql");


let connection = mysql.createConnection({ 
    host: "localhost",
    port: 3306,
    user: 'alex',
    password: 'password',
    database: 'burgers_db'
});

let dbConnect = () => {
    connection.connect( err => {
        if (err) throw err;    
    });
};

module.exports = connection;