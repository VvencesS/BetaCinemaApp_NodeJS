const mongoose = require('mongoose');

var quanHuyenSchema = new mongoose.Schema({
	tenquanhuyen: String,
	tinhthanhpho_id: String,
});

var QuanHuyen = mongoose.model('QuanHuyen', quanHuyenSchema, 'quanhuyen');

module.exports = QuanHuyen;
