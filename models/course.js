let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database assignment 2",
    // port: 3310
});

exports.getAllCourse = async function() {
    return await connection.awaitQuery("SELECT * FROM khoa_hoc, trinh_do WHERE khoa_hoc.ma_trinh_do = trinh_do.ma_trinh_do ORDER BY ma_kh ASC;");
};