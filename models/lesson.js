let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database assignment 2",
    //port: 3310
});

exports.getAllLesson = async function() {
    return await connection.awaitQuery(`SELECT bai_giang.id as ma_bai_giang, bai_giang.ma_gv, bai_giang.ma_kh, bai_giang.ten_bai_giang, bai_giang.thoi_luong, bai_giang.upload_time, bai_giang.link_video, CONCAT(nguoi_dung.ho,  ' ', nguoi_dung.ten_lot, ' ', nguoi_dung.ten) AS ten_gv, khoa_hoc.ten_kh, khoa_hoc.ma_mon_hoc, trinh_do.ten as ten_lop, khoa_hoc.ma_mon_hoc
    FROM bai_giang, khoa_hoc, giao_vien, trinh_do, nguoi_dung
    WHERE bai_giang.ma_kh = khoa_hoc.ma_kh AND bai_giang.ma_gv = giao_vien.id AND khoa_hoc.ma_trinh_do = trinh_do.ma_trinh_do AND giao_vien.id = nguoi_dung.id ORDER BY ma_bai_giang ASC LIMIT 100;`);
};

exports.getLevelID = async function(lesson_class, lesson_level) {
    return await connection.awaitQuery(`SELECT ma_trinh_do FROM trinh_do WHERE trinh_do.ten LIKE N'${lesson_class}' AND trinh_do.loai_trinh_do LIKE N'${lesson_level}';`);
};

exports.createOneLesson = async function(values) {
    return await connection.awaitQuery(
        'INSERT INTO bai_giang SET ?', values
    )
};

exports.deleteOneLesson = async function(id) {
    return await connection.awaitQuery(
        `DELETE FROM bai_giang WHERE ma_kh = ?`, id
    );
};

exports.updateOneLesson = async function(values) {
    return await connection.awaitQuery(
        'UPDATE bai_giang SET ? WHERE ma_kh = ?', [values, values.ma_kh]
    );
};