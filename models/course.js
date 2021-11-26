let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_assignment2",
    // port: 3310
});

exports.getAllFood = async function() {
    return await connection.awaitQuery("SELECT * FROM khoa_hoc");
};
