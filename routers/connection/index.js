const mysql = require('mysql2/promise');

exports.openBlackmythConnection = async () => {
    return mysql.createConnection({
        host: 'localhost',
        'user': 'Seed',
        database: 'blackmyth',
        password: 'Pass@word1',
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 5
    });
};