const mongoose = require('mongoose');

var lichChieuSchema = new mongoose.Schema({
	ngaychieu: String,
	giochieu: String,
	phim_id: String,
	rapchieu_id: String,
});

var LichChieu = mongoose.model('LichChieu', lichChieuSchema, 'lichchieu');

module.exports = LichChieu;
