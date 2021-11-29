let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbs_211",
    // port: 3310
});

exports.getAllStudent = async function() {
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt, nguoi_dung.ten, nguoi_dung.ten_lot, nguoi_dung.ho, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau
    FROM
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung,
        (SELECT ma_hv, MAX(tong_diem) AS tong_diem
         FROM ketqua_hoctap
         GROUP BY ma_hv) AS diem,
         (SELECT id, sdt.sdt FROM sdt GROUP BY id) AS so_dien
    WHERE info.ma_hv = nguoi_dung.id AND diem.ma_hv = nguoi_dung.id AND nguoi_dung.id = so_dien.id;`);
};

exports.getStudentIDA = async function() {
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt, nguoi_dung.ten, nguoi_dung.ten_lot, nguoi_dung.ho, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau
    FROM
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung,
        (SELECT ma_hv, MAX(tong_diem) AS tong_diem
         FROM ketqua_hoctap
         GROUP BY ma_hv) AS diem,
         (SELECT id, sdt.sdt FROM sdt GROUP BY id) AS so_dien
    WHERE info.ma_hv = nguoi_dung.id AND diem.ma_hv = nguoi_dung.id AND nguoi_dung.id = so_dien.id
    ORDER BY nguoi_dung.id`);
};

exports.getStudentIDD = async function() {
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt, nguoi_dung.ten, nguoi_dung.ten_lot, nguoi_dung.ho, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau
    FROM
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung,
        (SELECT ma_hv, MAX(tong_diem) AS tong_diem
         FROM ketqua_hoctap
         GROUP BY ma_hv) AS diem,
         (SELECT id, sdt.sdt FROM sdt GROUP BY id) AS so_dien
    WHERE info.ma_hv = nguoi_dung.id AND diem.ma_hv = nguoi_dung.id AND nguoi_dung.id = so_dien.id
    ORDER BY nguoi_dung.id DESC`);
};

exports.getStudentHA = async function() {
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt, nguoi_dung.ten, nguoi_dung.ten_lot, nguoi_dung.ho, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau
    FROM
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung,
        (SELECT ma_hv, MAX(tong_diem) AS tong_diem
         FROM ketqua_hoctap
         GROUP BY ma_hv) AS diem,
         (SELECT id, sdt.sdt FROM sdt GROUP BY id) AS so_dien
    WHERE info.ma_hv = nguoi_dung.id AND diem.ma_hv = nguoi_dung.id AND nguoi_dung.id = so_dien.id
    ORDER BY nguoi_dung.ho`);
};

exports.getStudentHD = async function() {
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt, nguoi_dung.ten, nguoi_dung.ten_lot, nguoi_dung.ho, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau
    FROM
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung,
        (SELECT ma_hv, MAX(tong_diem) AS tong_diem
         FROM ketqua_hoctap
         GROUP BY ma_hv) AS diem,
         (SELECT id, sdt.sdt FROM sdt GROUP BY id) AS so_dien
    WHERE info.ma_hv = nguoi_dung.id AND diem.ma_hv = nguoi_dung.id AND nguoi_dung.id = so_dien.id
    ORDER BY nguoi_dung.ho DESC`);
};


exports.getStudentNA = async function() {
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt, nguoi_dung.ten, nguoi_dung.ten_lot, nguoi_dung.ho, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau
    FROM
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung,
        (SELECT ma_hv, MAX(tong_diem) AS tong_diem
         FROM ketqua_hoctap
         GROUP BY ma_hv) AS diem,
         (SELECT id, sdt.sdt FROM sdt GROUP BY id) AS so_dien
    WHERE info.ma_hv = nguoi_dung.id AND diem.ma_hv = nguoi_dung.id AND nguoi_dung.id = so_dien.id
    ORDER BY nguoi_dung.ten`);
};


