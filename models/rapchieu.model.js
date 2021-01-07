const mongoose = require('mongoose');

var rapChieuSchema = new mongoose.Schema({
	tenrap: String,
    diachi: String,
    anhrap: String,
});

var RapChieu = mongoose.model('RapChieu', rapChieuSchema, 'rapchieu');

module.exports = RapChieu;