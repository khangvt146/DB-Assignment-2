let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database assignment 2",
    //port: 3310
});

exports.getAllStudent = async function() {
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt
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
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt
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
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt
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
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt
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
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt
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
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt
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
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt
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
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt
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
    return await connection.awaitQuery(`SELECT DISTINCT nguoi_dung.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, nguoi_dung.ten_dang_nhap, nguoi_dung.mat_khau, nguoi_dung.ngay_sinh, nguoi_dung.gioi_tinh, nguoi_dung.xa_phuong, nguoi_dung.quan_huyen, nguoi_dung.tinh_tp, nguoi_dung.email, truong_hoc, so_KHTG, diem.tong_diem, so_dien.sdt
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