exports.getStudentND = async function() {
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt, nguoi_dung.ten, nguoi_dung.ten_lot, nguoi_dung.ho, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau
    FROM
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung,
        (SELECT ma_hv, MAX(tong_diem) AS tong_diem
         FROM ketqua_hoctap
         GROUP BY ma_hv) AS diem,
         (SELECT id, sdt.sdt FROM sdt GROUP BY id) AS so_dien
    WHERE info.ma_hv = nguoi_dung.id AND diem.ma_hv = nguoi_dung.id AND nguoi_dung.id = so_dien.id
    ORDER BY nguoi_dung.ten DESC`);
};

exports.getStudentNSA = async function() {
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt, nguoi_dung.ten, nguoi_dung.ten_lot, nguoi_dung.ho, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau
    FROM
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung,
        (SELECT ma_hv, MAX(tong_diem) AS tong_diem
         FROM ketqua_hoctap
         GROUP BY ma_hv) AS diem,
         (SELECT id, sdt.sdt FROM sdt GROUP BY id) AS so_dien
    WHERE info.ma_hv = nguoi_dung.id AND diem.ma_hv = nguoi_dung.id AND nguoi_dung.id = so_dien.id
    ORDER BY nguoi_dung.ngay_sinh`);
};

exports.getStudentNSD = async function() {
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt, nguoi_dung.ten, nguoi_dung.ten_lot, nguoi_dung.ho, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau
    FROM
        (SELECT hoc_vien.ma_hv, hoc_vien.truong_hoc, COUNT(tham_gia.ma_kh) AS so_KHTG
        FROM hoc_vien, tham_gia
        WHERE hoc_vien.ma_hv = tham_gia.ma_hv
        GROUP BY hoc_vien.ma_hv) AS info,
        nguoi_dung,
        (SELECT ma_hv, MAX(tong_diem) AS tong_diem
         FROM ketqua_hoctap
         GROUP BY ma_hv) AS diem,
         (SELECT id, sdt.sdt FROM sdt GROUP BY id) AS so_dien
    WHERE info.ma_hv = nguoi_dung.id AND diem.ma_hv = nguoi_dung.id AND nguoi_dung.id = so_dien.id
    ORDER BY nguoi_dung.ngay_sinh DESC`);
};

exports.deleteOneStudent = async function(values) {
    await connection.awaitQuery(
        `DELETE FROM hoc_vien WHERE ma_hv = ?`, [values]
    );
    await connection.awaitQuery(
        `DELETE FROM nguoi_dung WHERE id = ?;`, [values]
    );
};

exports.updateOneStudent = async function(values) {
    // await connection.awaitQuery(
    //     'UPDATE nguoi_dung SET (ho = ?,ten_lot = ?, ten = ?, ten_dang_nhap = ?, ngay_sinh = ?, gioi_tinh = ?, xa_phuong = ?, quan_huyen = ?, tinh_tp = ?, email = ?) WHERE id = ?', [values.GV_FName, values.GV_MName, values.GV_LName, values.GV_Login_Name, values.GV_Birthday, (values.GV_Sex=='Nam')?0:1, values.GV_Ward, values.GV_District, values.GV_City, values.GV_Mail, Number(values.GV_ID)]
    // );
    console.log(values);
    await connection.awaitQuery(`UPDATE nguoi_dung SET ? WHERE id = ?`, [values, values.id])
};

exports.updateStudent = async function(id, values) {
    // await connection.awaitQuery(
    //     'UPDATE nguoi_dung SET (ho = ?,ten_lot = ?, ten = ?, ten_dang_nhap = ?, ngay_sinh = ?, gioi_tinh = ?, xa_phuong = ?, quan_huyen = ?, tinh_tp = ?, email = ?) WHERE id = ?', [values.GV_FName, values.GV_MName, values.GV_LName, values.GV_Login_Name, values.GV_Birthday, (values.GV_Sex=='Nam')?0:1, values.GV_Ward, values.GV_District, values.GV_City, values.GV_Mail, Number(values.GV_ID)]
    // );

    await connection.awaitQuery(`UPDATE hoc_vien SET ? WHERE ma_hv = ?`, [values, id])
};

exports.checkID = async function(id) {
    return await connection.awaitQuery('SELECT * FROM nguoi_dung WHERE id = ?', id);
}

exports.addOneStudent = async function(values) {
    console.log(values);
    await connection.awaitQuery('INSERT INTO nguoi_dung SET ?', values);
};

exports.addStudent = async function(values) {
    console.log(values);
    await connection.awaitQuery('INSERT INTO hoc_vien SET ?', values);
};