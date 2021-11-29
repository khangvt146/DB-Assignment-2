SELECT CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, ketqua.tong_diem
FROM nguoi_dung, (SELECT ma_hv, MAX(tong_diem) AS tong_diem FROM ketqua_hoctap GROUP BY ma_hv) AS ketqua
WHERE nguoi_dung.id = ketqua.ma_hv AND ketqua.tong_diem >= 9.0
ORDER BY ketqua.tong_diem;


SELECT trinh_do.ten, COUNT(*) AS SL_KhoaHoc
FROM mon_hoc, khoa_hoc, trinh_do
WHERE mon_hoc.ten = 'Toán học' AND khoa_hoc.ma_mon_hoc = mon_hoc.ma_mon_hoc AND khoa_hoc.ma_trinh_do = trinh_do.ma_trinh_do
GROUP BY trinh_do.ten
HAVING SL_KhoaHoc > 3
ORDER BY SL_KhoaHoc DESC;

SELECT info.ho_va_ten, SUM(bai_giang.thoi_luong) as tong_so_gio, info.ngay_bat_dau_day
FROM bai_giang, (SELECT giao_vien.id AS id, 
                        CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten,
                        ngay_bat_dau_day
                FROM nguoi_dung JOIN giao_vien ON nguoi_dung.id = giao_vien.id) AS info
WHERE info.id = bai_giang.ma_gv
GROUP BY info.id
HAVING tong_so_gio > 500
ORDER BY tong_so_gio DESC;

SELECT giao_vien.id, CONCAT(ho,  ' ', ten_lot, ' ', ten) AS ho_va_ten, noi_cong_tac, he_so_luong
FROM nguoi_dung JOIN giao_vien ON nguoi_dung.id = giao_vien.id
GROUP BY he_so_luong;

