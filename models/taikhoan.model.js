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

taiKhoanSchema.pre('save', (next) => {
	const taiKhoan = this;

	if (taiKhoan.isModified('matkhau')) {
		return next();
	}

	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err);
		}
		bcrypt.hash(taiKhoan.matkhau, salt, (err, hash) => {
			if (err) {
				return next(err)
			}
			taiKhoan.matkhau = hash;
			next();
		});
	});
});

taiKhoanSchema.methods.comparePassword = function (candidatePassword) {
	const taiKhoan = this;
	return new Promise((resolve, reject) => {
		bcrypt.compare(candidatePassword, taiKhoan.matkhau, (err, isMatch) => {
			if (err) {
				return reject(err);
			}
			if (!isMatch) {
				return reject(err);
			}
			resolve(true);
		});
	});

}

const TaiKhoan = mongoose.model('TaiKhoan', taiKhoanSchema, 'taikhoan');

module.exports = TaiKhoan;