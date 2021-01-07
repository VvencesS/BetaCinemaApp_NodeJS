const mongoose = require('mongoose');

var tinhThanhPhoSchema = new mongoose.Schema({
	tentinhthanhpho: String,
});

var TinhThanhPho = mongoose.model('TinhThanhPho', tinhThanhPhoSchema, 'tinhthanhpho');

module.exports = TinhThanhPho;