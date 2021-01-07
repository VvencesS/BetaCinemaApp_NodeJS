const mongoose = require('mongoose');

var tinTucVaUuDaiSchema = new mongoose.Schema({
	loaitmvakm: String,
	tentmvakm: String,
	noidunng: String,
	anhtmvakm: String,
});

var TinTucVaUuDai = mongoose.model('TinTucVaUuDai', tinTucVaUuDaiSchema, 'tintucvauudai');

module.exports = TinTucVaUuDai;