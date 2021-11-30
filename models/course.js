let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbs",
    port: 3310
});

exports.getAllCourse = async function() {
    return await connection.awaitQuery("SELECT * FROM khoa_hoc, trinh_do WHERE khoa_hoc.ma_trinh_do = trinh_do.ma_trinh_do ORDER BY ma_kh ASC;");
};

exports.getLevelID = async function(course_class, course_level) {
    return await connection.awaitQuery(`SELECT ma_trinh_do FROM trinh_do WHERE trinh_do.ten LIKE N'${course_class}' AND trinh_do.loai_trinh_do LIKE N'${course_level}';`);
};

exports.createOneCourse = async function(values) {
    return await connection.awaitQuery(
        'INSERT INTO khoa_hoc SET ?', values
    )
};

exports.deleteOneCourse = async function(id) {
    return await connection.awaitQuery(
        `DELETE FROM khoa_hoc WHERE ma_kh = ?`, id
    );
};

exports.updateOneCourse = async function(values) {
    console.log(values);
    return await connection.awaitQuery(
        'UPDATE khoa_hoc SET ? WHERE ma_kh = ?', [values, values.ma_kh]
    );
};