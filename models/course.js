let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbs_211",
    // port: 3310
});

exports.getAllCourse = async function() {
    return await connection.awaitQuery(`SELECT khoa_hoc.ma_trinh_do, khoa_hoc.ma_kh, khoa_hoc.ten_kh, khoa_hoc.ma_combo, khoa_hoc.ma_mon_hoc, khoa_hoc.ngay_bat_dau, khoa_hoc.ngay_ket_thuc, khoa_hoc.han_dk, khoa_hoc.hoc_phi, khoa_hoc.mo_ta, khoa_hoc.kieu_kh, khoa_hoc.hinh_anh, trinh_do.ten, trinh_do.loai_trinh_do, CONCAT(nguoi_dung.ho,  ' ', nguoi_dung.ten_lot, ' ', nguoi_dung.ten) AS ten_gv FROM khoa_hoc, trinh_do, day_hoc, nguoi_dung WHERE khoa_hoc.ma_trinh_do = trinh_do.ma_trinh_do AND day_hoc.ma_kh = khoa_hoc.ma_kh AND nguoi_dung.id = day_hoc.ma_gv ORDER BY ma_kh ASC;`);
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