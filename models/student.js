let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbs_211",
    port: 3310
});

exports.getAllStudent = async function() {
    return await connection.awaitQuery(`SELECT nguoi_dung.id, nguoi_dung.ho, nguoi_dung.ten_lot, nguoi_dung.ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG
    FROM 
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung
    WHERE info.ma_hv = nguoi_dung.id;`);
};

exports.getStudentIDA = async function() {
    return await connection.awaitQuery(`SELECT nguoi_dung.id, nguoi_dung.ho, nguoi_dung.ten_lot, nguoi_dung.ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG
    FROM 
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung
    WHERE info.ma_hv = nguoi_dung.id
    ORDER BY nguoi_dung.id`);
};

exports.getStudentIDD = async function() {
    return await connection.awaitQuery(`SELECT nguoi_dung.id, nguoi_dung.ho, nguoi_dung.ten_lot, nguoi_dung.ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG
    FROM 
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung
    WHERE info.ma_hv = nguoi_dung.id
    ORDER BY nguoi_dung.id DESC`);
};

exports.getStudentHA = async function() {
    return await connection.awaitQuery(`SELECT nguoi_dung.id, nguoi_dung.ho, nguoi_dung.ten_lot, nguoi_dung.ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG
    FROM 
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung
    WHERE info.ma_hv = nguoi_dung.id
    ORDER BY nguoi_dung.ho`);
};

exports.getStudentHD = async function() {
    return await connection.awaitQuery(`SELECT nguoi_dung.id, nguoi_dung.ho, nguoi_dung.ten_lot, nguoi_dung.ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG
    FROM 
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung
    WHERE info.ma_hv = nguoi_dung.id
    ORDER BY nguoi_dung.ho DESC`);
};


exports.getStudentNA = async function() {
    return await connection.awaitQuery(`SELECT nguoi_dung.id, nguoi_dung.ho, nguoi_dung.ten_lot, nguoi_dung.ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG
    FROM 
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung
    WHERE info.ma_hv = nguoi_dung.id
    ORDER BY nguoi_dung.ten`);
};


exports.getStudentND = async function() {
    return await connection.awaitQuery(`SELECT nguoi_dung.id, nguoi_dung.ho, nguoi_dung.ten_lot, nguoi_dung.ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG
    FROM 
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung
    WHERE info.ma_hv = nguoi_dung.id
    ORDER BY nguoi_dung.ten DESC`);
};

