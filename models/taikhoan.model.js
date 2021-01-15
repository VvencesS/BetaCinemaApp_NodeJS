const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const taiKhoanSchema = new mongoose.Schema({
	sothethanhvien: String,
	hoten: String,
	email: String,
	matkhau: String,
	sodienthoai: String,
	ngaysinh: String,
	gioitinh: String,
	cmt: String,
	tinhthanhpho_id: String,
	quanhuyen_id: String,
	diachilienhe: String,
	anhdaidien: String,
});

const TaiKhoan = mongoose.model('TaiKhoan', taiKhoanSchema, 'taikhoan');
module.exports = TaiKhoan;