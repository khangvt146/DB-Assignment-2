let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbs_211",
    port: 3308
});

exports.getAllTeacher = async function() {
    return await connection.awaitQuery(`SELECT CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, email, so_luong_theo_doi, noi_cong_tac, mo_ta, ten_mon, bang_cap
    FROM
        (SELECT id, so_luong_theo_doi, noi_cong_tac, mo_ta, ten_mon, bang_cap
        FROM
           (SELECT giao_vien.id, COUNT(theo_doi.ma_hv) AS so_luong_theo_doi, giao_vien.noi_cong_tac, giao_vien.mo_ta
            FROM giao_vien, theo_doi
            WHERE giao_vien.id = theo_doi.ma_gv
            GROUP BY giao_vien.id) AS HS_theodoi,

           (SELECT ten_mon_hoc.ma_gv, ten_mon_hoc.ten_mon, ten_bang_cap.bang_cap
            FROM
                (SELECT chuyen_ve.ma_gv, mon_hoc.ten as ten_mon
                FROM chuyen_ve, mon_hoc
                WHERE chuyen_ve.ma_mon_hoc = mon_hoc.ma_mon_hoc) AS ten_mon_hoc,

                (SELECT giao_vien.id, bang_cap.bang_cap
                FROM giao_vien, bang_cap
                WHERE giao_vien.id = bang_cap.id) AS ten_bang_cap
            WHERE ten_mon_hoc.ma_gv = ten_bang_cap.id) AS BC_MH
        WHERE BC_MH.ma_gv = HS_theodoi.id) AS semi_info,

        (SELECT nguoi_dung.ho, nguoi_dung.ten_lot, nguoi_dung.ten, nguoi_dung.email, giao_vien.id
        FROM nguoi_dung, giao_vien
        WHERE giao_vien.id = nguoi_dung.id) AS ten_mail
    WHERE ten_mail.id = semi_info.id
    ORDER BY ten, ten_lot, ho;`);
};
