var mysql = require('mysql');

module.exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
		    host: "localhost",
            port: "3306",
            user: "root",
            password: "",
            database: "shopshoe"
		});

        cn.connect();

        cn.query(sql, function(error, rows, fields) {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }

            cn.end();
        });
    });
}

module.exports.save = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
		    host: "localhost",
            port: "3306",
            user: "root",
            password: "",
            database: "shopshoe"
		});

        cn.connect();

        cn.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }

            cn.end();
        });
    });
}