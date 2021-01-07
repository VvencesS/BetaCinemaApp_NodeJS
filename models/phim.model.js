const mongoose = require('mongoose');

var taiKhoanSchema = new mongoose.Schema({
	sothethanhvien: String,
	hoten: String,
	email: String,
	matkhau: String,
    sodienthoai: String,
    ngaysinh: Date,
    gioitinh: String,
    cmt: String,
    tinhthanhpho_id: String,
    quanhuyen_id: String,
    diachilienhe: String,
    anhdaidien: String,
});

var TaiKhoan = mongoose.model('TaiKhoan', taiKhoanSchema, 'taikhoan');

module.exports = TaiKhoan;
